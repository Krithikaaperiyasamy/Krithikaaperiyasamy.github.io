// ==========================================
// 🪄 1. Wand Light Tracking Logic
// ==========================================
const wand = document.getElementById('wand');
window.addEventListener('mousemove', (e) => {
    if (wand) {
        wand.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
});

// ==========================================
// 🎩 2. Sorting Hat Evaluation Engine
// ==========================================
function answerQuestion(house) {
    const optionsContainer = document.getElementById('optionsContainer');
    const quizQuestion = document.getElementById('quizQuestion');
    const resultDisplay = document.getElementById('resultDisplay');
    const houseName = document.getElementById('houseName');

    if (!optionsContainer || !quizQuestion || !resultDisplay || !houseName) return;

    // Hide the question buttons smoothly
    optionsContainer.style.display = 'none';
    quizQuestion.innerText = "The Sorting Hat has evaluated your soul...";

    // Display the sorted Hogwarts house
    houseName.innerText = house;
    resultDisplay.style.display = 'block';

    // Magical effect: Temporary background flash matching House Colors
    if (house === 'Gryffindor') {
        flashBackground('#740001'); // Scarlet
        houseName.style.color = '#FFD700'; // Gold
    } else if (house === 'Slytherin') {
        flashBackground('#1A472A'); // Emerald Green
        houseName.style.color = '#AAAAAA'; // Silver
    } else if (house === 'Ravenclaw') {
        flashBackground('#0E1A40'); // Midnight Blue
        houseName.style.color = '#946B2D'; // Bronze
    } else if (house === 'Hufflepuff') {
        flashBackground('#EEB011'); // Yellow
        houseName.style.color = '#000000'; // Black
    }
}

function flashBackground(color) {
    const originalBg = document.body.style.backgroundColor;
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = color;
    
    // Smoothly blend back to your original website theme color after 2 seconds
    setTimeout(() => {
        document.body.style.backgroundColor = originalBg;
    }, 2000);
}

// ==========================================
// ⚙️ 3. Dynamic Component Layout Injector
// ==========================================
async function loadSortingWidget() {
    try {
        // Fetches your template file
        const response = await fetch('./music.html'); 
        if (response.ok) {
            const htmlContent = await response.text();
            
            // Inject the elements into the main layout target
            document.getElementById('music-widget-container').innerHTML = htmlContent;
            
            // Ensure the result screen stays hidden on first load
            const resultDisplay = document.getElementById('resultDisplay');
            if (resultDisplay) {
                resultDisplay.style.display = 'none';
            }

        } else {
            console.error('Failed to load sorting hat widget architecture');
        }
    } catch (error) {
        console.error('Error fetching component:', error);
    }
}

// Fire off layout loading immediately on startup
loadSortingWidget();
