const characters = [
    {
        name: "Yoichi Isagi",
        image: "assets/images/characters/isagi.png"
    },
    {
        name: "Rin Itoshi",
        image: "assets/images/characters/rin.png"
    },
    {
        name: "Meguru Bachira",
        image: "assets/images/characters/meguru.png"
    },
    {
        name: "Hyoma Chigiri",
        image: "assets/images/characters/chigiri.png"
    },
    {
        name: "Seishiro Nagi",
        image: "assets/images/characters/nagi.png"
    },
    {
        name: "Jingo Raichi",
        image: "assets/images/characters/raichi.png"
    },
    {
        name: "Barou Shoei",
        image: "assets/images/characters/barou.png"
    },
    {
        name: "Rensuke Kunigami",
        image: "assets/images/characters/kunigami.png"
    },
    {
        name: "Gin Gagamaru",
        image: "assets/images/characters/gagamaru.png"
    },
    {
        name: "Tsubasa Kuon",
        image: "assets/images/characters/kuon.png"
    },
    {
        name: "Kira Naruhaya",
        image: "assets/images/characters/naruhaya.png"
    },
    {
        name: "Reo Mikage",
        image: "assets/images/characters/reo.png"
    },
    {
        name: "Tadaomi Karasu",
        image: "assets/images/characters/karasu.png"
    },
    {
        name: "Don Lorenzo",
        image: "assets/images/characters/lorenzo.png"
    },
    {
        name: "yudai imamura",
        image: "assets/images/characters/imamura.png"
    },
    {
        name: "ryosuke kira",
        image: "assets/images/characters/kira.png"
    },
    {
        name: "Ikki Niko",
        image: "assets/images/characters/niko.png"
    },
    {
        name: "Zantetsu Tsurugi",
        image: "assets/images/characters/tsurugi.png"   
    }
]

const cardContainer = document.getElementById('cardContainer');

characters.forEach(character => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
    `;

    cardContainer.appendChild(card);
});