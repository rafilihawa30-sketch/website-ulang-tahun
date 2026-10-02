function bukaWebsite() {
    document.getElementById("opening").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
}

function tutupSemua() {
    const sections = document.querySelectorAll(".page-section");

    sections.forEach(function(section) {
        section.classList.add("hidden");
    });
}

function bukaBagian(id) {
    tutupSemua();

    document.querySelector(".menu").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}

function kembali() {
    tutupSemua();

    document.querySelector(".menu").classList.remove("hidden");
}

function bukaAlbum(id) {
    tutupSemua();

    document.getElementById(id).classList.remove("hidden");
}

function surprise() {
    document.getElementById("surpriseText").innerHTML =
        "❤️ Terima kasih sudah hadir dan menjadi bagian dari cerita indah ini. Semoga semua harapanmu terwujud. Happy Birthday! 🎂❤️";
}