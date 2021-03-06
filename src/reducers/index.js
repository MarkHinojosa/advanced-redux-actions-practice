import {combineReducers} from 'redux';

function currentCount(state = 0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state + 1
  }
  if(action.type === "DECREASE_COUNTER"){
     return state - 1
  }
  return state
}

const specialText = (state = "", action) =>{
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

const currentCity = (state = "", action) => {
  if(action.type === "SET_CURRENT_CITY"){
    return action.value;
  }
  return state
}

const searchText = ( state = "", action) => {
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value
  }
  return state
}

const currentTemp = (state = 0, action) => {
  if(action.type === "SET_TEMP"){
    return action.value
  }
  return state
}

const isLoading = (state = null, action) => {
  if(action.type === "SET_IS_LOADING"){
    return action.value
  }
  return state
}

const videoURL = (state = "", action) => {
  if(action.type === "SET_VIDEO_URL"){
    return action.value
  }
  return state
} 

const currentUserSort = (state = [], action) => {
  if(action.type ===  "SET_CURRENT_USER_SORT" ){
    return action.value
  }
  return state
}

const videoScale = (state = 0, action) => {
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value
  }
  return state
}

const users = (state =[], action) => {
  if(action.type === "ADD_USER"){
    return [...state, action.value]
  }
  if(action.type === "REMOVE_USER"){
    return state.slice(1)
    
  }
  return state;
}

const rootReducer = combineReducers({
  currentCount,specialText,currentCity,users,currentTemp,isLoading,videoURL,searchText,
  currentUserSort,videoScale
})

export default rootReducer;

   




