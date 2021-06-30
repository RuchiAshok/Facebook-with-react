const initialState = {
    users: []
};

export default function(state = initialState, action) {
    switch (action.type) {
      case "FETCH_USERS_SUCCESS": {
        const { users } = action.payload;
        return {
          ...state,
          users: users
        };
      }

      default:
        return state;
    }
  }