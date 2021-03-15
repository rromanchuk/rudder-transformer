/* eslint-disable no-param-reassign */
const sha256 = require("sha256");
const get = require("get-value");

const {
    defaultPostRequestConfig    
  } = require("../../util");


const processEvent = (message, destination) => {
    const response = defaultRequestConfig();
    response.method = defaultPostRequestConfig.requestMethod;
    response.headers = { firebase_app_id: "", api_secret: "" }
    response.endpoint = "https://www.google-analytics.com/mp/collect"
    
    const jsonStringify = JSON.stringify({
        userId: "userId",
        appInstanceId: "firebase_instance_id",
        nonPersonalizedAds: false,
        events: [],
        userProperties: {},
    });

    const payload = {
        body: [jsonStringify]
    };
    response.body.JSON = payload;
    return response
};

const process = event => {
    return processEvent(event.message, event.destination);
};
  
exports.process = process;