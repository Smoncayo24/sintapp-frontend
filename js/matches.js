const container = document.getElementById("matchesContainer");
const todayBtn = document.getElementById("todayBtn");
const weekBtn = document.getElementById("weekBtn");

// 🔥 MOSTRAR HOY
async function showTodayMatches() {

  todayBtn.classList.add("active-tab");
  weekBtn.classList.remove("active-tab");

  const response = await fetch("https://sintapp-backend.onrender.com/matches/hoy");
  const data = await response.json();

  renderMatches(data);
}

// 🔥 MOSTRAR SEMANA
async function showWeekMatches() {

  weekBtn.classList.add("active-tab");
  todayBtn.classList.remove("active-tab");

  const response = await fetch("https://sintapp-backend.onrender.com/matches/semana");
  const data = await response.json();

  renderMatches(data);
}

// 🔥 RENDER CORREGIDO
function renderMatches(matches) {

  container.innerHTML = "";

  matches.forEach(match => {

    const card = document.createElement("div");
    card.classList.add("match-card");

    const tipoTexto =
      match.tipo === "hoy"
        ? "Hoy"
        : "Esta semana";

    card.innerHTML = `
      <h2>${match.cancha}</h2>

      <p>
        Formato: ${match.formato}
      </p>

      <p>
        ${tipoTexto} - ${match.hora}
      </p>

      <p>
        Faltan: ${match.faltan}
      </p>

      <button class="location-button">
        📍
      </button>
    `;

    container.appendChild(card);

  });
}

// 🔥 INICIO
showTodayMatches();