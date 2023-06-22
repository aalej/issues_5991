import {onCall} from "firebase-functions/v2/https";

exports.callMe = onCall(
  {
    region: "europe-west2",
    timeoutSeconds: 30,
  },
  async (request) => {
    console.log("onCall - Start");
    const response = "1";
    console.log("onCall - after breakpoint");
    return response;
  }
);
