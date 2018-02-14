import { connect } from 'react-redux';
import {increaseCounter, decreaseCounter} from "../actions";
import CounterButton from '../components/CounterButton';

function mapDispatchToProps(dispatch){

  return ({
    increase:function(count){
      var action = increaseCounter(count);
      return dispatch(action);
    },
    decrease:function(pas){
      var actionTwo = decreaseCounter(pas);
      return dispatch(actionTwo);
    }
  })
}

export default connect(null,mapDispatchToProps)(CounterButton);