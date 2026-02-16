import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCa1EMcXfqZTB6HGactp1geEjNnIKy6QVQ",
    authDomain: "fpreswfpe.firebaseapp.com",
    projectId: "fpreswfpe",
    storageBucket: "fpreswfpe.firebasestorage.app",
    messagingSenderId: "993668392904",
    appId: "1:993668392904:web:2dd00ecf3529769801c2fd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);