export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // Remove after developing...
  token:
    "BQDuKt8C6ap9W1y8yXHw7_Y0MnnHcdS-_mE5vjCJ3RlAJawRP8kcaYQI5wtTHTitIaT3RhrawutfsQghJ5gOC1iEO1qTaFG6xqwFu5Qv2FLiSDWox5MPpdgikX5Kkne9eoXYUOuhUdXdgScM1pk1GaagtIo8qs9xoVplq6YuTg068kxD", // null
};

const reducer = (state, action) => {
  console.log("action from reducer>>>", action);

  // Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
