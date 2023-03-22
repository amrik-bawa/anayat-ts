<?php
add_action( 'rest_api_init', function () {
    register_rest_route( 'dashboard', '/login', array(
      'methods' => 'POST',
      'callback' => 'trans_login',
    ) );
    register_rest_route( 'dashboard', '/recent/signups', array(
      'methods' => 'GET',
      'permission_callback' =>  'checkTokenValidation',
      'callback' => 'trans_recent_signups',
    ) );
    register_rest_route( 'dashboard', '/live/adverts', array(
      'methods' => 'GET',
      'permission_callback' =>  'checkTokenValidation',
      'callback' => 'trans_live_adverts',
    ) );
    register_rest_route( 'dashboard', '/users/customers', array(
      'methods' => 'GET',
      'permission_callback' =>  'checkTokenValidation',
      'callback' => 'trans_customer',
    ) );
    register_rest_route( 'dashboard', '/users/administrator', array(
      'methods' => 'GET',
      'permission_callback' =>  'checkTokenValidation',
      'callback' => 'trans_administrator',
    ) );
    register_rest_route( 'dashboard', '/users/get/(?P<id>\d+)', array(
      'methods' => 'GET',
      // 'permission_callback' =>  'checkTokenValidation',
      'callback' => 'trans_get_users_detail',
    ) );
    register_rest_route( 'dashboard', '/advert/locations', array(
      'methods' => 'GET',
      // 'permission_callback' =>  'checkTokenValidation',
      'callback' => 'trans_advert_locations',
    ) );

    // Reminder API
    register_rest_route( 'dashboard', '/reminder', array(
      'methods' => 'POST',
      // 'permission_callback' =>  'checkTokenValidation',
      'callback' => 'trans_save_reminder',
    ) );
    register_rest_route( 'dashboard', '/reminder', array(
      'methods' => 'GET',
      // 'permission_callback' =>  'checkTokenValidation',
      'callback' => 'trans_get_reminder',
    ) );
    register_rest_route( 'dashboard', '/reminder/cats', array(
      'methods' => 'GET',
      // 'permission_callback' =>  'checkTokenValidation',
      'callback' => 'trans_reminder_categories',
    ) );
    register_rest_route( 'dashboard', '/locations', array(
      'methods' => 'GET',
      // 'permission_callback' =>  'checkTokenValidation',
      'callback' => 'trans_locations',
    ) );
  } );


  function trans_locations(){
    $locations = get_terms([
      'taxonomy' => 'locations',
      'hide_empty' => false,
      // 'fields' => 'id=>name'
  ]);
  $h_locations = get_taxonomy_hierarchy('locations');

  return $locations;
  }

  function trans_reminder_categories($req){
    return $terms = get_terms([
      'taxonomy' => 'reminder_category',
      'hide_empty' => false,
  ]);
  }
  function trans_get_reminder(){
    $args = array(
      'numberposts' => 10,
      'post_type'   => 'reminder'
    );
    
    $all_reminders = get_posts( $args );
    $final_reminder = [];
    // print_r($all_reminders);
    foreach($all_reminders as $single_reminder){
      $term_obj_list = get_the_terms( $single_reminder->ID, 'reminder_category' );
      // print_r($term_obj_list);
      $final_reminder_sub = [
        'title' => $single_reminder->post_title,
        'content' => $single_reminder->post_content,
        'priority' => get_post_meta($single_reminder->ID , 'priority', true),
        'category_id' => $term_obj_list[0]->term_id,
        'category_name' => $term_obj_list[0]->name
      ];
      $final_reminder[] = $final_reminder_sub;

    }
    return $final_reminder;
  }
  function trans_save_reminder($req){
      if($req['title'] == "" || $req['content'] == "" ||  $req['category'] == ""){
      return new WP_Error( '401', esc_html__( 'fill all required fields', 'text_domain' ), array( 'status' => 401 ) );
    }
    $my_post = array(
      'post_title'    => wp_strip_all_tags( $req['title'] ),
      'post_content'  => $req['content'],
      'post_status'   => 'publish',
      // 'post_author'   => 1,
      'post_type' => 'reminder',
      // 'post_category' => array( 8,39 )
    );
    
    // Insert the post into the database
    $post_id =  wp_insert_post( $my_post );
    if(!is_wp_error($post_id)){
      update_post_meta($post_id , 'priority' , $req['priority']);
      return ['status' => true];
    }else{
      //there was an error in the post insertion, 
      return ['status' => false , 'error'  => $post_id->get_error_message()];
    }
  }
  function trans_advert_locations($req){
    // Default Spaces
    $trans_advert_locations = [];
    $subscriptionssearlize = get_option('subscriptionData');
    $subscriptiondata_unserialized = unserialize($subscriptionssearlize);
    $trans_advert_locations['ts_of_the_week']['default_spaces'] =  'NA';//$subscriptiondata_unserialized[1274];
    $trans_advert_locations['vip_ts_lounge']['default_spaces'] = $subscriptiondata_unserialized[1963]['count'];
    $trans_advert_locations['pay_per_view_ts_girls']['default_spaces'] = $subscriptiondata_unserialized[1272]['count'];
    $trans_advert_locations['spotlight_ts_girls']['default_spaces'] = $subscriptiondata_unserialized[1261]['count'];
    $trans_advert_locations['featured_ts_Girls']['default_spaces'] = $subscriptiondata_unserialized[3346]['count'];
    $trans_advert_locations['standard_ts_girls']['default_spaces'] = $subscriptiondata_unserialized[1187]['count'];

    // available spaces
    $current_user_subs = wcs_get_subscriptions(['customer_id' => get_current_user_id() , 'subscription_status' => ['wc-active'], 'product_id' => 650]);
    $trans_advert_locations['vip_ts_lounge']['available_spaces'] = get_available_spaces_for_vip();
    $trans_advert_locations['spotlight_ts_girls']['available_spaces'] = get_available_spaces_for_spotlight();
    $trans_advert_locations['featured_ts_Girls']['available_spaces'] = get_available_spaces_for_featured();
    $trans_advert_locations['standard_ts_girls']['available_spaces'] = get_available_spaces_for_standard();
    $trans_advert_locations['ts_of_the_week']['available_spaces'] = get_available_spaces_for_ts_of_the_week();
    $trans_advert_locations['pay_per_view_ts_girls']['available_spaces'] =  get_available_spaces_for_ppv();

    // Current Adverts
    $ts_of_the_week            = get_users_by_prod([650, 1274]);
    $spotlight_ts_girls      = get_users_by_prod([588, 1261]);
    $featured_ts_Girls      = get_users_by_prod([588, 1261]);
    $standard_ts_girls = get_users_by_prod_with_order_id([1187, 586]);
    $ppv_subs = get_users_by_prod([652, 1272]);
    $vip_ts_lounge = get_users_by_prod([648, 1963]);
    $trans_advert_locations['ts_of_the_week']['current_adverts']  = count($ts_of_the_week);
    $trans_advert_locations['spotlight_ts_girls']['current_adverts']  = count($spotlight_ts_girls);
    $trans_advert_locations['featured_ts_Girls']['current_adverts']  = count($featured_ts_Girls);
    $trans_advert_locations['standard_ts_girls']['current_adverts']  = count($standard_ts_girls);
    $trans_advert_locations['pay_per_view_ts_girls']['current_adverts']  = count($ppv_subs);
    $trans_advert_locations['vip_ts_lounge']['current_adverts']  = count($vip_ts_lounge);


    // products 
    $ts_of_the_week_product = wc_get_product(1274);
    $spotlight_ts_girls_product = wc_get_product(1261);
    $featured_ts_Girls_product = wc_get_product(1260);
    $standard_ts_girls_product = wc_get_product(1187);
    $pay_per_view_ts_girls_product = wc_get_product(1272);
    $vip_ts_lounge_product = wc_get_product(1963);
      

    $trans_advert_locations['ts_of_the_week']['price']  = $ts_of_the_week_product->get_price();
    $trans_advert_locations['spotlight_ts_girls']['price']  = $spotlight_ts_girls_product->get_price();
    $trans_advert_locations['featured_ts_Girls']['price']  = $featured_ts_Girls_product->get_price();
    $trans_advert_locations['standard_ts_girls']['price']  = $standard_ts_girls_product->get_price();
    $trans_advert_locations['pay_per_view_ts_girls']['price']  = $pay_per_view_ts_girls_product->get_price();
    $trans_advert_locations['vip_ts_lounge']['price']  = $vip_ts_lounge_product->get_price();

    $trans_advert_locations['ts_of_the_week']['title']  = $ts_of_the_week_product->get_title();
    $trans_advert_locations['spotlight_ts_girls']['title']  = $spotlight_ts_girls_product->get_title();
    $trans_advert_locations['featured_ts_Girls']['title']  = $featured_ts_Girls_product->get_title();
    $trans_advert_locations['standard_ts_girls']['title']  = $standard_ts_girls_product->get_title();
    $trans_advert_locations['pay_per_view_ts_girls']['title']  = $pay_per_view_ts_girls_product->get_title();
    $trans_advert_locations['vip_ts_lounge']['title']  = $vip_ts_lounge_product->get_title();


    $trans_advert_locations['ts_of_the_week']['package_desc']  = wpm_string_to_ml_array(get_post_meta($ts_of_the_week_product->get_id(), 'package_desc', true))[wpm_get_language()];
    $trans_advert_locations['spotlight_ts_girls']['package_desc']  =  wpm_string_to_ml_array(get_post_meta($spotlight_ts_girls_product->get_id(), 'package_desc', true))[wpm_get_language()];
    $trans_advert_locations['featured_ts_Girls']['package_desc']  = wpm_string_to_ml_array(get_post_meta($featured_ts_Girls_product->get_id(), 'package_desc', true))[wpm_get_language()]; 
    $trans_advert_locations['standard_ts_girls']['package_desc']  = wpm_string_to_ml_array(get_post_meta($standard_ts_girls_product->get_id(), 'package_desc', true))[wpm_get_language()];
    $trans_advert_locations['pay_per_view_ts_girls']['package_desc']  = wpm_string_to_ml_array(get_post_meta($pay_per_view_ts_girls_product->get_id(), 'package_desc', true))[wpm_get_language()];
    $trans_advert_locations['vip_ts_lounge']['package_desc']  = wpm_string_to_ml_array(get_post_meta($vip_ts_lounge_product->get_id(), 'package_desc', true));
    

    $ts_of_the_week_hold_up = get_field('ts_of_the_week_hold-up', 'option');

    $trans_advert_locations['ts_of_the_week']['product_id']  = 1274;
    $trans_advert_locations['spotlight_ts_girls']['product_id']  = 1261;
    $trans_advert_locations['featured_ts_Girls']['product_id']  = 1260;
    $trans_advert_locations['standard_ts_girls']['product_id']  = 1187;
    $trans_advert_locations['pay_per_view_ts_girls']['product_id']  = 1272;
    $trans_advert_locations['vip_ts_lounge']['product_id']  = 1963;

    // $trans_advert_locations['ts_of_the_week']['placeholders']  = ["id" =>  , 'url' => ];
    // $trans_advert_locations['spotlight_ts_girls']['product_id']  = 1261;
    // $trans_advert_locations['featured_ts_Girls']['product_id']  = 1260;
    // $trans_advert_locations['standard_ts_girls']['product_id']  = 1187;
    // $trans_advert_locations['pay_per_view_ts_girls']['product_id']  = 1272;
    // $trans_advert_locations['vip_ts_lounge']['product_id']  = 1963;

    return $trans_advert_locations;
  }
  function trans_get_users_detail($req){
    // print_r($req);
    $keys=["nickname" , "first_name" , "last_name" , "description" , "description_model" , "gallery",  "private_gallery" , "billing_address_1" ,"billing_city" , "billing_state" , "billing_postcode" , "billing_country" , "billing_first_name" , "billing_last_name" , "billing_company" , "facebook" , "instagram"  ,"gallery_landscape" , "email-verified" , "outcall_fee_overnight" , "outcall_fee_4_hr" , "outcall_fee_2_hr" , "outcall_fee_1_hr" ,"outcall_fee_30_min" ,"outcall_fee_15_min" ,"instagram_link_2" , "twitter_link_2" ,"allow_whatsapp_contact" , "tiktok_link" , "instagram_link" , "snapchat_link" , "twitter_link" , "used_social" , "fancentro_link" , "manyvids_link" ,"onlyfans_link" , "used_ppv" , "bongacams_link" ,"chaturbate_link" , "stripchat_link" , "livejasmin_link" , "used_webcam"  ,"incall_fee_overnight" ,"incall_fee_4_hr" , "incall_fee_2_hr" , "incall_fee_1_hr" , "incall_fee_30_min" , "incall_fee_15_min" , "rate_offer" , "service_fee_watersports" ,"service_fee_swallow"  ,"service_fee_rimming(giving)" , "service_fee_pse" , "service_fee_prostatemassage" , "service_fee_owo" , "service_fee_footworship"  ,"service_fee_finger/fisting(receiving)" , "service_fee_finger/fisting(giving)" , "service_fee_filming"  ,"service_fee_facial" , "service_fee_dtf" , "service_fee_cim" , "service_fee_cum" , "services" ,"gender_service" , "acceptance" , "account-type" , "languages" ,"cock-size" , "body" ,"butt" ,"breasts-cup" , "breasts-size" ,"eyes"  , "hair" ,"weight" ,"height" ,"nationality" ,"ethnicity" ,"orientation" ,"gender" ,"year-birth" ,"month-birth" ,"day-birth" ,"registration-phone" ,"youtube" ,"twitter" ,"tumblr" , "soundcloud" ,"instagram"];
    $params = $req->get_url_params();
    $all_user_data = [];
    $user_id = $params['id'];
    $user_main_info = get_user_by('ID' , $user_id);
    $user_data = $user_main_info->data;
    foreach ($user_data as $key => $value) {
        $all_user_data[$key]=$value;
    }
    // print_r(get_user_meta($user_id));
    foreach($keys as $single){
      $single_2=str_replace('-','_',$single);

      $all_user_data[$single_2] = get_user_meta($user_id , $single ,  true);
    }
    $api_user_data['registration_phone']=12312313;
    // print_r/(get_user_meta($user_id));
    return $all_user_data;
  }
  function checkTokenValidation($req){

    $Jwt_Auth_Public = new Jwt_Auth_Public('' ,'');
    $token =  $Jwt_Auth_Public->validate_token($req );


    	if ( is_wp_error( $token ) ) {
			if ( $token->get_error_code() != 'jwt_auth_no_auth_header' ) {
				/** If there is an error, store it to show it after see rest_pre_dispatch */
				
      }
      return new WP_Error( '401', esc_html__( $token->get_error_code(), 'text_domain' ), array( 'status' => 401 ) );
    }else{
      return true;
    }
      
    $token = get_option('bearer_token');
    $headers = $req->get_headers();
    $auth_token = $headers['authorization'][0];

    if ( $auth_token == '' ) {
      return new WP_Error( '401', esc_html__( 'Please provide token', 'text_domain' ), array( 'status' => 401 ) );
    }
    if ( $token != $auth_token ) {
      return new WP_Error( '401', esc_html__( 'Not Authorized', 'text_domain' ), array( 'status' => 401 ) );
    }

    return true;
  }
  function trans_login($request){
    $creds['user_login'] = $request["username"];
    $creds['user_password'] =  $request["password"];
    $creds['remember'] = true;
    $user = wp_signon( $creds, false );
    return $user;
  }
  function trans_recent_signups($request){
    return trans_get_all_users($request , 'subscriber');
  }
  function trans_live_adverts($request){
    global $wpdb;
    $records_per_page = isset($request["records_per_page"]) ? $request["records_per_page"]  : 10;
    $paged = ($request["page"]) ? $request["page"] : 1;
    $from = ($request["from"]) ? $request["from"] : false;
    $to = ($request["to"]) ? $request["to"] : false;
    $date_query = $final_recods = [];

    if($from && $to){
      $date_query = [
        [
          'after'     => $from,
          'before'    => $to,
          'inclusive' => true,
        ],
      ];
    }
    $subscriptions = get_posts( [
      'posts_per_page' => $records_per_page,
      'paged'        => $paged,
      'post_type'   => 'shop_subscription', // Subscription post type
      'post_status' => 'wc-active', // Active subscription
      'orderby' => 'post_date', // ordered by date
      'order' => 'DESC',
      'date_query' => $date_query,
      'fields' => 'ids'
     
    ]);
    $subscriptions_all = count(get_posts( [
      'posts_per_page' => -1,
      'post_type'   => 'shop_subscription', // Subscription post type
      'post_status' => 'wc-active', // Active subscription
      'date_query' => $date_query,
      'fields' => 'ids'
     
    ]));
    $key = 0;
    foreach($subscriptions as $sub_id){
      $final_recods[$key]['start_date'] = date("d/m/Y" , strtotime(get_post_meta($sub_id, '_schedule_start', true)));
      $final_recods[$key]['sub_id'] = $sub_id;
      $final_recods[$key]['end_date']   = date("d/m/Y" , strtotime(get_post_meta($sub_id, '_schedule_next_payment', true))); 
      $final_recods[$key]['customer_id'] = $customer_id =  get_post_meta($sub_id , '_customer_user' , true);
      $final_recods[$key]['order_id']  = $order_id =  wp_get_post_parent_id($sub_id);
      $result = $wpdb->get_results('select t1.order_item_id , t2.* FROM  
            '. $wpdb->prefix.'woocommerce_order_items as t1 
            JOIN '. $wpdb->prefix.'woocommerce_order_itemmeta as t2 ON t1.order_item_id = t2.order_item_id 
            where (t2.meta_key="_variation_id" or t2.meta_key="_product_id")  and  t1.order_id='.$sub_id);
      $variation_id = $result[1]->meta_value;
      $product_id = $result[0]->meta_value;
      $advert_title = '';
      if($variation_id != ''){
        $advert_title = get_the_title($variation_id);
      }else{
        $advert_title = get_the_title($product_id);
      }
      $final_recods[$key]['order_id']  = wp_get_post_parent_id($sub_id);
      $final_recods[$key]['advert_title'] = $advert_title;
      $verifieduser = get_user_meta($customer_id , 'email-verified', 2);
      $customer = get_user_by('ID' , $customer_id);
      $is_user_verified = ($verifieduser && $customer->user_email);
      $final_recods[$key]['is_user_verified']  = $is_user_verified;

      $user_gallary = get_user_meta($customer_id , 'gallery' , true);
      $user_pic = wp_get_attachment_url($user_gallary[0]);
      if(!$user_pic){
        $first_name = get_user_meta($customer_id, 'first_name', true);
        $last_name = get_user_meta($customer_id, 'last_name', true);
        $user_pic_text = substr($first_name, 0, 1) . substr($last_name, 0, 1);;
        $final_recods[$key]['user_pic_text'] = $user_pic_text;
      }
      $final_recods[$key]['user_pic'] = $user_pic;

      $key++;
    }
   
    return [
      'total_records' => $subscriptions_all,
      'subscriptions' => $final_recods, 
    ];
  }
  function trans_customer($request){
    return trans_get_all_users($request , 'customer');
  }
  function trans_administrator($request){
  
    return trans_get_all_users($request , 'administrator');
  }

  function trans_get_all_users($request , $roles){
    
    $records_per_page = isset($request["records_per_page"]) ? $request["records_per_page"]  : 10;
    $paged = ($request["page"]) ? $request["page"] : 1;
    $args = array(
      'role'         => $roles,
      'orderby'      => 'registered', 
      'order'        => 'DESC',
      'number'       => $records_per_page ,
      // 'offset'       => $offset,
      'paged'        => $paged
    ); 
    $args_all = array(
      'role'         => $roles,
      'fields' => 'ids'
    );   
    $users = get_users( $args );
    $total_users =  count(get_users( $args_all ));
    $return_users = $full_data = [];
    $full_data['total_records'] = $total_users;
    foreach($users as $single_user){
      $verifieduser = get_user_meta($single_user->ID, 'email-verified', 2);
      $is_user_verified = ($verifieduser && $single_user->user_email);
      $single_user->is_user_verified  = $is_user_verified;
      $single_user->user_registered = date("M d, Y" , strtotime($single_user->user_registered));
      $user_gallary = get_user_meta($single_user->ID , 'gallery' , true);
      $user_pic = wp_get_attachment_url($user_gallary[0]);
      if(!$user_pic){
        $first_name = get_user_meta($single_user->ID, 'first_name', true);
        $last_name = get_user_meta($single_user->ID, 'last_name', true);
        $user_pic_text = substr($first_name, 0, 1) . substr($last_name, 0, 1);;
        $single_user->user_pic_text = $user_pic_text;
      }
      $single_user->user_pic = $user_pic;
      $return_users [] = $single_user;
    }
    $full_data['users'] = $return_users;
    return $full_data;
  }




// Register customer post types

/**
 * Register a custom post type called "reminder".
 *
 * @see get_post_type_labels() for label keys.
 */
function wpdocs_codex_book_init() {
	$labels = array(
		'name'                  => _x( 'Reminders', 'Post type general name', 'textdomain' ),
		'singular_name'         => _x( 'Reminder', 'Post type singular name', 'textdomain' ),
		'menu_name'             => _x( 'Reminders', 'Admin Menu text', 'textdomain' ),
		'name_admin_bar'        => _x( 'Reminder', 'Add New on Toolbar', 'textdomain' ),
		'add_new'               => __( 'Add New', 'textdomain' ),
		'add_new_item'          => __( 'Add New Reminder', 'textdomain' ),
		'new_item'              => __( 'New Reminder', 'textdomain' ),
		'edit_item'             => __( 'Edit Reminder', 'textdomain' ),
		'view_item'             => __( 'View Reminder', 'textdomain' ),
		'all_items'             => __( 'All Reminders', 'textdomain' ),
		'search_items'          => __( 'Search Reminders', 'textdomain' ),
		'parent_item_colon'     => __( 'Parent Reminders:', 'textdomain' ),
		'not_found'             => __( 'No Reminders found.', 'textdomain' ),
		'not_found_in_trash'    => __( 'No Reminders found in Trash.', 'textdomain' ),
		'featured_image'        => _x( 'Reminder Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'textdomain' ),
		'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
		'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
		'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
		'archives'              => _x( 'Reminder archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'textdomain' ),
		'insert_into_item'      => _x( 'Insert into reminder', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'textdomain' ),
		'uploaded_to_this_item' => _x( 'Uploaded to this reminder', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'textdomain' ),
		'filter_items_list'     => _x( 'Filter Reminders list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'textdomain' ),
		'items_list_navigation' => _x( 'Reminders list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'textdomain' ),
		'items_list'            => _x( 'Reminders list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'textdomain' ),
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'reminder' ),
		'capability_type'    => 'post',
    'has_archive'        => true,
    'has_archive'           => true,
    'show_in_rest'          => true,
    'taxonomies'=>['reminder_category'],
		'hierarchical'       => true,
		'menu_position'      => null,
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
	);

	register_post_type( 'reminder', $args );
}

add_action( 'init', 'wpdocs_codex_book_init' );


function wporg_register_taxonomy_course() {
  $labels = array(
    'name'              => _x( 'Reminder Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'Reminder Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Reminder Categories' ),
    'all_items'         => __( 'All Reminder Categories' ),
    'parent_item'       => __( 'Parent Reminder Category' ),
    'parent_item_colon' => __( 'Parent Reminder Category:' ),
    'edit_item'         => __( 'Edit Reminder Category' ),
    'update_item'       => __( 'Update Reminder Category' ),
    'add_new_item'      => __( 'Add New Reminder Category' ),
    'new_item_name'     => __( 'New Reminder Category Name' ),
    'menu_name'         => __( 'Reminder Category' ),
  );
  $args   = array(
    'hierarchical'      => true, // make it hierarchical (like categories)
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite'           => [ 'slug' => 'reminder_category' ],
  );
  register_taxonomy( 'reminder_category', [ 'reminder' ], $args );
}
add_action( 'init', 'wporg_register_taxonomy_course' );


?>
