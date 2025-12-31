// --- 1. Data Store (Questions) ---
const quizData = {
    general: {
        easy: [
            { q: "What is the capital of France?", opt: ["Berlin", "Madrid", "Paris", "Rome"], ans: 2 },
            { q: "Which planet is known as the Red Planet?", opt: ["Earth", "Mars", "Jupiter", "Venus"], ans: 1 },
            { q: "Who painted the Mona Lisa?", opt: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"], ans: 1 },
            { q: "What is 2 + 2?", opt: ["3", "4", "5", "6"], ans: 1 },
            { q: "Which animal is the tallest?", opt: ["Elephant", "Giraffe", "Zebra", "Lion"], ans: 1 }
        ],
        medium: [
            { q: "Who wrote 'Hamlet'?", opt: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], ans: 1 },
            { q: "What is the chemical symbol for Gold?", opt: ["Au", "Ag", "Fe", "Cu"], ans: 0 },
            { q: "How many continents are there?", opt: ["5", "6", "7", "8"], ans: 2 },
            { q: "Which ocean is the largest?", opt: ["Atlantic", "Indian", "Arctic", "Pacific"], ans: 3 },
            { q: "In which year did Titanic sink?", opt: ["1912", "1905", "1920", "1898"], ans: 0 }
        ],
        hard: [
            { q: "What is the speed of light?", opt: ["299,792 km/s", "150,000 km/s", "1,080 km/h", "Unknown"], ans: 0 },
            { q: "Who developed the Theory of Relativity?", opt: ["Newton", "Einstein", "Tesla", "Hawking"], ans: 1 },
            { q: "Which element has atomic number 1?", opt: ["Helium", "Hydrogen", "Lithium", "Oxygen"], ans: 1 },
            { q: "What is the capital of Australia?", opt: ["Sydney", "Melbourne", "Canberra", "Perth"], ans: 2 },
            { q: "How many bones in the adult human body?", opt: ["206", "205", "210", "198"], ans: 0 }
        ]
    },
    science: {
        easy: [
            { q: "What do bees collect from flowers?", opt: ["Pollen", "Honey", "Wax", "Seeds"], ans: 0 },
            { q: "What is H2O?", opt: ["Salt", "Water", "Air", "Fire"], ans: 1 },
            { q: "Which gas do plants absorb?", opt: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"], ans: 1 },
            { q: "What is the center of an atom called?", opt: ["Electron", "Proton", "Nucleus", "Neutron"], ans: 2 },
            { q: "How many legs does a spider have?", opt: ["6", "8", "10", "12"], ans: 1 }
        ],
        medium: [
            { q: "What is the hardest natural substance?", opt: ["Gold", "Iron", "Diamond", "Platinum"], ans: 2 },
            { q: "Which planet has the most rings?", opt: ["Jupiter", "Saturn", "Uranus", "Neptune"], ans: 1 },
            { q: "What is the study of plants called?", opt: ["Zoology", "Botany", "Geology", "Ecology"], ans: 1 },
            { q: "What carries oxygen in the blood?", opt: ["White Blood Cells", "Red Blood Cells", "Plasma", "Platelets"], ans: 1 },
            { q: "At what temperature does water boil?", opt: ["90°C", "100°C", "110°C", "120°C"], ans: 1 }
        ],
        hard: [
            { q: "What is the most abundant gas in Earth's atmosphere?", opt: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], ans: 2 },
            { q: "What is the powerhouse of the cell?", opt: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"], ans: 2 },
            { q: "What is the chemical formula for salt?", opt: ["KCl", "NaCl", "CO2", "H2O"], ans: 1 },
            { q: "Who discovered Penicillin?", opt: ["Fleming", "Pasteur", "Curie", "Darwin"], ans: 0 },
            { q: "What is the speed of sound roughly?", opt: ["343 m/s", "100 m/s", "1000 m/s", "300,000 km/s"], ans: 0 }
        ]
    },
    history: {
        easy: [
            { q: "Who was the first President of the USA?", opt: ["Lincoln", "Washington", "Jefferson", "Adams"], ans: 1 },
            { q: "Where exist the Great Pyramids?", opt: ["India", "Egypt", "China", "Mexico"], ans: 1 },
            { q: "Who discovered America?", opt: ["Columbus", "Magellan", "Cook", "Vasco da Gama"], ans: 0 },
            { q: "Which country gifted the Statue of Liberty?", opt: ["UK", "France", "Spain", "Germany"], ans: 1 },
            { q: "In which year did WWII end?", opt: ["1940", "1942", "1945", "1950"], ans: 2 }
        ],
        medium: [
            { q: "Who was the 'Maid of Orleans'?", opt: ["Joan of Arc", "Queen Elizabeth", "Marie Curie", "Cleopatra"], ans: 0 },
            { q: "When did the Berlin Wall fall?", opt: ["1987", "1989", "1991", "1993"], ans: 1 },
            { q: "Who was the first man in space?", opt: ["Armstrong", "Gagarin", "Aldrin", "Collins"], ans: 1 },
            { q: "Which empire built Machu Picchu?", opt: ["Aztec", "Maya", "Inca", "Olmec"], ans: 2 },
            { q: "Who wrote the Declaration of Independence?", opt: ["Washington", "Jefferson", "Franklin", "Hamilton"], ans: 1 }
        ],
        hard: [
            { q: "Who was the last Tsar of Russia?", opt: ["Peter I", "Nicholas II", "Alexander III", "Ivan IV"], ans: 1 },
            { q: "Which war was fought between the North and South USA?", opt: ["Revolutionary War", "Civil War", "WWI", "War of 1812"], ans: 1 },
            { q: "In what year was the Magna Carta signed?", opt: ["1066", "1215", "1492", "1776"], ans: 1 },
            { q: "Who was the first female Prime Minister of the UK?", opt: ["Thatcher", "May", "Truss", "Gandhi"], ans: 0 },
            { q: "The 'Rough Riders' were associated with which President?", opt: ["Roosevelt", "Taft", "Wilson", "McKinley"], ans: 0 }
        ]
    },
    technology: {
        easy: [
            { q: "What does CPU stand for?", opt: ["Central Processing Unit", "Central Power Unit", "Computer Power Unit", "Central Process Utility"], ans: 0 },
            { q: "Which company makes the iPhone?", opt: ["Samsung", "Google", "Microsoft", "Apple"], ans: 3 },
            { q: "what does 'www' stand for?", opt: ["World Web Wide", "World Wide Web", "Wide World Web", "Web World Wide"], ans: 1 },
            { q: "Which device is used to type?", opt: ["Mouse", "Monitor", "Keyboard", "Printer"], ans: 2 },
            { q: "What does RAM stand for?", opt: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Real Access Memory"], ans: 1 }
        ],
        medium: [
            { q: "What is the main software of a computer?", opt: ["Application", "Operating System", "Browser", "Game"], ans: 1 },
            { q: "Who founded Microsoft?", opt: ["Jobs", "Gates", "Zuckerberg", "Musk"], ans: 1 },
            { q: "What does HTML stand for?", opt: ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Language", "HighText Markup Language"], ans: 0 },
            { q: "Which language is used for Android apps?", opt: ["Swift", "Java/Kotlin", "C#", "PHP"], ans: 1 },
            { q: "What does 'USB' stand for?", opt: ["Universal Serial Bus", "United Serial Bus", "Universal System Bus", "Ultra Serial Bus"], ans: 0 }
        ],
        hard: [
            { q: "Who is known as the father of the computer?", opt: ["Turing", "Babbage", "Lovelace", "Von Neumann"], ans: 1 },
            { q: "What year was the first iPhone released?", opt: ["2005", "2007", "2009", "2010"], ans: 1 },
            { q: "What does 'HTTP' stand for?", opt: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transmission Protocol", "HyperText Transfer Package"], ans: 0 },
            { q: "Which is a NoSQL database?", opt: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], ans: 2 },
            { q: "What does the 'G' in 5G stand for?", opt: ["Generation", "Gigabyte", "Global", "Ground"], ans: 0 }
        ]
    }
};


// --- 2. State Management ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = []; // { qIndex, selectedIndex, timeTaken, correct }
let timerInterval;
let timeLeft;
const TIME_PER_QUESTION = 15; // seconds

// --- 3. DOM Elements ---
const sections = {
    landing: document.getElementById('landing-section'),
    quiz: document.getElementById('quiz-section'),
    result: document.getElementById('result-section')
};

const ui = {
    category: document.getElementById('category'),
    difficultyBtn: document.getElementsByName('difficulty'),
    form: document.getElementById('quiz-setup-form'),
    
    // Quiz UI
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    timerDisplay: document.getElementById('timer'),
    nextBtn: document.getElementById('next-btn'),
    questionCount: document.getElementById('question-count'),
    progressFill: document.getElementById('progress-fill'),
    
    // Result UI
    finalScore: document.getElementById('final-score'),
    correctCount: document.getElementById('correct-count'),
    wrongCount: document.getElementById('wrong-count'),
    avgTime: document.getElementById('avg-time'),
    chartCanvas: document.getElementById('performanceChart'),
    restartBtn: document.getElementById('restart-btn')
};

// --- 4. Event Listeners ---
ui.form.addEventListener('submit', (e) => {
    e.preventDefault();
    startQuiz();
});

ui.nextBtn.addEventListener('click', () => {
    submitAnswer();
});

ui.restartBtn.addEventListener('click', () => {
    switchSection('landing');
});

// --- 5. Functions ---

function switchSection(id) {
    Object.values(sections).forEach(sec => {
        sec.classList.add('hidden-section');
        sec.classList.remove('active-section');
    });
    sections[id].classList.remove('hidden-section');
    sections[id].classList.add('active-section');
}

function getSelectedDifficulty() {
    for (const radio of ui.difficultyBtn) {
        if (radio.checked) return radio.value;
    }
    return 'easy';
}

function startQuiz() {
    const category = ui.category.value;
    const difficulty = getSelectedDifficulty();
    
    // Load questions
    currentQuestions = quizData[category][difficulty] || quizData['general']['easy'];
    currentQuestionIndex = 0;
    userAnswers = [];
    
    switchSection('quiz');
    loadQuestion(0);
}

function loadQuestion(index) {
    if (index >= currentQuestions.length) {
        endQuiz();
        return;
    }

    const q = currentQuestions[index];
    
    // Update UI
    ui.questionText.textContent = `${index + 1}. ${q.q}`;
    ui.questionCount.textContent = `Question ${index + 1}/${currentQuestions.length}`;
    const progress = ((index) / currentQuestions.length) * 100;
    ui.progressFill.style.width = `${progress}%`;
    ui.nextBtn.disabled = true;

    // Reset Timer
    clearInterval(timerInterval);
    timeLeft = TIME_PER_QUESTION;
    ui.timerDisplay.textContent = timeLeft;
    startTimer();

    // Render Options
    ui.optionsContainer.innerHTML = '';
    q.opt.forEach((optText, i) => {
        const btn = document.createElement('div');
        btn.className = 'option-card';
        btn.innerHTML = `<span class="opt-prefix">${i+1}</span> ${optText}`;
        btn.onclick = () => selectOption(i, btn);
        ui.optionsContainer.appendChild(btn);
    });
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        ui.timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // Auto submit with no selection (-1)
            recordAnswer(-1);
            nextQuestion();
        }
    }, 1000);
}

