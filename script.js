const listPemain = [
    { 
        nick: "Kairi", 
        namaAsli: "Kairi Ygnacio Rayosdelsol", 
        role: "Jungler", 
        hero: "Lancelot, Ling, Hayabusa",
        hadiah: "Final MVP MPL ID S10, Best Jungler MPL ID S11 & S12",
        foto: "" 
    },
    { 
        nick: "San (Sanz)", 
        namaAsli: "Gilang", 
        role: "Mid Laner", 
        hero: "Valentina, Yve, Pharsa",
        hadiah: "Regular Season MVP MPL ID S11, Final MVP S11 & S13",
        foto: "" 
    },
    { 
        nick: "Kiboy", 
        namaAsli: "Nicky Fernando Pontonuwu", 
        role: "Roamer", 
        hero: "Chou, Khufra, Kaja",
        hadiah: "Final MVP MSC 2023, Final MVP MPL ID S12, Best Roamer",
        foto: "" 
    },
    { 
        nick: "CW", 
        namaAsli: "Calvin Winata", 
        role: "Gold Laner",
        Sekarang:"Pelatih Onic Id",
        hero: "Beatrix, Claude, Wanwan",
        hadiah: "Final MVP MPL ID S8, Best Gold Laner MPL ID S10 & S11",
        foto: "" 
    },
    { 
        nick: "SaSa", 
        namaAsli: "Lu Khai Bean", 
        role: "Gold Laner", 
        hero: "Claude, Karrie, Granger",
        hadiah: "Juara 1 Piala Presiden Esports 2019...",
        foto: "",
        memori: "SaSa adalah legenda 'Kage' asal Malaysia yang membawa ONIC era emas menyapu bersih seluruh gelar juara tanpa kekalahan pada tahun 2019..." 
    },
    { 
        nick: "Skyler", 
        namaAsli: "Schevenko David Tendean", 
        role: "Gold Laner", 
        hero: "Claude, Brody, Beatrix",
        hadiah: "Best Gold Laner MPL ID, First Team Winner",
        foto: "" 
    },
    { 
        nick: "Zavero", 
        namaAsli: "Zavero", 
        role: "Jungler", 
        hero: "Ling, Fanny, Hayabusa",
        hadiah: "Roster Muda Berbakat / Bintang Masa Depan",
        foto: "" 
    },
    { 
        nick: "Lutpiii", 
        namaAsli: "Lutfi Ardianto", 
        role: "EXP Laner", 
        hero: "Arlott, Terizla, Paquito",
        hadiah: "Most Improved Player MPL ID S13, Juara MPL ID S13",
        foto: "" 
    },
    { 
        nick: "Butsss", 
        namaAsli: "Muhammad Satrya Sanubari", 
        role: "EXP Laner", 
        hero: "Yu Zhong, Esmeralda, Uranus",
        hadiah: "Regular Season MVP MPL ID S8, Best EXP Laner S10 & S12",
        foto: "" 
    }
];

const grid = document.getElementById("roster-grid");

function renderPemain(filterRole) {
    grid.innerHTML = "";
    const hasil = filterRole === "all" 
        ? listPemain 
        : listPemain.filter(p => p.role === filterRole);

    hasil.forEach(p => {
        const card = document.createElement("div");
        card.className = "player-card";
        card.innerHTML = `
            <div>
                <div class="player-img-container">
                    <img src="${p.foto}" alt="${p.nick}" onerror="this.src='https://via.placeholder.com/100?text=ONIC'">
                </div>
                <h3>${p.nick}</h3>
                <span class="role-badge">${p.role}</span>
                <p><strong>Nama:</strong> ${p.namaAsli}</p>
                <p><strong>Hero:</strong> ${p.hero}</p>
            </div>
            <div class="award-box">
                <strong>🏅 Penghargaan:</strong><br>
                ${p.hadiah}
            <div class="klik-info">
            </div>
        `;
        
        grid.appendChild(card);
    });
}
// Tambahkan event listener ini persis di bawah pembuatan card
              card.addEventListener("click", () => {
                  document.getElementById("modal-nama").textContent = `Memori: ${p.nick}`;
                  document.getElementById("modal-teks").textContent = p.memori || "Belum ada catatan memori untuk pemain ini.";
                  document.getElementById("modal-memori").style.display = "flex";
              });
function tutupModal() {
          document.getElementById("modal-memori").style.display = "none";
      }

      window.onclick = function(event) {
          const modal = document.getElementById("modal-memori");
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }

renderPemain("all");

const tombolFilter = document.querySelectorAll(".filter-btn");
tombolFilter.forEach(btn => {
    btn.addEventListener("click", () => {
        tombolFilter.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderPemain(btn.getAttribute("data-role"));
    });
});

const btnChant = document.getElementById("btn-chant");
const teksChant = document.getElementById("chant-output");
const listChant = [
    "GO ONIC! GO ONIC! GO! 🔥",
    "RAJA LANGIT TAK TERKALAHKAN! ⚡",
    "LANDAK KUNING BERAKSI! 🦔💛",
    "ONIC ID JUARA! 🏆"
];
let idx = 0;

btnChant.addEventListener("click", () => {
    teksChant.textContent = listChant[idx];
    idx = (idx + 1) % listChant.length;
    teksChant.style.transform = "scale(1.1)";
    setTimeout(() => { teksChant.style.transform = "scale(1)"; }, 200);
});

teksChant.addEventListener("click", () => {
    btnChant.click();
});