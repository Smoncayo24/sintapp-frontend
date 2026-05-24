async function crearGrupo() {
  const nombre = document.getElementById("nombreGrupo").value;
  const apodo = document.getElementById("abreviacionGrupo").value;
  const descripcion = document.getElementById("descripcionGrupo").value;

  if (!nombre || !apodo || !descripcion) {
    alert("Completa todos los campos");
    return;
  }

  const grupo = {
    nombre,
    apodo,
    descripcion
  };

  console.log("📤 ENVIANDO:", grupo);

  try {
    const res = await fetch("http://localhost:3000/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(grupo)
    });

    const data = await res.json();

    console.log("✅ RESPUESTA:", data);

    alert("Grupo creado correctamente");

    window.location.href = "grupos.html";

  } catch (error) {
    console.error("❌ ERROR:", error);
    alert("Error al crear grupo");
  }
}