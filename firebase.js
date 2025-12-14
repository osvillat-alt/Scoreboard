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
const refHistory = db.ref("history");

// Cargar lista de partidos guardados
refHistory.on("value", snap => {
  const sel = document.getElementById("history_select");
  sel.innerHTML = "";

  const data = snap.val() || {};
  const keys = Object.keys(data).sort((a,b) => Number(b) - Number(a)); // más reciente arriba

  if (keys.length === 0) {
    sel.innerHTML = `<option value="">(No hay juegos en historial)</option>`;
    return;
  }

  for (const k of keys) {
    const g = data[k] || {};
    const home = g.team_home || "Local";
    const away = g.team_away || "Visitante";
    const sh = g.score_home ?? 0;
    const sa = g.score_away ?? 0;
    const fecha = g.date ? ` • ${g.date}` : "";
    sel.innerHTML += `<option value="${k}">${home} ${sh} - ${sa} ${away}${fecha}</option>`;
  }
});

// Restaurar el juego seleccionado a "game"
function loadFromHistory() {
  const key = document.getElementById("history_select").value;
  if (!key) return alert("No hay juego seleccionado.");

  if (!confirm("¿Cargar este juego al marcador actual? (Esto reemplaza el partido en vivo)")) return;

  refHistory.child(key).once("value").then(snap => {
    const g = snap.val();
    if (!g) return alert("No se encontró ese juego en historial.");

    // ⚠️ Importante: al restaurar, lo ponemos como NO finalizado (para que se vea 'en juego')
    const restored = {
      ...g,
      finished: false
    };

    return refGame.set(restored);
  }).then(() => {
    alert("Juego cargado al marcador. Revisa el scoreboard.");
  }).catch(err => {
    console.error(err);
    alert("Error al cargar el juego.");
  });
}
