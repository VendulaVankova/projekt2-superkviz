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