// Making a big array that includes all of the questions for the quiz.
const quizQuestions = [
    {
        question: "Who is the creator of One Piece?",
        choices: ["Masashi Kishimoto", "Eiichiro Oda", "Akira Toriyama", "Tite Kubo"],
        answer: "Eiichiro Oda"
    },
    {
        question: "Who is the main protagonist of One Piece?",
        choices: ["Roronoa Zoro", "Trafalgar Law", "Monkey D. Luffy", "Sanji"],
        answer: "Monkey D. Luffy"
    },
    {
        question: "What is the ultimate goal of Monkey D. Luffy?",
        choices: [
            "To become a marine admiral",
            "To find the 'One Piece' and become King of the Pirates",
            "To defeat the World Government",
            "To collect all Devil Fruits"
        ],
        answer: "To find the 'One Piece' and become King of the Pirates"
    },
    {
        question: "What is the name of Luffy’s crew?",
        choices: ["Blackbeard Pirates", "Red Hair Pirates", "Straw Hat Pirates", "Heart Pirates"],
        answer: "Straw Hat Pirates"
    },
    {
        question: "By August 2022, approximately how many copies of One Piece had been circulated worldwide?",
        choices: ["100 million", "250 million", "516.6 million", "1 billion"],
        answer: "516.6 million"
    },
    {
        question: "Which of the following aspects has One Piece been praised for?",
        choices: ["Storytelling", "Art and characterization", "Humor", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "One Piece holds a Guinness World Record for:",
        choices: [
            "Most animated episodes ever",
            "Longest manga series",
            "Most copies published for the same comic book series by a single author",
            "Highest-grossing anime movie"
        ],
        answer: "Most copies published for the same comic book series by a single author"
    },
    {
        question: "How many consecutive years was One Piece the best-selling manga?",
        choices: ["5 years", "8 years", "11 years", "15 years"],
        answer: "11 years"
    },
    {
        question: "What notable record does One Piece hold regarding its tankōbon volumes?",
        choices: [
            "Every volume has sold over 1 million copies",
            "Only the first 50 volumes sold over 1 million copies",
            "No volume sold over 1 million copies",
            "Every volume has sold over 500,000 copies"
        ],
        answer: "Every volume has sold over 1 million copies"
    },
    {
        question: "Since 2008, One Piece has consistently:",
        choices: [
            "Won the Anime of the Year award",
            "Ranked first in Oricon’s weekly comic chart",
            "Released a new movie every year",
            "Sold less than 1 million copies per volume"
        ],
        answer: "Ranked first in Oricon’s weekly comic chart"
    }
];

// The default current question index is 0.
let currentQuestionIndex = 0;

// The score at the beginning of the game is 0.
let score = 0;

function displayQuestions() {
    // Selecting the quiz class from quiz.html page.
    const quizClass = document.getElementById("quiz");

    // Checking if the quiz element exists.
    if (quizClass) {
        // For each of the quiz questions, get the text content and display it on the webpage.
        quizClass.innerHTML = "";

        const q = quizQuestions[currentQuestionIndex];

        // Creating an element for the questions.
        const questionElement = document.createElement("h3");

        // The text content is the index and the question formatted.
        questionElement.textContent = q.question;

        // Create a container for all the choices
        const choicesContainer = document.createElement("div");
        
        // Create each choice as a separate element on its own line.
        q.choices.forEach((choice) => {
            // Creating an element for the choices.
            const choiceElement = document.createElement("button");

            // The text content of each choice with the corresponding letter. 
            choiceElement.textContent = `${choice}`;

            // Styling the margin. 
            choiceElement.style.margin = "10px 0";

            // Adding click event to each choice button
            choiceElement.onclick = () => {
                // If the choice that the user made is equal to the answer.
                if (choice === q.answer) {
                    // Increase the user's score. 
                    score++;

                    // When the user gets the answer correct, the confetti will go off.
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ['#88c3f3', '#dbeeff', '#c1e2ff', '#6ba8e0']
                    });

                    // Make a custom popup using the Sweet Alert 2 library that helps with making custom popups.
                    Swal.fire({ // The popup if the user gets the answer correct. 
                        title: 'Correct! 🎉',
                        text: 'Great job! You got it right!',
                        icon: 'success',
                        confirmButtonText: 'Next Question',
                        confirmButtonColor: '#88c3f3',
                        background: '#dbeeff',
                        color: '#88c3f3',

                        // Fixed the issue of page scrolling up when the popup shows up.
                        scrollbarPadding: false,
                        heightAuto: false,

                        // Creating a custom class for the styling.
                        customClass: {
                            popup: 'montserrat-popup',
                            title: 'montserrat-title',
                            content: 'montserrat-content',
                            confirmButton: 'montserrat-button'
                        } // End of the custom class.

                    }).then(() => {
                        // Increasing the question index so it moves onto the next question.
                        currentQuestionIndex++;

                        // If the current question index is less than the array length, display a new question.
                        if (currentQuestionIndex < quizQuestions.length) {
                            // Calling the function that displays the question. 
                            displayQuestions();
                        } else {
                            // If the game is over, show the final score. 
                            showFinalScore();
                        } // End of if-else statement. 
                    });

                } else {
                    Swal.fire({
                        // Making the popup that will display if the answer is incorrect, it was made using the Sweet Alerts 2 library.
                        title: 'Incorrect! ❌',
                        text: `The correct answer is: ${q.answer}`,
                        icon: 'error',
                        confirmButtonText: 'Next Question',
                        confirmButtonColor: '#88c3f3',
                        background: '#dbeeff',
                        color: '#88c3f3',

                        // Fixed the issue of page scrolling up when the popup shows up.
                        scrollbarPadding: false,
                        heightAuto: false,

                        // Creating a custom class for the styling.
                        customClass: {
                            popup: 'montserrat-popup',
                            title: 'montserrat-title',
                            content: 'montserrat-content',
                            confirmButton: 'montserrat-button'
                        } // End of the custom class.

                    }).then(() => {
                        // Increasing the question index so it moves onto the next question.
                        currentQuestionIndex++;

                        // If the current question index is less than the array length, display a new question.
                        if (currentQuestionIndex < quizQuestions.length) {
                            // Calling the function that displays the question. 
                            displayQuestions();

                        } else {
                            // If the game is over, show the final score. 
                            showFinalScore();
                        } // End of if-else statement. 
                    });
                } // End of if-else statement. 
            };

            // Adding the element to the container. 
            choicesContainer.appendChild(choiceElement);

            // Defining a class name for the choice container. 
            choicesContainer.className = "choice-buttons";
        });

        // Changing the font-size of the questions.
        questionElement.style.fontSize = "25px";

        choicesContainer.style.fontSize = "25px"

        // Adding the text content onto the document dynamically.
        quizClass.appendChild(questionElement);

        // Adding the choices onto the container. 
        quizClass.appendChild(choicesContainer);

        // Styling it so the questions are aligned to the left. 
        questionElement.style.textAlign = "left";
    } // End of if statement.
} // End of displayQuestion() function.

