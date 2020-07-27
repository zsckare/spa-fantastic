<template>
    <div class="quizzes">

    </div>
</template>

<script>
import firebase from "../firebaseConfig";

const messaging = firebase.messaging();
const db = firebase.firestore();
export default {
    name:'Quizzes',
    created(){
        Notification.requestPermission()
        messaging.getToken().then((currentToken) => {
        if (currentToken) {
            console.log(currentToken)
            this.sTopic(currentToken)

        } else {
            // Show permission request.
            console.log('No Instance ID token available. Request permission to generate one.');
            // Show permission UI.
        }
        }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        
        });
        messaging.onMessage((payload) => {
        console.log('Message received. ', payload);
        // ...
        });
    },
    methods:{
        sTopic(token){
            var tokensRef = db.collection("tokens").get()
            .then(function(querySnapcht){
                querySnapcht.forEach(function(doc){
                    console.log(doc.data().token)
                })
            })

            

             db.collection("tokens")
            .add({token:token})
            .then(() => {
                console.log("Document successfully written!");
                
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        }
    }
}
</script>