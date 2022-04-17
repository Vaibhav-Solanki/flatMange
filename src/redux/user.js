const initialState = { state: false, token: "" };
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "login":
      return { state: true, token: payload };
    case "logout":
      return { state: false, token: "" };
    default:
      return state;
  }
};