// Function to show the final score using SweetAlert2.
function showFinalScore() {
    // Calculating the percentage that is rounded.
    const percentage = Math.round((score / quizQuestions.length) * 100);

    // Defining variables that will be used in the conditional statements.
    let title; // Title
    let icon; // Icon
    let message; // Message

    // The user got more than an 80%, they are considered an expert.
    if (percentage >= 80) {
        title = 'Excellent! 🏴‍☠️';
        icon = 'success';

        // When the user has good performance, the confetti will go off.
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#88c3f3', '#dbeeff', '#c1e2ff', '#6ba8e0', '#FFD700', '#FFA500']
        });

        // Additional confetti bursts due to their good performance (setting the time too with help of chatgpt and google.)
        setTimeout(() => {
            confetti({
                particleCount: 150,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#88c3f3', '#dbeeff', '#c1e2ff', '#6ba8e0']
            });
        }, 300);

        // Additional confetti bursts due to their good performance (setting the time too with help of chatgpt and google.)
        setTimeout(() => {
            confetti({
                particleCount: 150,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#88c3f3', '#dbeeff', '#c1e2ff', '#6ba8e0']
            });
        }, 600);

        // Letting the user know their score out of the amount of questions in the game (10) and their percentage.
        message = `You're a true One Piece expert! You scored ${score}/${quizQuestions.length} (${percentage}%). You're ready to sail the Grand Line!`;

    // The user got more than an 60%, they are considered someone who knows the basics.
    } else if (percentage >= 60) {
        title = 'Good Job! ⚓';
        icon = 'success';

        // Trigger moderate confetti for good performance
        confetti({
            particleCount: 75,
            spread: 50,
            origin: { y: 0.7 },
            colors: ['#88c3f3', '#dbeeff', '#c1e2ff']
        });

        // Letting the user know their score out of the amount of questions in the game (10) and their percentage.
        message = `Not bad! You scored ${score}/${quizQuestions.length} (${percentage}%). You know your One Piece basics!`;

    // The user got less than a 50%, they should keep learning about one piece (or learn to read the article..)
    } else {
        title = 'Keep Learning! 🌊';
        icon = 'info';

        // Letting the user know their score out of the amount of questions in the game (10) and their percentage.
        message = `You scored ${score}/${quizQuestions.length} (${percentage}%). Time to rewatch some One Piece episodes!`;
    } // End of if-then-else statement.

    // Formatting the end screen of the quiz/game.
    Swal.fire({
        title: title,
        text: message,
        icon: icon,

        // Giving the user the option to restart the game.
        confirmButtonText: 'Restart Quiz',

        // Giving the user the option to go back to the home page.
        cancelButtonText: 'Back to Home',
        showCancelButton: true,
        confirmButtonColor: '#88c3f3',
        cancelButtonColor: '#6ba8e0',
        background: '#dbeeff',
        color: '#88c3f3',

        // Fixed the issue of page scrolling up when the popup shows up.
        scrollbarPadding: false,
        heightAuto: false,

        // Creating a custom class for the styling.
        customClass: {
            popup: 'montserrat-popup',
            title: 'montserrat-title',
            content: 'montserrat-content',
            confirmButton: 'montserrat-button',
            cancelButton: 'montserrat-button'
        } // End of custom class. 
    
    }).then((result) => {
        // If the user decides to restart the quiz, the score and current question will be set back to 0.
        if (result.isConfirmed) {
            // Restarting the quiz.
            currentQuestionIndex = 0; // Resetting the current question index. 
            score = 0; // Resetting the score.
            
            // Displaying the questions again.
            displayQuestions();

        } else {
            // Going back to home page
            window.location.href = 'index.html';
        } // End of if-else statement. 
    });
} // End of showFinalScore() function.