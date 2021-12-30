import * as firebase from 'firebase';
import * as expensesActions from '../actions/expenses';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
const googleAuthprovider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthprovider, database as default};
//   database.ref('expenses')
//   .on('value',(snapshot) =>{
//     let expenses = [];
//     snapshot.forEach((childDataSnapShot) =>{
//       expenses.push({
//         id:childDataSnapShot.key,
//         ...childDataSnapShot.val()
//       });
//     });
//     console.log(expenses);
//   },(e)=>{
//     console.log('Error with data fetching', e)
//    });

//    setTimeout(() =>{

//     database.ref('expenses').push({
//     description:'PHONE Expense',
//     note:'food expenses',
//     amount:2000,
//     createdAt:1012022
//   });
//    },5000)
// //child_removed
// database.ref('expenses')
// .on('child_removed',(snapshot) =>{
//   console.log(snapshot.key,snapshot.val());
// },(e)=>{
//   console.log('Error with data fetching', e)
//  });
//  //child_changed
//  database.ref('expenses')
// .on('child_changed',(snapshot) =>{
//   console.log(snapshot.key,snapshot.val());
// },(e)=>{
//   console.log('Error with data fetching', e)
//  });
  // database.ref('expenses').push({
  //   description:'Food Expense',
  //   note:'food expenses',
  //   amount:2000,
  //   createdAt:1012022
  // });
  // database.ref('expenses').push({
  //   description:'House Rent Expense',
  //   note:'house rent expenses',
  //   amount:6000,
  //   createdAt:1012022
  // });
  // database.ref('expenses').push({
  //   description:'Other Expense',
  //   note:'other expenses',
  //   amount:4000,
  //   createdAt:1012022
  // });

  // database.ref().set({
  //     name:'Satyabati Goswami',
  //     age:26,
  //     stressLevel:6,
  //     job:{
  //       title:'Software Developer',
  //       company:'Google'
  //     },
  //     isSingle:false,
  //     location:{
  //         city:'Nabadwip',
  //         country:'India'
  //     }
  // }).then(() =>{
  //     console.log('Data is saved!')
  // }).catch((e) =>{
  //     console.log('This failed',e)
  // });

  // database.ref().update({
  //   name:'Ronti',
  //   age:28,
  //   'location/city':'pune'
  // })

 // database.ref('isSingle').set(null);
//  database.ref('isSingle').remove().then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });

// database.ref().update({
//   stressLevel:9,
//   'job/company':'Amazon',
//   'location/city': 'Seattle'
// })

// database.ref('location/city')
// .once('value')
// .then((snapshot) =>{
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) =>{
//   console.log('error fetching data',e)
// });

// const onValueChange = database.ref().on('value', (snapshot) =>{
//   const value = snapshot.val();
//   console.log(`${value.name} is a ${value.job?value.job.title:null} at ${value.job?value.job.company:null} `);
// },(e)=>{
//   console.log('Error with data fetching', e)
// });

// setTimeout(()=>{

// database.ref().update({
//   'job/company':'apple'
// }) 
// },5000);


// setTimeout(()=>{
//  database.ref().off(onValueChange) 
//   },7000);


//   setTimeout(()=>{

//     database.ref().update({
//       stressLevel:7
//     }) 
//     },10000);

// const notes = [
//   {
//     id:'12',
//     title:'first note!',
//     body:'This is my note'
//   },
//   {
//     id:'761sde',
//     title:'Another note!',
//     body:'This is my note'
//   }
// ];
// database.ref('notes').set(notes);
// database.ref('notes/12')

// database.ref('notes').push({
//   title:'Course Topic',
//   body:'React Native'
// })