import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './StepTabs.css'
const StepTabs=({list})=>{
console.log(list)
    return <div class="step-tabs">
        <div class="wrapper-link">
        {list.map((item)=>{
            return <>
            <NavLink className='navlink' to={item.link}>{item.title}</NavLink>
            <img  width="30" src="//transbunnies.com/wp-content/themes/transbunnies/img/arr-right-red.svg"/>
            </>
        })}
        </div>
</div>

}

export default StepTabs;

// Specifies the default values for props:
StepTabs.defaultProps = {
    list: []
  };

  StepTabs.propTypes = {
    name: PropTypes.array
  }; 