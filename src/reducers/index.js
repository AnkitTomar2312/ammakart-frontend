const mainReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD-ITEM": {
      break;
    }

    case "REMOVE-ITEM": {
      break;
    }

    case "CLEAR-CART": {
      return {
        item: [],
        totalAmount: 0,
      };
    }

    default:
      return state;
  }
};

export default mainReducer;
