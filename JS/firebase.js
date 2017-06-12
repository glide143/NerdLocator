

  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "AIzaSyAnUFGtHvhrEIn3Skg3nszPORBCLPHN4pA",
    authDomain: "sample-database-practise.firebaseapp.com",
    databaseURL: "https://sample-database-practise.firebaseio.com/",
    storageBucket: "gs://sample-database-practise.appspot.com/",
    //messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);


var locationValue;
const preObject = document.getElementById('object');

// create referrences




/*
firebase.database().ref("MyLocation")
  .orderByChild("Date and Time")
  .once("value", function (snapshot) {

    var key;

    snapshot.forEach(function (childSnapshot) {
      key = childSnapshot.key;
      return true; // Cancel further enumeration.
    });

    if (key) {
      console.log("Found user: " + key);
    } else {
      console.log("User not found.");
    }
  });
*/

const dbRefObject = firebase.database().ref();

dbRefObject.once('value').then(function(snap){
   var key = snap.key;
    var child = snap.child("Date and Time/latitude/longitude");
    //console.log(key);
});

var details;
var lats;
var lngs;

dbRefObject.on('value', snap => {
    var id = snap.key;
    //preObject.innerText = JSON.stringify(snap.val(), null,3);
    locationValue = JSON.stringify(snap.val(), null,3);
    var t = JSON.parse(locationValue);
    
     details = t['MyLocation']['Location_Info']['Date and Time'];
     lats = t['MyLocation']['Location_Info']['latitude'];
     lngs = t['MyLocation']['Location_Info']['longitude'];
    
    
});



/*function initMap(val details, var lats ,var lngs) {
        var myLatLng = {lat: lats, lng: lngs};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: details
        });
          
      }*/


   function initMap() {
       dbRefObject.on('value', snap => {
            var id = snap.key;
            //preObject.innerText = JSON.stringify(snap.val(), null,3);
            locationValue = JSON.stringify(snap.val(), null,3);
            var t = JSON.parse(locationValue);
    
            details = t['MyLocation']['Location_Info']['Date and Time'];
            lats = t['MyLocation']['Location_Info']['latitude'];
            lngs = t['MyLocation']['Location_Info']['longitude'];
            var myLatLng = {lat: lats, lng: lngs};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: details
        });
    
    
       });
       
       
       
       
   }


function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC712-oCl43jYGw0dsYBiVEjhnRnLskTO8&' +
      'callback=initMap';
  document.body.appendChild(script);
}
window.onload = loadScript;
