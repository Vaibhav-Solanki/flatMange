const initialState = [];
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "add_res":
      return [...state, ...payload];
    case "all_res":
      return payload;
    case "rm_res":
      return state.filter((e) => e != payload);
    default:
      return state;
  }
};
