const get = (dataObject, id) => dataObject[id];

const update = (dataObject, id, obj) => {
  if (id) {
    for (key in obj) {
      dataObject[id][key] = obj[key];
    }
  }
};

const create = (dataObject, obj) => {
  dataObject[Date.now()] = obj;
  dataObject[Date.now()].state = "normal";
};

const del = (dataObject, id) => {
  dataObject[id].state = "deleted";
};

const find = (dataObject, states) => {
  if (states) {
    return Object.keys(dataObject)
      .filter((key) => states.includes(dataObject[key].state))
      .reduce((acc, key) => {
        acc[key] = dataObject[key];
        return acc;
      }, {});
  } else {
    return Object.keys(dataObject)
      .filter((key) => dataObject[key].state === "normal")
      .reduce((acc, key) => {
        acc[key] = dataObject[key];
        return acc;
      }, {});
  }
};

module.exports = { find, get, update, create, del };
