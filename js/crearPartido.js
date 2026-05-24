async function crearPartido() {

  const tipo = document.getElementById("tipoPartido").value;
  const hora = document.getElementById("hora").value;
  const formato = document.getElementById("formato").value;
  const faltan = document.getElementById("jugadoresFaltan").value;
  const cancha = document.getElementById("cancha").value;

  if (!tipo || !hora || !formato || !faltan || !cancha) {
    alert("Completa todos los campos");
    return;
  }

  const partido = {
    tipo,
    hora,
    formato,
    faltan: Number(faltan), // 🔥 importante
    cancha
  };

  console.log("📤 ENVIANDO:", partido);

  try {
    const res = await fetch("http://localhost:3000/matches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(partido)
    });

    const data = await res.json();

    console.log("✅ GUARDADO:", data);

    alert("Partido creado");
    window.location.href = "partidos.html";

  } catch (error) {
    console.error("❌ ERROR:", error);
  }
}