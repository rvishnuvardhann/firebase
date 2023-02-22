import {app} from './firebaseconfig.js'
import {getDatabase,set,ref,child,update,remove,get} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
//console.log("connected")
const db=getDatabase()
console.log(db)
const submit=document.getElementById("register")
var Uid,name,email,pwd,gender
function readDetails()
{
    name=document.getElementById("name").value
    email=document.getElementById("email").value
    Uid=document.getElementById("uid").value
    pwd=document.getElementById("pwd").value
    gender=document.querySelector('input[name="gender"]:checked').value
}
function store()
{
    readDetails()
    set(ref(db,"Students/"+Uid),{Name:name,ID:Uid,Email:email,Gender:gender})
}
submit.addEventListener("click",store)
// const updates=document.getElementById("update")
// updates.addEventListener("click",newID)

// function newID() {

//   const idData = {
//     Name:document.getElementById("name").value,
//     Email:document.getElementById("email").value,
//     Gender:document.querySelector('input[name="gender"]:checked').value,
//     ID:document.getElementById("uid").value,
//     // starCount: 0,
//   };

//   // Get a key for a new Post.
//   const newIdKey = push(child(ref(db), 'Students')).key;

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   const updates = {};
//   updates['/Students/' + newIdKey] = idData;
// //   updates['/user-posts/' + uid + '/' + newPostKey] = postData;

//   return update(ref(db), updates);
// }