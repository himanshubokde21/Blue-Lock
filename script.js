const characters = [
    {
        name: "Yoichi Isagi",
        image: "assets/images/characters/isagi.png",
        team: "Blue Lock"
    },
    {
        name: "Rin Itoshi",
        image: "assets/images/characters/rin.png",
        team: "Blue Lock"
    },
    {
        name: "Sae Itoshi",
        image: "assets/images/characters/sae.png",
        team: "Japan U-20"
    },
    {
        name: "Meguru Bachira",
        image: "assets/images/characters/meguru.png",
        team: "Blue Lock"
    },
    {
        name: "Oliver Aiku",
        image: "assets/images/characters/aiku.png",
        team: "Japan U-20"
    },
    {
        name: "Kento Cho",
        image: "assets/images/characters/cho.png",
        team: "Japan U-20"
    },
    {
        name: "Miroku Darai",
        image: "assets/images/characters/darai.png",
        team: "Japan U-20"
    },
    {
        name: "Hyoma Chigiri",
        image: "assets/images/characters/chigiri.png",
        team: "Blue Lock"
    },
    {
        name: "Seishiro Nagi",
        image: "assets/images/characters/nagi.png",
        team: "Blue Lock"
    },
    {
        name: "Gen Fukaku",
        image: "assets/images/characters/gen.png",
        team: "Japan U-20"
    },
    {
        name: "Barou Shoei",
        image: "assets/images/characters/baro.png",
        team: "Blue Lock"
    },
    {
        name: "Hayate Haru",
        image: "assets/images/characters/haru.png",
        team: "Japan U-20"
    },
    {
        name: "Wakatsuki Itsuki",
        image: "assets/images/characters/itsuki.png",
        team: "Japan U-20"
    },
    {
        name: "Neru Teppei",
        image: "assets/images/characters/neru.png",
        team: "Japan U-20"
    },
    {
        name: "Gin Gagamaru",
        image: "assets/images/characters/gin.png",
        team: "Blue Lock"
    },
    {
        name: "Reo Mikage",
        image: "assets/images/characters/reo.png",
        team: "Blue Lock"
    },
    {
        name: "Kazuma Nio",
        image: "assets/images/characters/nio.png",
        team: "Japan U-20"
    },
    {
        name: "Tadaomi Karasu",
        image: "assets/images/characters/karasu.png",
        team: "Blue Lock"
    },
    {
        name: "Ryusei Shidou",
        image: "assets/images/characters/shidou.png",
        team: "Japan U-20"
    },
    {
        name: "Ikki Niko",
        image: "assets/images/characters/niko.png",
        team: "Blue Lock"
    },
    {
        name: "Kenyu Yukimiya",
        image: "assets/images/characters/kenyu.png",
        team: "Blue Lock"
    },
    {
        name: "Yo Hiori",
        image: "assets/images/characters/hiori.png",
        team: "Blue Lock"
    },
    {
        name: "Shuto Sendo",
        image: "assets/images/characters/shuto.png",
        team: "Japan U-20"
    },
    {
        name: "Eita Otoya",
        image: "assets/images/characters/eita.png",
        team: "Blue Lock"
    },
    {
        name: "Kitsunezato Teru",
        image: "assets/images/characters/teru.png",
        team: "Japan U-20"
    },
    {
        name: "Jyubei Aryu",
        image: "assets/images/characters/aryu.png",
        team: "Blue Lock"
    },

]

const cardContainer = document.getElementById('cardContainer');

characters.forEach(character => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
    `;

    cardContainer.appendChild(card);
});

function BLChar() {

    const banner = document.getElementById('banner');
    banner.style.background = "url('assets/images/banner/BL-banner.png') no-repeat center/contain, #01409a";

    const imgs1 = document.querySelectorAll('.banner-img');
    const imgs2 = document.querySelectorAll('.btn img');

    const bannerImgs = [
        "BL-banner-left.png",
        "BL-banner-right.png"
    ];
    const btnImgs = [
        "BL-btn.png",
        "JU-btn.png",
    ];

    const path1 = "assets/images/banner/";
    const path2 = "assets/images/buttons/";

    imgs1.forEach((img, idx) => {
        const currentAnimation = getComputedStyle(img).animation;
        img.style.animation = "none";
        img.offsetHeight; 
        img.src = path1 + bannerImgs[idx];
        img.style.animation = currentAnimation;
    });

    imgs2.forEach((img, idx) => {
        const currentAnimation = getComputedStyle(img).animation;
        img.style.animation = "none";
        img.offsetHeight; 
        img.src = path2 + btnImgs[idx];
        img.style.animation = currentAnimation;
    });

    cardContainer.innerHTML = '';
    characters.forEach(character => {
        if (character.team === "Blue Lock") {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
            `;

            cardContainer.appendChild(card);
        }
    });
}

function JapanU20Char() {
    const banner = document.getElementById('banner');
    banner.style.background = "url('assets/images/banner/JU-banner.png') no-repeat center/contain, linear-gradient(to right, #e60f57 50%, #000000 50%)";
    
    const imgs1 = document.querySelectorAll('.banner-img');
    const imgs2 = document.querySelectorAll('.btn img');

    const bannerImgs = [
        "JU-banner-left.png",
        "JU-banner-right.png"
    ];
    const btnImgs = [
        "BL-btn.png",
        "JU-btn.png"
    ];

    const path1 = "assets/images/banner/";
    const path2 = "assets/images/buttons/";

    imgs1.forEach((img, idx) => {
        const currentAnimation = getComputedStyle(img).animation;
        img.style.animation = "none";
        img.offsetHeight;
        img.src = path1 + bannerImgs[idx];
        img.style.animation = currentAnimation;
    });

    imgs2.forEach((img, idx) => {
        const currentAnimation = getComputedStyle(img).animation;
        img.style.animation = "none";
        img.offsetHeight;
        img.src =  path2 + btnImgs[idx];
        img.style.animation = currentAnimation;
    });

    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    characters.forEach(character =>{
        if (character.team === "Japan U-20"){
            const card = document.createElement('div');
            card.className = 'card';
    
            card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            `;
    
            cardContainer.appendChild(card);
        }
    });
}
