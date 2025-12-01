// Configuración de tu app web en Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA...tu clave...",
  authDomain: "scoreboard-62028.firebaseapp.com",
  databaseURL: "https://scoreboard-62028-default-rtdb.firebaseio.com",
  projectId: "scoreboard-62028",
  storageBucket: "scoreboard-62028.appspot.com",
  messagingSenderId: "8415479304",
  appId: "1:8415479304:web:0fe13fd4f35761383133bd"
};

// Inicializar Firebase (versión global)
firebase.initializeApp(firebaseConfig);

// Inicializar Realtime Database
const db = firebase.database();
