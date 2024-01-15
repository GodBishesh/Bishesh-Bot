 module.exports = ({ api, event, config, userInfo }) => {
  if (event.logMessageType == "log:subscribe") {
    require("../handlers/events/join.js")({ api, event, config });
  } else if (event.logMessageType == "log:unsubscribe") {
    require("../handlers/events/left.js")({ api, event, config });
  } else {
  }
};
