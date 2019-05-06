import Auth from '../modules/Auth';

const initialState = {
  auth: Auth.authenticationStatus()
}

const reducer = function(state = initialState, action) {
  switch (action.type) {

    case "USER_REGISTERED":
      Auth.authenticateToken(action.payload.token)
      
      return {
        ...state,
        auth: Auth.authenticationStatus()
      }
    
    default:
      return state;
  }

}
 
export default reducer;