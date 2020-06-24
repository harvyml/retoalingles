	 /*--------- connect to db --------*/
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDNeG6Ol-IKt8ATkJN3o920Nyo7L4xjNJ4",
    authDomain: "fhico-c7d2b.firebaseapp.com",
    databaseURL: "https://fhico-c7d2b.firebaseio.com",
    projectId: "fhico-c7d2b",
    storageBucket: "fhico-c7d2b.appspot.com",
    messagingSenderId: "359810549344"
  };
  firebase.initializeApp(config);

  // Notifications
//GET THE CURRENT DATE
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
dd = '0'+dd
}

if(mm<10) {
mm = '0'+mm
}

today = mm + '/' + dd + '/' + yyyy;

const ref = firebase.database().ref().child('users');

/*ref.once("child_added", function(data){
  var message = data.val().mensaje;
  var nombre = data.val().nombre;

var stuff = {
  body: message,
  icon: "../logo/logo.png",
  timeout: 4000,
  onClick: function () {
        window.focus();
        this.close();
    }
}

Push.create(nombre, stuff);
})*/

  /*const messaging = firebase.messaging();
  messaging.requestPermission()
  .then(function(){
    console.log("have permission");
    return messaging.getToken();
  })
   .then(function(){
    console.log("have permission");
    return messaging.getToken();

  })

  .then(function(token){
    console.log(token);

  })

  .catch(function(){
    console.log("Error Ocurred.");
  })

  messaging.onMessage(function(payload){
    console.log("onMessage ", payload)
  })
*/
/* ----------------- Registro de segundo form ---------------------------- */

$('#btn-consulta').on('click', function(well){
	  var nom = $("#ip-nombre").val();
  	var email = $('#ip-email').val();
  	var mensaje = $("#mensaje-2").val();
  	var ref = firebase.database().ref().child('consultas');

  	var add = {
  		nombre: nom,
  		email: email,
  		mensaje: mensaje,
      fecha: today
  	}
  	ref.push(add);

  	if(well){
  		$("#form-sec").append("<p style='color: white; background: #fba919'>Tu consulta ha sido enviada, espera nuestra respuesta</P>")
  	}else{
  		$("#form-sec").append("<p style 'color: red'>Ha ocurrido un error</p>")
  	}
});
