import { connect } from 'react-redux';
import { setIsLoading } from '../actions';
import Modal from '../components/Modal';

// * ModalContainer.js
// * import `setIsLoading` action
// * map prop `setIsLoading` to action `setIsLoading`

// * ModalContainer.js
// * map a prop called `isLoading` to the state `isLoading`

function mapDispatchToProps(dispatch){
  return {
   setIsLoading:function(txt){
     let action = setIsLoading(txt);
     dispatch(action);
   }
  }
}

function mapStateToProps(state){
  return {
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);