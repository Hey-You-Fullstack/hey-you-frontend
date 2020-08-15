import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase/app";
import "firebase/auth";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const firebaseConfig = {
  apiKey: "AIzaSyBVuNNVncNfoh-QBO3uHF6BfnMPKvvlQTI",
  authDomain: "heyyou-app.firebaseapp.com",
  databaseURL: "https://heyyou-app.firebaseio.com",
  projectId: "heyyou-app",
  storageBucket: "heyyou-app.appspot.com",
  messagingSenderId: "759893556481",
  appId: "1:759893556481:web:afddef0fe315b3048d2f00",
};

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const { isAnonymous, uid, refreshToken } = user;
    console.info("Signed in anonymously: ", { uid, isAnonymous, refreshToken });
  } else {
    console.warn("Not signed in yet");
  }
});

firebase.auth().signInAnonymously().catch(console.error);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
