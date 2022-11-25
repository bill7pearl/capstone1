const mobileMenuToggle = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
function showMobileMenu() {
mobileMenu.style.display = 'flex';
closeIcon.style.display = 'block'
}

const closeIcon = document.getElementById('close-icon');
function closeMobileMenu() {
    mobileMenu.style.display = 'none';
    closeIcon.style.display = 'none'
}

const featuredSpeakersData = [
    {
        name : 'Bill Stone',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        jobs : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, perspiciatis!',
        img : 'images/spk1.jpg',
    },
    {
        name : 'Kate Windfield',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        jobs : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, perspiciatis!',
        img : 'images/spk2.jpg',
    },
    {
        name : 'Bill Stone',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        jobs : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, perspiciatis!',
        img : 'images/spk1.jpg',
    },
    {
        name : 'Kate Windfield',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        jobs : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, perspiciatis!',
        img : 'images/spk2.jpg',
    },
    {
        name : 'Bill Stone',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        jobs : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, perspiciatis!',
        img : 'images/spk1.jpg',
    },
    {
        name : 'Kate Windfield',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        jobs : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, perspiciatis!',
        img : 'images/spk2.jpg',
    },
];

const featuredSpeakersContainer = document.getElementById('featured-speakers');
const featuredSpeakersContent = `<h2 class="featured-speakers-title">Featured Speakers</h2>
<hr class="separator">
<div class="featured-speakers">
    <div class="speaker-container">
        <div class="left-side-speaker">
            <img class="spk-bg" src="images/d.png.gif" alt="">
            <img class="speaker-img" src="${featuredSpeakersData[0].img}" alt="">
        </div>
        <div class="right-side-speaker">
            <h2 class="speaker-name">${featuredSpeakersData[0].name}</h2>
            <p class="speaker-intro">${featuredSpeakersData[0].description}</p>
            <hr class="speaker-separator">
            <p class="speaker-work">${featuredSpeakersData[0].jobs}</p>
        </div>
    </div>
    <div class="speaker-container">
        <div class="left-side-speaker">
            <img class="spk-bg" src="images/d.png.gif" alt="">
            <img class="speaker-img" src="${featuredSpeakersData[1].img}" alt="">
        </div>
        <div class="right-side-speaker">
            <h2 class="speaker-name">${featuredSpeakersData[1].name}</h2>
            <p class="speaker-intro">${featuredSpeakersData[1].description}</p>
            <hr class="speaker-separator">
            <p class="speaker-work">${featuredSpeakersData[1].jobs}</p>
        </div>
    </div>
    <div class="speaker-container">
        <div class="left-side-speaker">
            <img class="spk-bg" src="images/d.png.gif" alt="">
            <img class="speaker-img" src="${featuredSpeakersData[2].img}" alt="">
        </div>
        <div class="right-side-speaker">
            <h2 class="speaker-name">${featuredSpeakersData[2].name}</h2>
            <p class="speaker-intro">${featuredSpeakersData[2].description}</p>
            <hr class="speaker-separator">
            <p class="speaker-work">${featuredSpeakersData[2].jobs}</p>
        </div>
    </div>
    <div class="speaker-container">
        <div class="left-side-speaker">
            <img class="spk-bg" src="images/d.png.gif" alt="">
            <img class="speaker-img" src="${featuredSpeakersData[3].img}" alt="">
        </div>
        <div class="right-side-speaker">
            <h2 class="speaker-name">${featuredSpeakersData[3].name}</h2>
            <p class="speaker-intro">${featuredSpeakersData[3].description}</p>
            <hr class="speaker-separator">
            <p class="speaker-work">${featuredSpeakersData[3].jobs}</p>
        </div>
    </div>
    <div class="speaker-container">
        <div class="left-side-speaker">
            <img class="spk-bg" src="images/d.png.gif" alt="">
            <img class="speaker-img" src="${featuredSpeakersData[4].img}" alt="">
        </div>
        <div class="right-side-speaker">
            <h2 class="speaker-name">${featuredSpeakersData[4].name}</h2>
            <p class="speaker-intro">${featuredSpeakersData[4].description}</p>
            <hr class="speaker-separator">
            <p class="speaker-work">${featuredSpeakersData[4].jobs}</p>
        </div>
    </div>
    <div class="speaker-container">
        <div class="left-side-speaker">
            <img class="spk-bg" src="images/d.png.gif" alt="">
            <img class="speaker-img" src="${featuredSpeakersData[5].img}" alt="">
        </div>
        <div class="right-side-speaker">
            <h2 class="speaker-name">${featuredSpeakersData[5].name}</h2>
            <p class="speaker-intro">${featuredSpeakersData[5].description}</p>
            <hr class="speaker-separator">
            <p class="speaker-work">${featuredSpeakersData[5].jobs}</p>
        </div>
    </div>
</div>
<button class="more-featured">MORE <img class="more-arrow" src="images/down-arrow.png" alt=""></button>`;

featuredSpeakersContainer.innerHTML = featuredSpeakersContent;