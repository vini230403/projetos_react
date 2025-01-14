import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCB8XSAvd-FpaM4PiMOHHnLChv2aWAaiJQ",
  authDomain: "miniblog-ed44c.firebaseapp.com",
  projectId: "miniblog-ed44c",
  storageBucket: "miniblog-ed44c.firebasestorage.app",
  messagingSenderId: "91234467934",
  appId: "1:91234467934:web:4d62609292af1e7f9b34cf"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }