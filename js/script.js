const questions = [
    {
        question: "Que signifie l'acronyme 'WWW' ?",
        options: ["World Web Work", "World Wide Web", "Wide World Web", "Web World Wide"],
        correct: 1
    },
    {
        question: "Quel est le langage informatique principalement utilisé pour créer des pages web ?",
        options: ["Python", "HTML", "Java", "C++"],
        correct: 1
    },
    {
        question: "Quelle unité mesure la vitesse d’un processeur ?",
        options: ["Hertz (Hz)", "Byte (B)", "Watt (W)", "Pixel (P)"],
        correct: 0
    },
    {
        question: "Quel est le rôle principal d’un pare-feu (firewall) ?",
        options: ["Refroidir l’ordinateur", "Protéger contre les virus", "Contrôler les accès réseau", "Sauvegarder des fichiers"],
        correct: 2
    },
    {
        question: "Quel système d'exploitation est développé par Microsoft ?",
        options: ["macOS", "Linux", "Windows", "Android"],
        correct: 2
    },
    {
        question: "Quel périphérique est utilisé pour entrer des données dans un ordinateur ?",
        options: ["Écran", "Clavier", "Imprimante", "Haut-parleurs"],
        correct: 1
    },
    {
        question: "Que signifie 'CPU' ?",
        options: ["Central Program Unit", "Computer Personal Unit", "Central Processing Unit", "Core Programming Unit"],
        correct: 2
    },
    {
        question: "Lequel de ces logiciels est un navigateur web ?",
        options: ["Photoshop", "Google Chrome", "Excel", "PowerPoint"],
        correct: 1
    },
    {
        question: "Quel langage est principalement utilisé pour le développement d'applications Android ?",
        options: ["Swift", "C#", "Java", "PHP"],
        correct: 2
    },
    {
        question: "Quelle est la fonction principale de la RAM dans un ordinateur ?",
        options: ["Stocker définitivement des fichiers", "Gérer les impressions", "Stocker temporairement les données", "Refroidir le processeur"],
        correct: 2
    }
];

let currentQuestionIndex = 0; // Index de la question 
let score = 0; 


const quizContainer = document.getElementById("quiz-container"); // id quiz-container fy html 
const resultContainer = document.getElementById("result-container"); // id fy html oo variable ely fyh reponse shyyyha  
const resetBtn = document.getElementById("reset-btn"); // Bouton restart 


function loadQuestion(index) {
    const questionData = questions[index]; // Récupère les données mel tableau 
    quizContainer.innerHTML = ` <--! inner html thoteek te5dem html west js-->
        <h2>${questionData.question}</h2> <!-- Affiche la question -->
        ${questionData.options.map((option, i) => ` <!-- map tparcouri liste les options koll -->
            <button onclick="submitAnswer(${i})">${option}</button> <!-- Crée un bouton pour chaque option -->
        `).join("")} <!-- join("") permet de transformer les éléments en chaîne de texte sans séparateur -->
    `;
}


function submitAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex]; // Récupère la question actuelle
    const isCorrect = selectedIndex === questionData.correct; // Vérifier choix mta3eek shyh wle (=== comparer contenu oo type)

    if (isCorrect) { //if true 
        alert("Bonne r\u00e9ponse !"); 
        score++; 
    } else { 
        alert(`Mauvaise r\u00e9ponse ! La bonne r\u00e9ponse \u00e9tait : ${questionData.options[questionData.correct]}`); // Affiche la bonne réponse
    }

    currentQuestionIndex++; // incrementer compteur mta3 les question

    if (currentQuestionIndex < questions.length) { // ken mawsolneech lel question lo5rany 
        loadQuestion(currentQuestionIndex); //  jyb question ely mba3do 
    } else { 
        showFinalResults(); // Affiche les résultats finaux
    }
}

// resultat final
function showFinalResults() {
    quizContainer.innerHTML = `
        <h2>Quiz Termin\u00e9 !</h2> 
        <h2>Votre score : ${score} / ${questions.length}</h2> <!-- résultat  -->
    `;
    resetBtn.style.display = "inline-block"; //t7ot boutton restart visible 
}


resetBtn.addEventListener("click", () => { // ky taamel  click al boutton 0 
    currentQuestionIndex = 0; // compteur de question=0
    score = 0; //  score
    resetBtn.style.display = "none"; // bouton restart invisible
    loadQuestion(currentQuestionIndex); // affiche question loweel
});


loadQuestion(currentQuestionIndex); 
