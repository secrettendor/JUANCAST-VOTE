const firebaseConfig = {
  apiKey: "AIzaSyDN84_BuN9I3hsf_2vD9529bxfMzC8NhJA",
  authDomain: "vote-71958.firebaseapp.com",
  databaseURL: "https://vote-71958-default-rtdb.firebaseio.com",
  projectId: "vote-71958",
  storageBucket: "vote-71958.appspot.com",
  messagingSenderId: "766882661319",
  appId: "1:766882661319:web:27440378d69503991ecfe2",
  measurementId: "G-WHR6CMGZY1"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();
const database = firebase.database();

const DEV_FUNCT_URL = "http://127.0.0.1:5001/vote-71958/us-central1";
const LIVE_FUNCT_URL = " https://us-central1-vote-71958.cloudfunctions.net";
const LIVE_HOST = "juancast.ph";
const DEV_HOST1 = "localhost";
const DEV_HOST2 = "127.0.0.1";

var FUNCTIONS_URL;
if(window.location.host == LIVE_HOST)
{
    FUNCTIONS_URL =  LIVE_FUNCT_URL;
} 
else if(window.location.host == DEV_HOST1 || window.location.host == DEV_HOST2)
{
    FUNCTIONS_URL = DEV_FUNCT_URL;
}
