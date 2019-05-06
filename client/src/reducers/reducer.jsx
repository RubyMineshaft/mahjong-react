import Auth from '../modules/Auth';

const initialState = {
  auth: Auth.authenticationStatus()
}

const reducer = function(state = initialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }

}
 
export default reducer;