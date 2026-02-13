// =============================
// Configuración base Firebase
// =============================
const defaultFirebaseConfig = {
  apiKey: "AIzaSyAa5K74St8vyoGt3bttWq0AUlDfdWaBOGs",
  authDomain: "scoreboard-62028.firebaseapp.com",
  databaseURL: "https://scoreboard-62028-default-rtdb.firebaseio.com",
  projectId: "scoreboard-62028",
  storageBucket: "scoreboard-62028.appspot.com",
  messagingSenderId: "8415479304",
  appId: "1:8415479304:web:0fe13fd4f35761383133bd"
};

// =============================
// Permitir override dinámico
// =============================
const firebaseConfig = {
  ...defaultFirebaseConfig,
  ...(window.FIREBASE_CONFIG || {})
};

// =============================
// Validación básica
// =============================
const requiredConfigKeys = [
  "apiKey",
  "authDomain",
  "databaseURL",
  "projectId",
  "storageBucket",
  "messagingSenderId",
  "appId"
];

const hasMissingConfig = requiredConfigKeys.some(key => !firebaseConfig[key]);

if (hasMissingConfig) {
  console.error("Firebase config incompleta.");
}

// =============================
// Inicializar Firebase UNA vez
// =============================
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// =============================
// Inicializar Realtime DB
// =============================
const db = firebase.database();
window.db = db;
