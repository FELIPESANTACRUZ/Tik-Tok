import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDE4_Mfz2VOppaFF1_Z_JnRwRiTxRbeJmY",
  authDomain: "tiktok---jornada-2a738.firebaseapp.com",
  projectId: "tiktok---jornada-2a738",
  storageBucket: "tiktok---jornada-2a738.appspot.com",
  messagingSenderId: "234004004693",
  appId: "1:234004004693:web:e5b17824603f760616f9dc"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;