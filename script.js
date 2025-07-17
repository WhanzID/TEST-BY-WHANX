
const password = "WhanxVIP";

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    if (input === password) {
        document.getElementById("mainContent").style.display = "block";
    } else {
        alert("Password salah!");
    }
}

function copyVirtex() {
    const type = document.getElementById("virtexType").value;
    fetch(`virtex/${type}.txt`).then(r => r.text()).then(text => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Virtex berhasil disalin!");
        });
    });
}

function sendToWA() {
    const type = document.getElementById("virtexType").value;
    fetch(`virtex/${type}.txt`).then(r => r.text()).then(text => {
        const encoded = encodeURIComponent(text);
        window.open(`https://wa.me/?text=${encoded}`, '_blank');
    });
}
