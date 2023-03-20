import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux";
import { getUserDetails } from "../../../store/user-manager/users/usersSlice";

const EditMyDetails=()=>{

    const dispatch = useDispatch()
	const { userDetails,userDetailsProcessing } = useSelector((state) => state.users)
	
		useEffect(async() => {
			await dispatch(getUserDetails()).then(()=>{
                console.log('user details ',userDetails)
			})
		}, [])
        


const handleSubmit = event => {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log('payload data', formDataObj)
    // dispatch(addNew(formDataObj)).then(()=>{
    //   dispatch(getRemindersList())
    // })
  }
 const dates=[1,2,3,4,5,6,8,9,10,11,12,13,14,15]
 const months=[1,2,3,4,5,6,8,9,10,11,12]
 const years=[2005,2006,2007,2008,2009,2010,2011,2012]
 const genders=['TS','TV','Sissy','Post Op']
 const orientations=['Passive','Active','Versatile']
 const ethnicities=['Asian','African/Caribbean','Caucasian','Indian','Latina/o','Mixed','Other']
 const nationalities=['Asian','African/Caribbean','Caucasian','Indian','Latina/o','Mixed','Other']
 const hairs=['Auburn','Black','Blonde','Red','Other']
 const eyes=['Blue','Brown','Green','Grey','Hazel']
 const breastsCups=['Blue','Brown','Green','Grey','Hazel']
 const breastsSizes=['A','B','C','D','DD','E','F','G','H']
 const butts=['S','M','L','XL','XXL','XXXL']
 const bodies=['Athletic','Average','Curvaceous','Slim']
 const cockSizes=['3 in','4 in','5 in','6 in','7 in','8 in','9 in','10 in','11 in','12 in','13 in','Ask Me']
const languages=['English','Spanish','Italian','German','Russian','French','Chinese','Portuguese','Other','Punjabi'];

 console.log('user details ',userDetails)
    
    return <div className="my-details__section">
    <div className="wrapper">
        <form method="post" enctype="multipart/form-data"
             className="validate-form my-details-form"
            id="edit-account-form" onSubmit={handleSubmit}>
            <div className="dashboard-details-msg wrapper" >
                <div className="form-msg-container"></div>
            </div>
            <div className="form_inner">
                <div className="dashboard-grid">
                    <div className="my-personal-details">
                        <h3 className="styled-header">Personal Details</h3>
                        <div className="personal_info form-field__fieldset">
                            <h4>All fields are required.</h4>
                            <div className="line flex">
                                <label for="reg-email">Your email</label>
                                <div className="input-wrap validation">
                                    <input type="email" disabled
                                        className="woocommerce-Input woocommerce-Input--text input-text"
                                        placeholder="Enter Your Email" name="email" id="reg_email"
                                        autocomplete="email" value="cobydigital@yopmail.com" />
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-name">Username</label>
                                <div className="input-wrap validation">
                                    <input type="text"
                                        className="woocommerce-Input woocommerce-Input--text input-text"
                                        placeholder="Enter a Username" name="username" id="reg_username"
                                        autocomplete="username" value="cobydigital" />
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-region">Region</label>
                                <div className="input-wrap validation">
                                    <select name="ad_lvl_0" id="reg-region">
                                        <option value="">Select</option>
                                        <option value="19" selected>East Midlands</option>

                                    </select>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-county">County/Area:</label>
                                <div className="input-wrap validation">
                                    <select name="ad_lvl_1" id="reg-county">
                                        <option value="">Select</option>
                                    </select>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-city">City/Town/District:</label>
                                <div className="input-wrap validation">
                                    <select name="ad_lvl_2" id="reg-city">
                                        <option value="">Select</option>

                                    </select>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-phone">Phone number</label>
                                <div className="input-wrap validation">
                                    <input type="tel" value="07510058684" name="meta[registration-phone]"
                                        id="reg-phone" placeholder="Enter Your UK Phone Number"/>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-day-birth">Date of Birth</label>
                                <div className="date reg-birth">
                                    <div className="input-wrap validation">
                                        <select name="meta[day-birth]" id="reg-day-birth">
                                        <option value="">Day</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="">Day</option>
                                        <option value="">Day</option>
                                        <option value="">Day</option>
                                        <option value="">Day</option>
                                        <option value="">Day</option>
                                        <option value="">Day</option>
                                        <option value="">Day</option>
                                        <option value="">Day</option>
                                        <option value="">Day</option>
                                        <option value="">Day</option>
                                            <option value="">Day</option>
                                            <option value="">Day</option>
                                            
                                        </select>
                                    </div>
                                    <div className="input-wrap validation">
                                        <select name="meta[month-birth]">
                                            <option value="">Month</option>
                                            <option value="January">January</option>
                                        </select>
                                    </div>
                                    <div className="input-wrap validation">
                                        <select name="meta[year-birth]">
                                            <option value="">Year</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-gender">Gender</label>
                                <div className="input-wrap validation">
                                    <select name="gender" id="reg-gender" value={userDetails?.gender}>
                                    <option value="">Select</option>
                                    {genders.map((item)=><option value={item}>{item}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-orientation">Orientation</label>
                                <div className="input-wrap validation">
                                    <select name="orientation" id="reg-orientation" value={userDetails?.orientation}>
                                        <option value="">Select</option>
                                        {orientations.map((item)=><option value={item}>{item}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-ethnicity">Ethnicity</label>
                                <div className="input-wrap validation">
                                    <select name="ethnicity" id="reg-ethnicity" value={userDetails?.ethnicity}>
                                        <option value="">Select</option>
                                        {ethnicities.map((item)=><option value={item}>{item}</option>)}
                                        
                                    </select>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-nationality">Nationality</label>
                                <div className="input-wrap validation">
                                    <select name="nationality" id="reg-nationality" value={userDetails?.nationality}>
                                        <option value="">Select</option>
                                        {nationalities.map((item)=><option value={item}>{item}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-height">Height</label>
                                <div className="input-wrap validation height-input">
                                    <input  type="text" name="height" id="reg-height" value={userDetails?.height}/>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-weight">Weight</label>
                                <div className="input-wrap validation weight-input">
                                    <input type="text" name="weight" id="reg-weight" value={userDetails?.weight}/>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-hair">Hair</label>
                                <div className="input-wrap validation">
                                    <select name="meta[hair]" id="reg-hair" value={userDetails?.hair}>
                                        <option value="">Select</option>
                                        {hairs.map((item)=><option value={item}>{item}</option>)}
                                        
                                    </select>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-eyes">Eyes</label>
                                <div className="input-wrap validation">
                                    <select name="meta[eyes]" id="reg-eyes" value={userDetails?.eyes}>
                                        <option value="">Select</option>
                                        {eyes.map((item)=><option value={item}>{item}</option>)}

                                    </select>
                                </div>
                            </div>
                            <div className="line flex">
                                <label>Breasts</label>
                                <div className="register-breast">
                                    <div className="input-wrap validation">
                                        <select name="breasts_size" value={userDetails?.breasts_size} aria-label="breast size">
                                            <option value="">Size</option>
                                            {breastsSizes.map((item)=><option value={item}>{item}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="line flex">
                                <label>Breasts</label>
                                <div className="register-breast">
                                    <div className="input-wrap validation">
                                        <select name="breasts_size" value={userDetails?.breasts_size} aria-label="breast size">
                                            <option value="">Size</option>
                                            {breastsSizes.map((item)=><option value={item}>{item}</option>)}
                                        </select>
                                    </div>
                                    <div className="input-wrap validation">
                                        <select name="breasts_cup" aria-label="breast cup size" value={userDetails?.breasts_cup}>
                                            <option value="">Cup</option>
                                            {breastsCups.map((item)=><option value={item}>{item}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-butt">Butt</label>
                                <div className="input-wrap validation">
                                    <select name="butt" id="reg-butt" value={userDetails?.butt}>
                                        <option value="">Select</option>
                                        {butts.map((item)=><option value={item}>{item}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-body">Body</label>
                                <div className="input-wrap validation">
                                    <select name="body" id="reg-body" value={userDetails?.body}>
                                        <option value="">Select</option>
                                        {bodies.map((item)=><option value={item}>{item}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="line flex">
                                <label for="reg-cock-size">Cock Size</label>
                                <div className="input-wrap validation">
                                    <select name="meta[cock-size]" id="reg-cock-size" value={userDetails?.cock_size}>
                                        <option value="">Select</option>
                                        {cockSizes.map((item)=><option value={item}>{item}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="line flex al-top languages">
                                <div className="label">Languages</div>
                                <div className="input-wrap two-columns form-field__group validation">
                                {languages.map((item)=>{
                                    return (<label>
                                        {userDetails?.languages?.split(",").includes(item) ? (
        <><input type="checkbox" checked value={item} name="languages[]"/>
         <span> {item} </span></>
      ) : (
        <></>
      )}
                                        
                                    </label>)
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-rates">
                        <h3 className="styled-header">My Rates</h3>
                        <div className="my-rates-wrapper form-field__fieldset">
                            <div className="my-rates-top line flex j-start al-top">
                                <span>I offer:</span>
                                <div className="input-wrap form-field__group two-columns validation">
                                    <label>
                                        <input type="checkbox" checked name='offer[]' value="Incall"/>
                                        <span>Incall</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" checked name='offer[]' value="Outcall"/>
                                        <span>Outcall</span>
                                    </label>
                                </div>
                            </div>
                            <div className="line incalls-outcalls">
                                <h4 className="title">Incalls</h4>
                                <div className="input-wrap">
                                    <label>
                                        <strong>15 mins</strong>
                                        <input type="number" value="4" name="incall_fee_15_min"
                                            className="fee_input" placeholder="£"/>
                                    </label>
                                    <label>
                                        <strong>30 mins</strong>
                                        <input type="number" value="3" name="incall_fee_30_min"
                                            className="fee_input" placeholder="£"/>
                                    </label>
                                    <label>
                                        <strong>1 hour</strong>
                                        <input type="number" value="3" name="incall_fee_1_hr"
                                            className="fee_input" placeholder="£"/>
                                    </label>
                                    <label>
                                        <strong>2 hours</strong>
                                        <input type="number" value="3" name="incall_fee_2_hr"
                                            className="fee_input" placeholder="£"/>
                                    </label>
                                    <label>
                                        <strong>4 hours</strong>
                                        <input type="number" value="2" name="incall_fee_4_hr"
                                            className="fee_input" placeholder="£"/>
                                    </label>
                                    <label>
                                        <strong>Overnight</strong>
                                        <input type="number" value="2" name="incall_fee_overnight"
                                            className="fee_input" placeholder="£"/>
                                    </label>
                                </div>
                            </div>
                            <div className="line incalls-outcalls">
                                <h4 className="title">Outcalls</h4>
                                <div className="input-wrap">
                                    <label>
                                        <strong>15 mins</strong>
                                        <input type="number" value="22" name="outcall_fee_15_min"
                                            className="fee_input" placeholder="£"/>
                                    </label>
                                    <label>
                                        <strong>30 mins</strong>
                                        <input type="number" value="22" name="outcall_fee_30_min"
                                            className="fee_input" placeholder="£"/>
                                    </label>
                                    <label>
                                        <strong>1 hour</strong>
                                        <input type="number" value="22" name="outcall_fee_1_hr"
                                            className="fee_input" placeholder="£" />
                                    </label>
                                    <label>
                                        <strong>2 hours</strong>
                                        <input type="number" value="22" name="outcall_fee_2_hr"
                                            className="fee_input" placeholder="£" />
                                    </label>
                                    <label>
                                        <strong>4 hours</strong>
                                        <input type="number" value="22" name="outcall_fee_4_hr"
                                            className="fee_input" placeholder="£" />
                                    </label>
                                    <label>
                                        <strong>Overnight</strong>
                                        <input type="number" value="22" name="outcall_fee_overnight"
                                            className="fee_input" placeholder="£" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-service">
                        <h3 className="styled-header">My Services</h3>
                        <div className="column-wrapper form-field__fieldset">
                            <div className="line">
                                <div className="label">
                                    <h4>I offer services to</h4>
                                </div>
                                <div className="input-wrap form-field__group two-columns validation">
                                    <label>
                                        <input checked type="checkbox" value="Men" name="gender[]"/>
                                        <span>Men</span>
                                    </label>
                                    <label>
                                        <input checked type="checkbox" value="Women" name="gender[]"/>
                                        <span>Women</span>
                                    </label>
                                    <label>
                                        <input checked type="checkbox" value="MM" name="gender[]"/>
                                        <span>MM</span>
                                    </label>
                                    <label>
                                        <input checked type="checkbox" value="MF" name="gender[]"/>
                                        <span>MF</span>
                                    </label>
                                </div>
                            </div>
                            <div className="line">
                                <div className="label">
                                    <h4>Extra Services</h4>
                                </div>
                                <div className="input-wrap form-field__group validation">
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" className="select-all-services"/>
                                            <span>All Services</span>
                                        </label>
                                        <span className="extra-fee-title">Extra fee (£)</span>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked value="Cum" name="service[]"/>
                                            <span>Cum</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[Cum]" placeholder="£" />
                                        </label>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked value="CIM" name="service[]"/>
                                            <span>CIM</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[CIM]" placeholder="£" />
                                        </label>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked value="DTF" name="service[]"/>
                                            <span>DTF</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[DTF]" placeholder="£" />
                                        </label>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked value="Facial" name="service[]"/>
                                            <span>Facial</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[Facial]" placeholder="£" />
                                        </label>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked value="Filming" name="service[]"/>
                                            <span>Filming</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[Filming]" placeholder="£" />
                                        </label>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked value="Finger/Fisting (Giving)"
                                                name="service[]"/>
                                            <span>Finger/Fisting (Giving)</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[Finger/Fisting (Giving)]" placeholder="£" />
                                        </label>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked
                                                value="Finger/Fisting (Receiving)" name="service[]"/>
                                            <span>Finger/Fisting (Receiving)</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[Finger/Fisting (Receiving)]"
                                                placeholder="£" />
                                        </label>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked value="Foot worship"
                                                name="service[]"/>
                                            <span>Foot worship</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[Foot worship]" placeholder="£" />
                                        </label>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked value="OWO" name="service[]"/>
                                            <span>OWO</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[OWO]" placeholder="£" />
                                        </label>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked value="Prostate massage"
                                                name="service[]"/>
                                            <span>Prostate massage</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[Prostate massage]" placeholder="£" />
                                        </label>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked value="PSE" name="service[]"/>
                                            <span>PSE</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[PSE]" placeholder="£" />
                                        </label>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked value="Rimming (Giving)"
                                                name="service[]"/>
                                            <span>Rimming (Giving)</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[Rimming (Giving)]" placeholder="£" />
                                        </label>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked value="Swallow" name="service[]"/>
                                            <span>Swallow</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[Swallow]" placeholder="£" />
                                        </label>
                                    </div>
                                    <div className="label-wrapper">
                                        <label>
                                            <input type="checkbox" checked value="Watersports"
                                                name="service[]"/>
                                            <span>Watersports</span>
                                        </label>
                                        <label className="num_input">
                                            <input value="11" type="text" className="fee_input"
                                                name="service_fee[Watersports]" placeholder="£" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social-line social-line--ppv">
                        <h3 className="styled-header">Pay Per View Pages</h3>
                        <div className="sl-wrapper">
                            <div className="checkbox-wrapper line flex j-start al-top">
                                <span>I use:</span>
                                <div className="input-wrap form-field__group two-columns validation flex">
                                    <label>
                                        <input type="checkbox" checked name='used_ppv[]' value="onlyfans"/>
                                        <span>OnlyFans</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" checked name='used_ppv[]' value="manyvids"/>
                                        <span>ManyVids</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" checked name='used_ppv[]' value="fancentro"/>
                                        <span>FanCentro</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-field__fieldset">
                                <div className="link-input__wrapper">
                                    <label>
                                        <input type="text" value="www.onlyfans.com/www.asd@gmail.com"
                                            name="onlyfans_link" data-static
                                            placeholder="www.onlyfans.com/"/>
                                        <img src="//transbunnies.com/wp-content/themes/transbunnies/img/onlyfans_black.png"
                                            alt=""/>
                                    </label>
                                    <label>
                                        <input type="text" value="www.manyvids.com/www.asd@gmail.com"
                                            name="manyvids_link" data-static
                                            placeholder="www.manyvids.com/" />
                                        <img src="//transbunnies.com/wp-content/themes/transbunnies/img/manyvids_sq.png"
                                            alt=""/>
                                    </label>
                                    <label>
                                        <input type="text" value="www.fancentro.com/www.asd@gmail.com"
                                            name="fancentro_link" data-static
                                            placeholder="www.fancentro.com/" />
                                        <img src="//transbunnies.com/wp-content/themes/transbunnies/img/fc_sq.png"
                                            alt=""/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social-line social-line--soc">
                        <h3 className="styled-header">Social Links</h3>
                        <div className="sl-wrapper">
                            <div className="checkbox-wrapper line flex j-start al-top">
                                <span>I use:</span>
                                <div className="input-wrap two-columns form-field__group validation flex">
                                    <label>
                                        <input type="checkbox" checked name='used_social[]' value="twitter"/>
                                        <span>Twitter</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" checked name='used_social[]'
                                            value="snapchat"/>
                                        <span>Snapchat</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" checked name='used_social[]'
                                            value="instagram"/>
                                        <span>Instagram</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" checked name='used_social[]' value="tiktok"/>
                                        <span>TikTok</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-field__fieldset">
                                <div className="link-input__wrapper">
                                    <label>
                                        <input type="text" value="www.twitter.com/awww.asd@gmail.com"
                                            name="twitter_link" data-static placeholder="www.twitter.com/"/>
                                        <img src="//transbunnies.com/wp-content/themes/transbunnies/img/twitter_black.png"
                                            alt=""/>
                                    </label>
                                    <label>
                                        <input type="text" value="www.asd@gmail.com" name="snapchat_link"
                                            placeholder="username"/>
                                        <img src="//transbunnies.com/wp-content/themes/transbunnies/img/snapchat_black.png"
                                            alt=""/>
                                    </label>
                                    <label>
                                        <input type="text" value="www.instagram.com/www.asd@gmail.com"
                                            name="instagram_link" data-static
                                            placeholder="www.instagram.com/"/>
                                        <img src="//transbunnies.com/wp-content/themes/transbunnies/img/instagram_black.png"
                                            alt=""/>
                                    </label>
                                    <label>
                                        <input type="text" value="www.tiktok.com/@www.asd@gmail.com"
                                            name="tiktok_link" data-static placeholder="www.tiktok.com/@"/>
                                        <img src="//transbunnies.com/wp-content/themes/transbunnies/img/tiktok.png"
                                            alt=""/>
                                    </label>
                                </div>
                                <div className="whatsup-input">
                                    <label>
                                        <input checked type="checkbox" name="allow_whatsapp_contact"/>
                                        <span>Yes, allow users to contact me on whatsapp</span>
                                        <img src="//transbunnies.com/wp-content/themes/transbunnies/img/whatsup_black.png"
                                            alt=""/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-errors"></div>
            </div>
            <div className="agreements agreements-bottom">
                <div className="input-wrap validation">
                    <label>
                        <input type="checkbox" name="agreement" id="registration-agreement"/>
                        <span>
                            I agree to Transbunnies <a href="/terms-conditions" target="_blank">Terms and
                                Conditions</a>
                            and accept the <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                            .
                        </span>
                    </label>
                </div>
                <div className="finish-btns">
                    
                    <button className="button" data-user-verified="1" type="submit"
                        data-txt-submit="Save Changes" data-txt-saved="Saved">Save Changes</button>
                    <div className="white-text-popup fancybox-content" id="info-content" >
                        <div className="text">
                            <p>To view your profile, you need to be live on transbunnies with a FREE
                                FEATURED ADVERT or ANY PAID ADVERT option</p>
                            <a href="/ts-account/my-ads" className="button">My Ads</a>
                        </div>
                        <button type="button" data-fancybox-close=""
                            className="fancybox-button fancybox-close-small" title="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
                                <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </form>
        <div className="dashboard-extra-grid">
            <div className="support-block">
                <h3 className="styled-header">Support</h3>
                <div className="tech-support" style={{textAlign:'center'}}>
                    <h3>Need Technical Support?</h3>
                    <a href="https://transbunnies.com/ts-contact" className="button">Get Help Here</a>
                </div>
            </div>
            <div className="acc-settings-block">
                <h3 className="styled-header">Account Settings</h3>
                <div className="acc-settings">
                    <h3>Change your password or email</h3>
                    <div className="reset-buttons flex">
                        <a href="#" className="button col-6" data-reset="reset-pass-form-container">Reset
                            password</a>
                        <a href="#" className="button col-6" data-reset="reset-email-form-container">Reset
                            email</a>
                    </div>
                    <div className="hide-box">
                        <div id="reset-pass-form-container"
                            className="line password-wrapper">
                            <h5>Old Password</h5>
                            <div className="input-wrap validation">
                                <input form="reset-pass-form" type="password"
                                    className="woocommerce-Input woocommerce-Input--text input-text"
                                    placeholder="Enter Your Old Password" name="password_current"
                                    id="landing-password" autocomplete="password" />
                                <i className="fa fa-eye togglePassword" aria-hidden="true"></i>
                                <div className="form-field__error" id="landing_password_error">Old Password must
                                    match</div>
                            </div>
                            <h5>New Password</h5>
                            <p>Minimum 8 characters and must contain uppercase, lowercase and number.</p>
                            <div className="input-wrap validation">
                                <input form="reset-pass-form" type="password"
                                    className="woocommerce-Input woocommerce-Input--text input-text"
                                    placeholder="Enter Your New Password" name="password_1"
                                    id="new-password" autocomplete="new-password" />
                                <i className="fa fa-eye togglePassword" aria-hidden="true"></i>
                                <div className="form-field__error" id="new-password_error">Your new password
                                    needs to be at least 8 characters long. It must contain uppercase,
                                    lowercase and a number.</div>
                                <div className="form-field__error" id="new-password_error1">New password must
                                    match</div>
                            </div>
                            <div className="input-wrap">
                                <input form="reset-pass-form" type="password"
                                    className="woocommerce-Input woocommerce-Input--text input-text"
                                    id="landing-confirm-password" name="password_2"
                                    placeholder="Re-enter Your New Password"/>
                                <i className="fa fa-eye togglePassword" aria-hidden="true"></i>
                                <div className="form-field__error" id="confirm-password_error">Your new password
                                    needs to be at least 8 characters long. It must contain uppercase,
                                    lowercase and a number.</div>
                                <div className="form-field__error" id="confirm-password_error1">New password
                                    must match</div>
                            </div>
                            <p
                                className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <input type="checkbox"
                                    className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"
                                    name="mailchimp_woocommerce_is_subscribed_checkbox"
                                    id="mailchimp_woocommerce_is_subscribed"/>Subscribe to our newsletter
                            </p>
                            <input type="hidden" id="save-account-details-nonce"
                                name="save-account-details-nonce" value="8c75f932be" />
                            <input type="hidden" name="_wp_http_referer" value="/ts-account" />
                            <div className="button-wrapper">
                                <input type="hidden" className="woocommerce-Button button"
                                    name="save_account_details" value="Save changes"/>
                                <button form="reset-pass-form" type="submit" id="resetpassword-form"
                                    className="button">Submit</button>
                                <div className="form-field__error" id="success_message">Password has been
                                    changed and you will be notified by email</div>
                                <div className="form-field__error" id="success_message1">Something went wrong
                                </div>
                            </div>
                            <div className="form-msg-container"></div>
                        </div>
                        


                        <div id="reset-email-form-container" 
                            className="line email-wrapper">
                            <h5>Old Email</h5>
                            <div className="input-wrap validation">
                                <input form="reset-email-form" type="email"
                                    className="woocommerce-Input woocommerce-Input--text input-text"
                                    placeholder="Enter Your Old Email" name="email_current"
                                    id="landing-email" autocomplete="email" />
                                <div className="form-field__error" id="landing_email_error">Please enter the
                                    correct old email address</div>
                            </div>
                            <h5>New Email</h5>
                            <p>You will receive a message to your new email address to verify your change.
                            </p>
                            <div className="input-wrap validation">
                                <input form="reset-email-form" type="email"
                                    className="woocommerce-Input woocommerce-Input--text input-text"
                                    placeholder="Enter Your New Email" name="email_1" id="new-email"
                                    autocomplete="new-email" />
                                <div className="form-field__error" id="new_email_error">New email must match
                                </div>
                                <div className="form-field__error" id="new_email_error1">New email Address is
                                    incorrect</div>
                            </div>
                            <div className="input-wrap">
                                <input form="reset-email-form" type="email" id="landing-confirm-email"
                                    name="email_2" placeholder="Re-enter Your New Email"/>
                                <div className="form-field__error" id="confirm_email_error">New email must match
                                </div>
                                <div className="form-field__error" id="confirm_email_error1">Confirm email
                                    Address is incorrect</div>
                            </div>
                            <input type="hidden" id="reset-email-nonce" name="reset-email-nonce"
                                value="8c75f932be" />
                            <input type="hidden" name="_wp_http_referer" value="/ts-account" />
                            <div className="button-wrapper">
                                <input type="hidden" className="woocommerce-Button button"
                                    name="save_account_details" value="Save changes"/>
                                <button form="reset-email-form-" id="reset-email-submit" type="submit"
                                    className="button">Submit</button>
                                <div className="form-field__error" id="success_email_message">Please check your
                                    mail to verify your new email address</div>
                                <div className="form-field__error" id="success_email_message1">This email
                                    address is already in use</div>
                            </div>
                            <div className="form-msg-container"></div>
                        </div>
                    </div>
                    <p className="reset-notice"></p>
                </div>
            </div>
            <div className="profile-privacy-block">
                <h3 className="styled-header">Profile</h3>
                <div className="profile-privacy">
                    <div className="buttons-wrapper">
                        <button type="submit" form="toggle-active-account-form" data-hide-txt="Hide Profile"
                            data-show-txt="Show Profile" className="button button-green">Show Profile</button>
                        <button type="button"
                            className="button button-grey show-delete-my-account-pop-up">Delete Profile</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}
export default EditMyDetails;