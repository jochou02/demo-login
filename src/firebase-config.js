
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA9SNL11Ol0oSIzGPFfiZdwaulMQnivKy8",
  authDomain: "prefab-hull-171600.firebaseapp.com",
  projectId: "prefab-hull-171600",
  storageBucket: "prefab-hull-171600.appspot.com",
  messagingSenderId: "875118014440",
  appId: "1:875118014440:web:adedd91f73da05daebbe5d",
  measurementId: "G-CG8RKDT6E5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);