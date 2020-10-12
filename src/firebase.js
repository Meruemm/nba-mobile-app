import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBjjo_ILm9DCqt49HB-Xjchg_YQ54riPFQ",
  authDomain: "full-stack-nba.firebaseapp.com",
  databaseURL: "https://full-stack-nba.firebaseio.com",
  projectId: "full-stack-nba",
  storageBucket: "full-stack-nba.appspot.com",
  messagingSenderId: "721646632102",
  appId: "1:721646632102:web:ebaa17669b8b32009e8867",
  measurementId: "G-N84885DRFE",
};


firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
     const data = [];
     snapshot.forEach((childSnapshot) => {
       data.push({
         ...childSnapshot.val(),
         id: childSnapshot.key,
       })
     });
     return data;
}


export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseVideos,
  firebaseTeams,
  firebaseLooper
}