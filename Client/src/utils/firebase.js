// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
//   authDomain: "taskmanager-9c25b.firebaseapp.com",
//   projectId: "taskmanager-9c25b",
//   storageBucket: "taskmanager-9c25b.firebasestorage.app",
//   messagingSenderId: "83722758551",
//   appId: "1:83722758551:web:1118f829398536ec727cd2",
//   measurementId: "G-SYN7KDR034"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage"; // Import Firebase Storage

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY, // Make sure this is set correctly in your environment variables
//   authDomain: "taskmanager-9c25b.firebaseapp.com",
//   projectId: "taskmanager-9c25b",
//   storageBucket: "taskmanager-9c25b.appspot.com", // Corrected storage bucket
//   messagingSenderId: "83722758551",
//   appId: "1:83722758551:web:1118f829398536ec727cd2",
//   measurementId: "G-SYN7KDR034"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
// export const storage = getStorage(app); // Export Firebase Storage instance
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY, // Make sure this is set correctly in your environment variables
  authDomain: "taskmanager-9c25b.firebaseapp.com",
  projectId: "taskmanager-9c25b",
  // storageBucket: "taskmanager-9c25b.appspot.com", // This is for Firebase Storage, remove if not needed
  storageBucket: 'taskmanager-9c25b.appspot.com',
  messagingSenderId: "83722758551",
  appId: "1:83722758551:web:1118f829398536ec727cd2",
  measurementId: "G-SYN7KDR034"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// If you're using analytics (optional)
export const analytics = getAnalytics(app);

// Initialize Firestore (No need for Firebase Storage in this case)
export const firestore = getFirestore(app); // Firestore
