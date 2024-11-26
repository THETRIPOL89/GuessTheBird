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
        { nome: "Passero", immagine: "https://via.placeholder.com/150?text=Passero" },
        { nome: "Piccione", immagine: "https://via.placeholder.com/150?text=Piccione" },
        { nome: "Gabbiano", immagine: "https://via.placeholder.com/150?text=Gabbiano" },
        { nome: "Aquila", immagine: "https://via.placeholder.com/150?text=Aquila" },
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
