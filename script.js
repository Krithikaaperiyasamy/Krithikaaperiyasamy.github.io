// ==========================================
// 🪄 1. Wand Light Tracking Logic
// ==========================================
const wand = document.getElementById('wand');
window.addEventListener('mousemove', (e) => {
    if (wand) {
        wand.style.left = `${e.clientX}px`;
        wand.style.top = `${e.clientY}px`;
    }
});

// ==========================================
// 🎩 2. Sorting Hat Evaluation Engine
// ==========================================
const sortingQuestions = [
    {
        prompt: 'What quality would you trust most in yourself?',
        options: [
            { label: 'Courage to take the lead', house: 'Gryffindor' },
            { label: 'Ambition to outsmart the game', house: 'Slytherin' },
            { label: 'Curiosity for deep knowledge', house: 'Ravenclaw' },
            { label: 'Kindness and steady loyalty', house: 'Hufflepuff' }
        ]
    },
    {
        prompt: 'Which activity feels most like your spirit?',
        options: [
            { label: 'Braving a daring adventure', house: 'Gryffindor' },
            { label: 'Crafting a clever plan', house: 'Slytherin' },
            { label: 'Reading by candlelight', house: 'Ravenclaw' },
            { label: 'Helping a friend in need', house: 'Hufflepuff' }
        ]
    },
    {
        prompt: 'Your ideal companion is...',
        options: [
            { label: 'A loyal gryphon', house: 'Gryffindor' },
            { label: 'A mysterious serpent', house: 'Slytherin' },
            { label: 'A wise raven', house: 'Ravenclaw' },
            { label: 'A patient badger', house: 'Hufflepuff' }
        ]
    }
];

const houseDescriptions = {
    Gryffindor: 'Brave, daring, and bold — you lead with heart and accept every challenge with courage.',
    Slytherin: 'Ambitious, cunning, and resourceful — you seek power and clever solutions to every problem.',
    Ravenclaw: 'Wise, curious, and creative — you cherish knowledge and celebrate intellectual flair.',
    Hufflepuff: 'Loyal, patient, and kind — you build strength from teamwork and quiet determination.'
};

let currentQuestionIndex = 0;
let houseScores = {
    Gryffindor: 0,
    Slytherin: 0,
    Ravenclaw: 0,
    Hufflepuff: 0
};

function renderCurrentQuestion() {
    const quizQuestion = document.getElementById('quizQuestion');
    const questionPrompt = document.getElementById('questionPrompt');
    const optionsContainer = document.getElementById('optionsContainer');
    const progressText = document.getElementById('progressText');
    const resultDisplay = document.getElementById('resultDisplay');

    if (!quizQuestion || !questionPrompt || !optionsContainer || !progressText || !resultDisplay) {
        return;
    }

    resultDisplay.style.display = 'none';
    optionsContainer.innerHTML = '';
    const question = sortingQuestions[currentQuestionIndex];

    quizQuestion.innerText = 'Sorting Hat Question';
    questionPrompt.innerText = question.prompt;
    progressText.innerText = `Question ${currentQuestionIndex + 1} of ${sortingQuestions.length}`;

    question.options.forEach(({ label, house }) => {
        const button = document.createElement('button');
        button.className = 'magic-btn';
        button.type = 'button';
        button.innerText = label;
        button.addEventListener('click', () => answerQuestion(house));
        optionsContainer.appendChild(button);
    });
}

function answerQuestion(house) {
    if (!houseScores.hasOwnProperty(house)) {
        console.warn('Unknown house selected:', house);
        return;
    }

    houseScores[house] += 1;
    currentQuestionIndex += 1;

    if (currentQuestionIndex < sortingQuestions.length) {
        renderCurrentQuestion();
        return;
    }

    showResult();
}

function showResult() {
    const quizQuestion = document.getElementById('quizQuestion');
    const questionPrompt = document.getElementById('questionPrompt');
    const optionsContainer = document.getElementById('optionsContainer');
    const progressText = document.getElementById('progressText');
    const resultDisplay = document.getElementById('resultDisplay');
    const houseName = document.getElementById('houseName');
    const houseDescription = document.getElementById('houseDescription');

    const sorted = Object.entries(houseScores)
        .sort(([, aScore], [, bScore]) => bScore - aScore);
    const [topHouse] = sorted[0];

    quizQuestion.innerText = 'The Sorting Hat is ready...';
    questionPrompt.innerText = 'Your house has been chosen.';
    optionsContainer.innerHTML = '';
    progressText.innerText = '';

    if (houseName && houseDescription && resultDisplay) {
        houseName.innerText = topHouse;
        houseDescription.innerText = houseDescriptions[topHouse] || '';
        houseName.style.color = '';
        resultDisplay.style.display = 'block';
    }

    if (topHouse === 'Gryffindor') {
        flashBackground('#740001');
        houseName.style.color = '#FFD700';
    } else if (topHouse === 'Slytherin') {
        flashBackground('#1A472A');
        houseName.style.color = '#AAAAAA';
    } else if (topHouse === 'Ravenclaw') {
        flashBackground('#0E1A40');
        houseName.style.color = '#946B2D';
    } else if (topHouse === 'Hufflepuff') {
        flashBackground('#EEB011');
        houseName.style.color = '#000000';
    }
}

function resetSortingQuiz() {
    currentQuestionIndex = 0;
    houseScores = {
        Gryffindor: 0,
        Slytherin: 0,
        Ravenclaw: 0,
        Hufflepuff: 0
    };
    renderCurrentQuestion();
}

function flashBackground(color) {
    const computed = window.getComputedStyle(document.body);
    const originalBgColor = computed.backgroundColor;
    const originalBgImage = computed.backgroundImage;

    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = color;
    document.body.style.backgroundImage = originalBgImage;
    
    setTimeout(() => {
        document.body.style.backgroundColor = originalBgColor;
        document.body.style.backgroundImage = originalBgImage;
    }, 2000);
}

// ==========================================
// ⚙️ 3. Dynamic Component Layout Injector
// ==========================================
async function loadSortingWidget() {
    try {
        // Points to your new sorting.html filename
        const response = await fetch('./sorting.html'); 
        if (response.ok) {
            const htmlContent = await response.text();
            
            // Inject the elements into the main layout target
            const container = document.getElementById('music-widget-container');
            if (container) {
                container.innerHTML = htmlContent;
            } else {
                console.error("Target container 'music-widget-container' not found in index.html");
                return;
            }
            
            // Initialize the quiz with the first question
            setTimeout(() => {
                renderCurrentQuestion();
            }, 50);

        } else {
            console.error('Failed to load sorting hat widget architecture. Server status:', response.status);
        }
    } catch (error) {
        console.error('Error fetching component:', error);
    }
}

// Fire off layout loading immediately on startup
loadSortingWidget();

