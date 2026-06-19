// Wand tracking logic
const wand = document.getElementById('wand');
window.addEventListener('mousemove', (e) => {
    wand.style.left = e.clientX + 'px';
    wand.style.top = e.clientY + 'px';
});

// Dynamic Component Injector: Automatically loads music.html layout
async function loadMusicWidget() {
    try {
        const response = await fetch('music.html');
        if (response.ok) {
            const htmlContent = await response.text();
            document.getElementById('music-widget-container').innerHTML = htmlContent;
        } else {
            console.error('Failed to load music widget architecture');
        }
    } catch (error) {
        console.error('Error fetching component:', error);
    }
}

// Fire off layout loading immediately on startup
loadMusicWidget();

// Song mapping engine database
const spellBook = {
    studying: {
        spell: "Casting: *Intellectus Aura*",
        embedUrl: "https://spotify.com"
    },
    melancholy: {
        spell: "Casting: *Nebula Lacrimas*",
        embedUrl: "https://spotify.com"
    },
    mysterious: {
        spell: "Casting: *Secreto Revelio*",
        embedUrl: "https://spotify.com"
    },
    cozy: {
        spell: "Casting: *Ignis Consuelo*",
        embedUrl: "https://spotify.com"
    }
};

// Selection event execution handler
function summonSong() {
    const selector = document.getElementById('moodSelect');
    const selectedValue = selector.value;
    const container = document.getElementById('playerContainer');
    const label = document.getElementById('spellCast');
    const iframe = document.getElementById('musicFrame');

    if (spellBook[selectedValue]) {
        label.innerText = spellBook[selectedValue].spell;
        iframe.src = spellBook[selectedValue].embedUrl;
        container.style.display = 'block';
    }
}
