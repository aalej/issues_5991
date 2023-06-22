import { httpsCallable, connectFunctionsEmulator } from "firebase/functions";
import { functions } from "./firebase.js";
// import dns from "node:dns";

// dns.setDefaultResultOrder("ipv4first");
connectFunctionsEmulator(functions, "127.0.0.1", 5001);

function callHttpsCallable() {
  const httpsCallableFunction = httpsCallable(functions, "callMe");
  httpsCallableFunction()
    .then((value) => console.log(value))
    .catch((reason) => console.log(reason));
}

callHttpsCallable();
