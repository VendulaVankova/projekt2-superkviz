const otazky = [{
        otazka: 'Jak se jmenují prasynovci strýčka Skrblíka?',
        obrazek: 'kaceri.jpg',
        alt: 'Kačeří příběhy',
        odpovedi: [
            'Kulík, Dulík a Bulík',
            'Kulík, Dulík a Bubík',
            'Kubík, Dulík a Bulík'
        ],
        spravna: 1
    },
    {
        otazka: 'Kdo byl hlavním protivníkem Strážců vesmíru v kultovním seriálu z roku 1993?',
        obrazek: 'strazcivesmiru.jpg',
        alt: 'Strážci vesmíru',
        odpovedi: [
            'Rita Repulsa',
            'Zordon',
            'Alpha 5'
        ],
        spravna: 0

    },
    {
        otazka: 'Jak se jmenuje modelínový hrdina švýcarsko-britského seriálu z roku 1986?',
        obrazek: 'tucnak.jpg',
        alt: 'Tučňáci',
        odpovedi: [
            'Pingui',
            'Beze jména',
            'Pingu'
        ],
        spravna: 2

    }
];

// nastavení prvků, se kterými budeme pracovat

const poradi = document.getElementById('poradi');
const otazka = document.getElementById('otazka');
const obrazek = document.getElementById('obrazek');
const moznosti = document.getElementById('moznosti');

let aktualniOtazka = 0;
let meOdpovedi = [];

// zobrazení otázek

zobrazOtazku();

function zobrazOtazku() {
    //upravení pořadí, textu a obrázku otázky
    poradi.textContent = 'Otázka ' + (aktualniOtazka + 1) + ' / ' + otazky.length;
    otazka.textContent = otazky[aktualniOtazka].otazka;
    obrazek.src = 'obrazky/' + otazky[aktualniOtazka].obrazek;

    //upravení odpovědi (přes proměnnou)
    let odpovedi = otazky[aktualniOtazka].odpovedi;

    let seznam = document.createElement('ul');
    seznam.id = 'odpovedi';

    //vytvoření list items pro všechny odpovědi a event handler onclick
    for (let i = 0; i < odpovedi.length; i++) {
        let polozka = document.createElement('li');
        polozka.dataset.odpoved = i;
        polozka.textContent = odpovedi[i];
        polozka.onclick = klikNaOdpoved;
        seznam.appendChild(polozka);
    }

    document.getElementById('odpovedi').remove();
    moznosti.appendChild(seznam);
}

function klikNaOdpoved() {
    let odpoved = this.dataset.odpoved;
    meOdpovedi.push(odpoved);
    aktualniOtazka = aktualniOtazka + 1;
    if (aktualniOtazka === otazky.length) {
        zobrazVyhodnoceni();
    } else {
        zobrazOtazku();
    }
}

function zobrazVyhodnoceni() {
    //skryjeme div s otazkami
    document.querySelector('.kviz').style.display = 'none';
    //odkryjeme div s vyhodnocením
    document.querySelector('.vysledek').style.display = 'block';
    //najdeme div, do kterého budeme vypisovat text
    const hodnoceni = document.getElementById('hodnoceni');

    let pocetSpravnych = 0;

    for (let i = 0; i < otazky.length; i++) {
        //přidáme informace o otázce
        let nadpis = document.createElement('h3');
        nadpis.textContent = (i + 1) + '. ' + otazky[i].otazka;
        hodnoceni.appendChild(nadpis);

        //přidáme odpověď
        let me = document.createElement('p');
        me.textContent = 'Tvá odpověď: ' + otazky[i].odpovedi[meOdpovedi[i]];
        hodnoceni.appendChild(me);

        //přidáme informaci o správnosti odpovědi
        let spravne = document.createElement('p');
        if (parseInt(meOdpovedi[i]) === otazky[i].spravna) {
            pocetSpravnych++;
            spravne.textContent = 'Jedná se o správnou odpověď.';
        } else {
            spravne.textContent = 'Správná odpověď: ' + otazky[i].odpovedi[otazky[i].spravna];
        }
        hodnoceni.appendChild(spravne);
    }

    //vypsání finálního výsledku úspěšnosti
    let procenta = document.createElement('h2');
    procenta.textContent += 'Uvedla jsi správně ' + pocetSpravnych + ' ze ' + otazky.length + ' otázek. Tvá úspěšnost je ' + Math.round(pocetSpravnych / otazky.length * 100) + ' %.';
    hodnoceni.appendChild(procenta);

}