function selectOption(index, element) {
    // Visual selection
    const allOpts = document.querySelectorAll('.option-card');
    allOpts.forEach(o => o.classList.remove('selected'));
    element.classList.add('selected');
    
    // Enable Next
    ui.nextBtn.disabled = false;
    
    // Store temporarily
    ui.nextBtn.dataset.selected = index;
}

function submitAnswer() {
    const selected = parseInt(ui.nextBtn.dataset.selected);
    recordAnswer(selected);
    nextQuestion();
}

function recordAnswer(selectedIndex) {
    clearInterval(timerInterval);
    const q = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === q.ans;
    const timeSpent = TIME_PER_QUESTION - timeLeft;
    
    userAnswers.push({
        qIndex: currentQuestionIndex,
        selected: selectedIndex,
        correct: isCorrect,
        time: timeSpent
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
}

function endQuiz() {
    switchSection('result');
    calculateResults();
}

function calculateResults() {
    const total = currentQuestions.length;
    const correct = userAnswers.filter(a => a.correct).length;
    const wrong = total - correct;
    const totalTime = userAnswers.reduce((acc, curr) => acc + curr.time, 0);
    const avg = (totalTime / total).toFixed(1);

    // Update Text Stats
    ui.finalScore.textContent = `${correct}/${total}`;
    ui.correctCount.textContent = correct;
    ui.wrongCount.textContent = wrong;
    ui.avgTime.textContent = `${avg}s`;

    renderChart(correct, wrong);
}

let perfChart = null;
function renderChart(correct, wrong) {
    if (perfChart) perfChart.destroy();
    
    const ctx = ui.chartCanvas.getContext('2d');
    perfChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Wrong'],
            datasets: [{
                data: [correct, wrong],
                backgroundColor: ['#48bb78', '#f56565'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#ffffff' }
                }
            }
        }
    });
}
