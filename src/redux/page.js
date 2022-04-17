const initialState = 1;
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "page":
      return payload < 1 ? 1 : payload;
    default:
      return state;
  }
};
