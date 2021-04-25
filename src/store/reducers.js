export default function reducer(state, action) {
  console.log(action);
  switch(action.type) {
    case "VISIBLE":
      return true;
    case "HIDE":
      return false;
    default:
      return false;
  }
};
