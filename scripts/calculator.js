const ITEMS = {
    "meulette": {
        nom: "La Meulette",
        ressources: [
            {nom: "Etoffe de Dok Alako", qte: 50},
            {nom: "Scalp du Bwork Mage", qte: 10},
            {nom: "Testicules du Mulou", qte: 5},
            {nom: "Etoffe de Fantôme Pandule", qte: 2},
            {nom: "Etoffe de Fantôme Soryo Firefoux", qte: 2},
            {nom: "Peau de Pandore", qte: 1},
            {nom: "Testicules Magiques du Melou", qte: 1},
            {nom: "Amuloumulette", qte: 1}
        ],
        runes: [
            {nom: "Rune Ga Pa", taux: 0.67},
            {nom: "Rune Ra vi", taux: 1.3},
            {nom: "Rune Pa vi", taux: 4.4},
            {nom: "Rune Ra Fo", taux: 0.98},
            {nom: "Rune Pa Fo", taux: 2.9},
            {nom: "Rune Ra Sa", taux: 0.1},
            {nom: "Rune Pa Sa", taux: 2.6},
            {nom: "Rune Crit", taux: 1.65},
            {nom: "Rune Do", taux: 2},
            {nom: "Rune Pa Prospe", taux: 1.5},
            {nom: "Rune Pa Do Per", taux: 0.85},
            {nom: "Rune Ré Per Eau", taux: 5.3},
            {nom: "Rune Ré Per Air", taux: 5.3}
        ]
    },
    "torqueaa": {
        nom: "Torque Ancestral",
        ressources: [
            {nom: "Ecorce d'Abraknyde", qte: 150},
            {nom: "Bourgeon d'Abraknyde Sombre", qte: 40},
            {nom: "Ecorce d'Abraknyde Sombre", qte: 5},
            {nom: "Racine d'Abraknyde Sombre", qte: 5},
            {nom: "Bois de Kaliptus", qte: 30},
            {nom: "Racine d'Abraknyde Ancestral", qte: 5},
            {nom: "Ecorce d'Abraknyde Ancestral", qte: 5},
            {nom: "Ambre d'Abraknyde Sombre", qte: 1},
            {nom: "Ambre d'Abraknyde", qte: 1},
            {nom: "Ambre", qte: 20},
            {nom: "Feuille de Tronknyde", qte: 20},
            {nom: "Bourgeon d'Abraknyde", qte: 20},
            {nom: "Patte d'Arakne", qte: 20}
        ],
        runes: [
            {nom: "Rune Ga Pa", taux: 0.57},
            {nom: "Rune Ra vi", taux: 0.14},
            {nom: "Rune Pa vi", taux: 2.4},
            {nom: "Rune Ra Cha", taux: 0.7},
            {nom: "Rune Pa Cha", taux: 2.5},
            {nom: "Rune Ra Fo", taux: 0.1},
            {nom: "Rune Pa Fo", taux: 2.7},
            {nom: "Rune Pa Sa", taux: 1.5},
            {nom: "Rune Do", taux: 3.3},
            {nom: "Rune Pa Prospe", taux: 0.6},
            {nom: "Rune Ré Per Feu", taux: 5.3}
        ]
    },
    "collierrn": {
        nom: "Collier du Rat Noir",
        ressources: [
            {nom: "Crocs de Rats", qte: 50},
            {nom: "Oeil d'Ouginak", qte: 20},
            {nom: "Collier Cassé d'Ouginak", qte: 10},
            {nom: "Ambre de Bambouto", qte: 10},
            {nom: "Etoffe du Rat Noir", qte: 2},
            {nom: "Rubis", qte: 1},
            {nom: "Diamant", qte: 1},
            {nom: "Emeraude", qte: 1},
            {nom: "Or", qte: 1},
            {nom: "Cuivre", qte: 14}
        ],
        runes: [
            {nom: "Rune Ga Pa", taux: 0.5},
            {nom: "Rune Pa vi", taux: 1.75},
            {nom: "Rune Ra Age", taux: 0.7},
            {nom: "Rune Pa Age", taux: 2.5},
            {nom: "Rune Pa Sa", taux: 2.3},
            {nom: "Rune Pa Pi", taux: 0.6},
            {nom: "Rune Pi", taux: 3.5},
            {nom: "Rune Pa Pi Per", taux: 2.25},
            {nom: "Rune Pi Per", taux: 6.8}
        ]
    },
    "amuterrda": {
        nom: "Amulette Terrdala",
        ressources: [
            {nom: "Bois de Bambou Sombre", qte: 10},
            {nom: "Silicate", qte: 10},
            {nom: "Artefact Pandawushu Terre", qte: 9},
            {nom: "Aluminite", qte: 4},
            {nom: "Rubis", qte: 3},
            {nom: "Ecorce Magique de Bulbambou", qte: 1},
            {nom: "Agathe", qte: 1}
        ],
        runes: [
            {nom: "Rune Ga Pa", taux: 0.3},
            {nom: "Rune Pa vi", taux: 1.1},
            {nom: "Rune Pa Sa", taux: 1.5},
            {nom: "Rune Ré Per Eau", taux: 3},
            {nom: "Rune Ré Per Air", taux: 3}
        ]
    }
};


