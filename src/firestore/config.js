import {
    initializeApp
} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBuQ28frm-z4kBOp2863rqHdgfUi1qX8cE",
    authDomain: "burger-station-na.firebaseapp.com",
    projectId: "burger-station-na",
    storageBucket: "burger-station-na.appspot.com",
    messagingSenderId: "1081061503059",
    appId: "1:1081061503059:web:66017a6755d5bd4e7c56a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirestoreApp = () => {
    return app
}