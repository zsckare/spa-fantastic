const functions = require('firebase-functions');
const admin  = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.sendNotificationNewCita = functions.firestore.document('citas/{uid}').onWrite(async (event)=>{

    var message = {
        topic: 'citas',
        notification:{
            title:"Spa Fantastic",
            body:'Se ha agendado una nueva cita'
        },
        
    }
    console.log(message)
    let response = await admin.messaging().send(message)
    console.log(response)
    
})

exports.saveToken = functions.firestore.document("tokens/{token}").onCreate(
    (snap, context) => {
        // Get an object representing the document
        // e.g. {'name': 'Marie', 'age': 66}
        const newValue = snap.data();
  
        // access a particular field as you would any JS property
        console.log("savetokn esperando"+newValue.token)
        admin.messaging().subscribeToTopic([newValue.token], "citas")
        .then(function(response) {
            // See the MessagingTopicManagementResponse reference documentation
            // for the contents of response.
            console.log('Successfully subscribed to topic:', response);
            return {state: "success"}
        })
        .catch(function(error) {
            console.log('Error subscribing to topic:', error);
        });

        // perform desired operations ...
        
        return {State:"ok"}
      }
)