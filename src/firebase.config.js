// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyDD_ZSkcWD3z0fOb36sDmA6w0VK2s7qsPc',
    authDomain: 'clone-e56b9.firebaseapp.com',
    projectId: 'clone-e56b9',
    storageBucket: 'clone-e56b9.appspot.com',
    messagingSenderId: '1015398446178',
    appId: '1:1015398446178:web:8dc3a50374e52acf0c4d3b',
    measurementId: 'G-Z9QBEN62RE',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
