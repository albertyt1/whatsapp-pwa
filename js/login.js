const countries = [
    { name: "Estados Unidos", code: "+1" },
    { name: "México", code: "+52" },
    { name: "España", code: "+34" },
    { name: "Argentina", code: "+54" },
    { name: "Colombia", code: "+57" },
    { name: "Chile", code: "+56" },
    { name: "Perú", code: "+51" },
    { name: "Brasil", code: "+55" },
    { name: "Francia", code: "+33" },
    { name: "Alemania", code: "+49" },
    { name: "Italia", code: "+39" },
    { name: "Reino Unido", code: "+44" },
    { name: "Japón", code: "+81" },
    { name: "China", code: "+86" },
    { name: "República Dominicana", code: "+1" },
    { name: "India", code: "+91" }
];

// Cargar países
const select = document.getElementById("country");

countries.forEach(c => {
    const option = document.createElement("option");
    option.value = c.code;
    option.textContent = `${c.name} (${c.code})`;
    select.appendChild(option);
});

// Login
function login() {
    const countryCode = select.value;
    const phone = document.getElementById("phone").value.trim();

    if (phone === "") {
        alert("Ingresa tu número");
        return;
    }

    const fullNumber = countryCode + phone;

    // Guardar sesión
    localStorage.setItem("userPhone", fullNumber);

    // Redirigir
    window.location.href = "/whatsapp-pwa/welcome.html";
}