// ===========================
// 2️⃣ FONCTIONS DE CALCUL
// ===========================

function calculerCoutRessources(itemKey) {
    const res = ITEMS[itemKey].ressources;
    let total = 0;

    res.forEach(r => {
        const input = document.querySelector(`[data-ressource="${r.nom}"]`);
        if (!input) return;
        const prix = Number(input.value) || 0;
        total += prix * r.qte;
    });

    return total;
}

function calculerValeurRunes(itemKey) {
    const runes = ITEMS[itemKey].runes;
    let total = 0;

    runes.forEach(r => {
        const input = document.querySelector(`[data-rune="${r.nom}"]`);
        if (!input) return;
        const prix = Number(input.value) || 0;
        total += prix * r.taux; // <= on utilise le taux
    });

    return total;
}


// ===========================
// 3️⃣ AFFICHAGE DES INPUTS
// ===========================

function afficherRessources(itemKey) {
    const item = ITEMS[itemKey];
    const div = document.getElementById("ressources");
    div.innerHTML = "";

    item.ressources.forEach(r => {
        div.innerHTML += `
            <div class="ligne-ressource">
                <label>${r.qte}<span class="quantite">x ${r.nom}</span></label>
                <input type="number" data-ressource="${r.nom}" placeholder="Prix unitaire">
            </div>
        `;
    });
}

function afficherRunes(itemKey) {
    const item = ITEMS[itemKey];
    const div = document.getElementById("runes");
    div.innerHTML = "";

    item.runes.forEach(r => {
        div.innerHTML += `
            <div class="ligne-rune">
                <label>${r.nom}</label>
                <input type="number" data-rune="${r.nom}" placeholder="Prix unitaire">
            </div>
        `;
    });
}


// ===========================
// 4️⃣ INIT PAGE
// ===========================

function initPage(itemKey) {
    document.getElementById("item-name").innerText = ITEMS[itemKey].nom;

    afficherRessources(itemKey);
    afficherRunes(itemKey);

    document.getElementById("btnCalc").addEventListener("click", () => {
        const cout = calculerCoutRessources(itemKey);
        const valeurRunes = calculerValeurRunes(itemKey);
        const benef = valeurRunes - cout;

         document.getElementById("result").innerHTML = `
            <div class="result-box">Coût des ressources : <b>${cout.toLocaleString()}</b></div>
            <div class="result-box">Valeur runes : <b>${valeurRunes.toLocaleString()}</b></div>
            <div class="result-box">Bénéfice net par item : <b style="color:${benef >= 0 ? "green" : "red"}">${benef.toLocaleString()}</b></div>
        `;
    });
}