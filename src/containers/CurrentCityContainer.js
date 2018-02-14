import { connect } from 'react-redux';
import CurrentCity from '../components/CurrentCity';

function mapStateToProps(state){
  return {
    currentCity: state.currentCity
  }
}

export default connect(mapStateToProps)(CurrentCity);