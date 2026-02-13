// Configuración de tu app web en Firebase
const firebaseConfig = {
// Configuración base de Firebase (puede sobrescribirse desde window.FIREBASE_CONFIG)
const defaultFirebaseConfig = {
  apiKey: "AIzaSyAa5K74St8vyoGt3bttWq0AUlDfdWaBOGs",
  authDomain: "scoreboard-62028.firebaseapp.com",
  databaseURL: "https://scoreboard-62028-default-rtdb.firebaseio.com",
  projectId: "scoreboard-62028",
  storageBucket: "scoreboard-62028.appspot.com",
  messagingSenderId: "8415479304",
  appId: "1:8415479304:web:0fe13fd4f35761383133bd"
};

// Inicializar Firebase (versión compat)
firebase.initializeApp(firebaseConfig);
const firebaseConfig = {
  ...defaultFirebaseConfig,
  ...(window.FIREBASE_CONFIG || {})
};

const requiredConfigKeys = [
  "apiKey",
  "authDomain",
  "databaseURL",
  "projectId",
  "storageBucket",
  "messagingSenderId",
  "appId"
];

const hasMissingConfig = requiredConfigKeys.some((key) => !firebaseConfig[key]);
const hasPlaceholderApiKey =
  typeof firebaseConfig.apiKey !== "string" ||
  firebaseConfig.apiKey.includes("tu clave") ||
  firebaseConfig.apiKey.includes("...");

if (hasMissingConfig || hasPlaceholderApiKey) {
  console.error(
    "Firebase no está configurado correctamente. " +
    "Define window.FIREBASE_CONFIG con tus credenciales reales antes de cargar firebase.js."
  );
}

// Inicializar Firebase (versión compat) una sola vez
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Inicializar Realtime Database
const db = firebase.database();
window.db = db;
