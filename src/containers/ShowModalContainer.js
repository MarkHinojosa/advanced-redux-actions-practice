import { connect } from 'react-redux';
import { setIsLoading } from '../actions';
import ShowModal from '../components/ShowModal';

// * ShowModalContainer.js
// * import `setIsLoading` action
// * map prop `setIsLoading` to action `setIsLoading`Show

function mapDispatchToProps(dispatch){
  return {
   setIsLoading:function(txt){
     let action = setIsLoading(txt);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(ShowModal);
