function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [100, 20, 50, 80, 60, 90];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
