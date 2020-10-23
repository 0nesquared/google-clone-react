export const initialState = {
  term: null,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

/* a pure function here that listens to any actions - if it is of type SET_SEARCH_TERM then 
it returns whatever the current state is, after setting the term value to the action's term value */
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

export default reducer;
