const initialState = [];
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "add_flat":
      return [...state, ...payload];
    case "all_flat":
      return payload;
    case "rm_flat":
      return state.filter((e) => e != payload);
    default:
      return state;
  }
};
