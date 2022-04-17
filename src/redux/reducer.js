const initialState = [];
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "add_country":
      return [...state, ...payload];
    case "all_country":
      return payload;
    case "rm_country":
      return state.filter((e) => e != payload);
    default:
      return state;
  }
};
