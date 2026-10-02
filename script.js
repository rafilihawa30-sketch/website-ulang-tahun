// Pesan Ucapan
const message = "Selamat Ulang Tahun! Semoga panjang umur, sehat selalu, dan semua impianmu tercapai! Terima kasih sudah menjadi bagian terindah dalam hidupku. 💖🎉";

const typedTextElement = document.getElementById("typed-text");
const btnMusic = document.getElementById("btnMusic");
const bgMusic = document.getElementById("bgMusic");
const envelope = document.getElementById("envelope");
const btnSurprise = document.getElementById("btnSurprise");
const heartsContainer = document.getElementById("heartsContainer");

let charIndex = 0;
let isPlaying = false;
let isTyped = false;

// Toggle Musik
btnMusic.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    btnMusic.innerText = "🎵 Putar Musik";
  } else {
    bgMusic.play();
    btnMusic.innerText = "🔊 Musik On";
  }
  isPlaying = !isPlaying;
});

// Buka Amplop Surat & Efek Ketik
envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
  
  if (!isTyped && envelope.classList.contains("open")) {
    typeMessage();
    isTyped = true;
  }
});

function typeMessage() {
  if (charIndex < message.length) {
    typedTextElement.innerHTML += message.charAt(charIndex);
    charIndex++;
    setTimeout(typeMessage, 40);
  }
}

// Tombol Kejutan / Confetti
btnSurprise.addEventListener("click", (e) => {
  e.stopPropagation();
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 }
  });
});

// Efek Partikel Hati Melayang
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart-particle");
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeart, 350);

// Pop-up Zoom Foto jika diklik
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgModalSrc");
const closeModal = document.querySelector(".close");

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
