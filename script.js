// ================================
// WEBSITE ULANG TAHUN
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const opening = document.getElementById("opening");
    const mainContent = document.getElementById("mainContent");
    const menu = document.querySelector(".menu-section");

    const sections = document.querySelectorAll(".content-section");

    // ================================
    // BUKA WEBSITE
    // ================================

    window.bukaWebsite = function () {

        if (opening) {
            opening.classList.add("hidden");
        }

        if (mainContent) {
            mainContent.classList.remove("hidden");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    // ================================
    // SEMBUNYIKAN SEMUA BAGIAN
    // ================================

    function sembunyikanSemua() {

        sections.forEach(function (section) {
            section.classList.add("hidden");
        });

    }


    // ================================
    // BUKA BAGIAN
    // ================================

    window.bukaBagian = function (id) {

        sembunyikanSemua();

        // Sembunyikan menu utama
        if (menu) {
            menu.classList.add("hidden");
        }

        const section = document.getElementById(id);

        if (!section) {
            console.error("Bagian tidak ditemukan:", id);
            return;
        }

        section.classList.remove("hidden");

        // Pastikan mulai dari atas
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        // Animasi ulang
        section.style.animation = "none";

        void section.offsetWidth;

        section.style.animation = "appear .6s ease";
    };


    // ================================
    // KEMBALI KE MENU
    // ================================

    window.kembali = function () {

        sembunyikanSemua();

        if (menu) {
            menu.classList.remove("hidden");
        }

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    };


    // ================================
    // PESAN RAHASIA
    // ================================

    window.surprise = function () {

        const pesan = document.getElementById("surpriseText");

        if (!pesan) return;

        pesan.innerHTML = `
            <div class="secret-message">
                ❤️ Terima kasih sudah hadir dalam hidupku.
                <br><br>
                Semoga di usia yang baru ini,
                semua impian dan harapanmu
                perlahan menjadi kenyataan.
                <br><br>
                Semoga kamu selalu bahagia,
                sehat, dan dikelilingi orang-orang
                yang menyayangimu.
                <br><br>
                <strong>Happy Birthday! 🎂❤️</strong>
            </div>
        `;

    };


    // ================================
    // HATI TERBANG
    // ================================

    function buatHati() {

        const container = document.getElementById("hearts");

        if (!container) return;

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        const bentuk = [
            "❤️",
            "💕",
            "💗",
            "💖",
            "✨"
        ];

        heart.textContent =
            bentuk[Math.floor(Math.random() * bentuk.length)];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            12 + Math.random() * 22 + "px";

        heart.style.animationDuration =
            5 + Math.random() * 6 + "s";

        container.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 12000);
    }


    // Hati muncul setiap 700ms
    setInterval(buatHati, 700);

});
