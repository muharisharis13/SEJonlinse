const checkObjectBlank = (obj) => {
  Object.keys(obj)?.map((item) => {
    if (obj[item] === undefined || obj[item] === "" || obj[item] === null) {
      return delete obj[item];
    }
  }); // eslint-disable-next-line

  return obj;
};

export default checkObjectBlank;
