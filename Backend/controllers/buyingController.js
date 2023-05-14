// const exampleService = require('../services/exampleServices');
// const fb = require('../configs/firebase');
var firebase = require('firebase')

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
    apiKey: "AIzaSyBB-1N_4EJoURw-4FedOcQSyhtyB0kLH0c",
    authDomain: "stockexperiment-82bd5.firebaseapp.com",
    databaseURL: "https://stockexperiment-82bd5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "stockexperiment-82bd5",
    storageBucket: "stockexperiment-82bd5.appspot.com",
    messagingSenderId: "21409966905",
    appId: "1:21409966905:web:ec1ce5897272d5afec16e8",
    measurementId: "G-4BE1ZNEPFB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.database()

getBuyingOffer = (req, res) => {
    const buyingOfferRef = "/SESSIONS/" + currentSession + "/BUYING_OFFERS";
    const dbRef = ref(database);
    get(child(dbRef, buyingOfferRef))
        .then(async (snapshot) => {
            console.log(snapshot.val);
        })
}


module.exports = {
    getBuyingOffer
};
