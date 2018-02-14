import { connect } from 'react-redux';
import { setCurrentCity } from '../actions';
import CityDropDown from '../components/CityDropDown';

function mapDispatchToProps(dispatch) {
  return {
    set: function(pass){
      let action = setCurrentCity(pass);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(CityDropDown);