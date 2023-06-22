import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

const app = initializeApp({
  apiKey: "fake-api-key",
  projectId: "demo-project",
});

export const functions = getFunctions(app, "europe-west2");
