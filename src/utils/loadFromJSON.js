const loadMissionsFromJSON = (filename) => {
  try {
    console.log(filename);
    const json = require(filename);
    console.log(json);
    return JSON.parse(json);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

export default loadMissionsFromJSON;
