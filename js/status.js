// Estados fake (puedes luego hacerlos dinámicos)
const statuses = [
    { user: "Juan", content: "Hola 👋" },
    { user: "Ana", content: "Estoy feliz 😄" },
    { user: "Luis", content: "Modo pro 🔥" }
];

const list = document.getElementById("statusList");
const viewer = document.getElementById("viewer");

// Renderizar lista
statuses.forEach((s, index) => {
    const div = document.createElement("div");
    div.className = "status";

    div.innerHTML = `
        <div class="circle">${s.user[0]}</div>
        <small>${s.user}</small>
    `;

    div.onclick = () => openStatus(index);

    list.appendChild(div);
});

// Abrir estado
function openStatus(index) {
    viewer.style.display = "flex";
    viewer.innerText = statuses[index].content;

    // Auto cerrar (tipo Telegram)
    setTimeout(() => {
        closeViewer();
    }, 3000);
}

function closeViewer() {
    viewer.style.display = "none";
}