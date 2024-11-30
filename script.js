// script.js

document.addEventListener("DOMContentLoaded", () => {
    const modalitaSection = document.getElementById("modalita");
    const giocoSection = document.getElementById("gioco");
    const titoloModalita = document.getElementById("titolo-modalita");
    const domandaDiv = document.getElementById("domanda");
    const risposteDiv = document.getElementById("risposte");

    const modalitaNomeImmagine = document.getElementById("nome-immagine");
    const modalitaImmagineNome = document.getElementById("immagine-nome");

    // Dati fittizi
    const dati = [
        { nome: "Airone bianco maggiore", immagine: "https://img2.juzaphoto.com/002/shared_files/uploads_hr/2695236_large25753.jpg" },
        { nome: "Airone cenerino", immagine: "https://th.bing.com/th/id/OIP.ttFn0Sfyhfbq3yUi7gpwlQHaH3?rs=1&pid=ImgDetMain" },
        { nome: "Albanella reale", immagine: "https://th.bing.com/th/id/R.416f2666a7be444701805a8c80162dd6?rik=m2m40b8ctosfNg&pid=ImgRaw&r=0" },
        { nome: "Aquila anatraia maggiore", immagine: "https://th.bing.com/th/id/OIP.FB68_2OncncAZdW9oip5fgHaEo?rs=1&pid=ImgDetMain" },
        { nome: "Aquila di mare", immagine: "https://th.bing.com/th/id/R.f3cb62c4b7d0a9399cbcd5868c8e3259?rik=AfxHSZ%2fh4nuO0w&pid=ImgRaw&r=0"},
        { nome: "Ballerina bianca", immagine: "https://th.bing.com/th/id/R.e5749121b7d431e05549ed858e9c98fb?rik=NvnSmVUOQBKzkw&pid=ImgRaw&r=0"},
        { nome: "Basettino", immagine: "https://th.bing.com/th/id/R.d894a950e08ed1d5001a9bf7eb22412e?rik=c2WNtrbjwIforg&pid=ImgRaw&r=0"},
        { nome: "Cannareccione", immagine: "https://th.bing.com/th/id/R.bd34635b333f705f55f0964c83519ace?rik=aHt7rng%2fc1WB7w&pid=ImgRaw&r=0"},
        { nome: "Cavaliere d'Italia", immagine: "https://th.bing.com/th/id/R.97ca090f6643d505779ceedc1d3e7199?rik=B%2bqNZKYCDWVPKg&pid=ImgRaw&r=0"},
        { nome: "Cicogna bianca", immagine: "https://th.bing.com/th/id/OIP.e9fV4aRFkPG6mWUdcQ0noAHaE8?rs=1&pid=ImgDetMain"},
        { nome: "Cormorano", immagine: "https://img2.juzaphoto.com/002/shared_files/uploads/2328467_l.jpg"},
        { nome: "Falco di palude", immagine: "https://th.bing.com/th/id/R.5eea177a6248e818c3dc537ed8eccdf1?rik=N7PARs8UMnZLyg&pid=ImgRaw&r=0"},
        { nome: "Fenicottero", immagine: "https://th.bing.com/th/id/R.0e31712069eaba53e9b0ea15e8f732c3?rik=BvrNOYrjYflfFw&pid=ImgRaw&r=0"},
        { nome: "Folaga", immagine: "https://th.bing.com/th/id/R.0190180e54ad73555f6fed7677527374?rik=LNdlVrcFIWSXaw&pid=ImgRaw&r=0"},
        { nome: "Forapaglie", immagine: "https://th.bing.com/th/id/OIP.HTBsbo0LLn3UgJKUDAW_8wHaE7?rs=1&pid=ImgDetMain"},
        { nome: "Gabbiano comune", immagine: "https://th.bing.com/th/id/R.f5feb5ec7f6064517fb253cd267cc64c?rik=5icsDjlzkR4nZw&pid=ImgRaw&r=0"},
        { nome: "Gabbiano reale", immagine: "https://th.bing.com/th/id/OIP.kNRraMuR0cPdrso_1T7HagHaE8?rs=1&pid=ImgDetMain"},
        { nome: "Gallinella d'acqua", immagine: "https://th.bing.com/th/id/R.f7a9e6189d67045fd292f11211c88c33?rik=slo7%2bJsmqH%2bkTw&pid=ImgRaw&r=0"},
        { nome: "Garzetta", immagine: "https://th.bing.com/th/id/R.daba87e37f7b971904da8d593a058ccd?rik=sf4pM%2fm%2ff3Oz7g&pid=ImgRaw&r=0"},
        { nome: "Germano reale", immagine: "https://th.bing.com/th/id/R.09d1e6d89dbb767208ee349a3246f354?rik=fqoQiQucRqSm5g&pid=ImgRaw&r=0"},
        { nome: "Gufo di palude", immagine: "https://th.bing.com/th/id/R.01c798ecda8cb35fb9e995b69587dbba?rik=9KFLikuLsGoY6g&pid=ImgRaw&r=0"},
        { nome: "Martin pescatore", immagine: "https://th.bing.com/th/id/R.385c18d4d479cdab5f578ed5dec3c361?rik=1xEfUHi6TxHGEA&pid=ImgRaw&r=0"},
        { nome: "Merlo acquaiolo", immagine: "https://th.bing.com/th/id/R.a55a8f3a4943eac9c0116fcd7dabac10?rik=%2bkachFZoBHITYA&pid=ImgRaw&r=0"},
        { nome: "Migliarino di palude", immagine: "https://img2.juzaphoto.com/001/shared_files/uploads_hr/1107963_large80044.jpg"},
        { nome: "Nibbio bruno", immagine: "https://th.bing.com/th/id/R.cf0fe60c8c9f52219763a53e82a07380?rik=6mDZGtyp2uCxpA&pid=ImgRaw&r=0"},
        { nome: "Nitticora", immagine: "https://th.bing.com/th/id/OIP.JNyJZceR9iAC9cyj6jnsiwHaFj?rs=1&pid=ImgDetMain"},
        { nome: "Pavoncella", immagine: "https://th.bing.com/th/id/R.8f868341f36a652b5266874cfadae172?rik=Pvtt6L5%2by7jQtQ&pid=ImgRaw&r=0"},
        { nome: "Svasso maggiore", immagine: "https://th.bing.com/th/id/R.6fbf57fc46a7a5526e06b14ffffd9493?rik=hVoNqIFqoKdXKQ&pid=ImgRaw&r=0"},
        { nome: "Topino", immagine: "https://th.bing.com/th/id/R.d63f15e2a7ec6c904c10559691a45c5a?rik=noNOEn2alb9vSA&pid=ImgRaw&r=0"},
        { nome: "Tuffetto", immagine: "https://th.bing.com/th/id/R.daf650bf69a9e4084e2b6980b67ee15a?rik=Ly8lvgKDKh29Dw&pid=ImgRaw&r=0"},
    ];

    // Funzione per mischiare gli array
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);

    // Modalità Nome -> Immagine
    modalitaNomeImmagine.addEventListener("click", () => {
        titoloModalita.textContent = "Seleziona l'immagine corretta per il nome dell'uccello";
        modalitaSection.classList.add("hidden");
        giocoSection.classList.remove("hidden");
        avviaGioco("nome-immagine");
    });

    // Modalità Immagine -> Nome
    modalitaImmagineNome.addEventListener("click", () => {
        titoloModalita.textContent = "Seleziona il nome corretto per l'immagine dell'uccello";
        modalitaSection.classList.add("hidden");
        giocoSection.classList.remove("hidden");
        avviaGioco("immagine-nome");
    });

    function avviaGioco(modalita) {
        // Seleziona una domanda casuale
        const domanda = dati[Math.floor(Math.random() * dati.length)];
        const risposte = shuffle(dati);

        // Popola la domanda e le risposte
        if (modalita === "nome-immagine") {
            domandaDiv.textContent = `Qual è l'immagine del "${domanda.nome}"?`;
            risposteDiv.innerHTML = risposte.map(r => `
                <img src="${r.immagine}" alt="${r.nome}" data-nome="${r.nome}">
            `).join("");
        } else {
            domandaDiv.innerHTML = `<img src="${domanda.immagine}" alt="${domanda.nome}">`;
            risposteDiv.innerHTML = risposte.map(r => `
                <button data-nome="${r.nome}">${r.nome}</button>
            `).join("");
        }

        // Aggiungi eventi di click alle risposte
        risposteDiv.querySelectorAll("[data-nome]").forEach(risposta => {
            risposta.addEventListener("click", (e) => {
                const selezione = e.target.dataset.nome;
                if (selezione === domanda.nome) {
                    alert("Risposta corretta!");
                } else {
                    alert("Risposta sbagliata. Riprova!");
                }
                location.reload(); // Ricarica il gioco
            });
        });
    }
});
