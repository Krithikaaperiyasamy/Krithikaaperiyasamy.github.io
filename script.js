// ==========================================
// 🪄 1. Wand Light Tracking Logic
// ==========================================
const wand = document.getElementById('wand');
window.addEventListener('mousemove', (e) => {
    if (wand) {
        wand.style.left = e.clientX + 'px';
        wand.style.top = e.clientY + 'px';
    }
});

// ==========================================
// 📚 2. Song Mapping Engine Database
// ==========================================
const spellBook = {
    focus: {
        spell: "Casting: *Intellectus Aura*",
        embedUrl: "https://open.spotify.com/track/6potEImiklXkwD9qFzpu15?si=d9d5fab4a7d04400"
    },
    moody: {
        spell: "Casting: *Nebula Lacrimas*",
        embedUrl: "https://open.spotify.com/track/1ZPeaPDjQOOC8hw1mNjyjF?si=55a6dcc2e1ce4482"
    },
    intense: {
        spell: "Casting: *Secreto Revelio*",
        embedUrl: "https://open.spotify.com/track/65oYMPSutgoUYRVA1OgM9a?si=c57fe7d737cd428"
    },
    chill: {
        spell: "Casting: *Ignis Consuelo*",
        embedUrl: "https://open.spotify.com/track/0eFMbKCRw8KByXyWBw8WO7?si=0feb241e0f44425"
    }
};

// ==========================================
// 🛠️ 3. Selection Event Execution Handler
// ==========================================
function summonSong() {
    const selector = document.getElementById('moodSelect');
    const container = document.getElementById('playerContainer');
    const label = document.getElementById('spellCast');
    const iframe = document.getElementById('musicFrame');

    if (!selector || !container || !label || !iframe) return;

    const selectedValue = selector.value;

    if (spellBook[selectedValue]) {
        label.innerText = spellBook[selectedValue].spell;
        iframe.src = spellBook[selectedValue].embedUrl;
        container.style.display = 'block';
    }
}

// ==========================================
// ⚙️ 4. Dynamic Component Layout Injector
// ==========================================
async function loadMusicWidget() {
    try {
        const response = await fetch('./music.html'); 
        if (response.ok) {
            const htmlContent = await response.text();
            
            // Inject the elements into the main layout target
            document.getElementById('music-widget-container').innerHTML = htmlContent;
            
            // Keep player hidden until an option is selected
            const container = document.getElementById('playerContainer');
            if (container) {
                container.style.display = 'none';
            }

            // Secure the change listener event to the newly rendered dropdown list
            const selector = document.getElementById('moodSelect');
            if (selector) {
                selector.addEventListener('change', summonSong);
            }

        } else {
            console.error('Failed to load music widget architecture');
        }
    } catch (error) {
        console.error('Error fetching component:', error);
    }
}

// Fire off layout loading immediately on startup
loadMusicWidget();
