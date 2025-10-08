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

                    // Make a custom popup using the Sweet Alert 2 library that helps with making custom popups.
                    Swal.fire({ // The popup if the user gets the answer correct. 
                        title: 'Correct! 🎉',
                        text: 'Great job! You got it right!',
                        icon: 'success',
                        confirmButtonText: 'Next Question',
                        confirmButtonColor: '#88c3f3',
                        background: '#dbeeff',
                        color: '#88c3f3',

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
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let title, icon, message;

    if (percentage >= 80) {
        title = 'Excellent! 🏴‍☠️';
        icon = 'success';
        message = `You're a true One Piece expert! You scored ${score}/${quizQuestions.length} (${percentage}%). You're ready to sail the Grand Line!`;
    } else if (percentage >= 60) {
        title = 'Good Job! ⚓';
        icon = 'success';
        message = `Not bad! You scored ${score}/${quizQuestions.length} (${percentage}%). You know your One Piece basics!`;
    } else {
        title = 'Keep Learning! 🌊';
        icon = 'info';
        message = `You scored ${score}/${quizQuestions.length} (${percentage}%). Time to rewatch some One Piece episodes!`;
    }

    Swal.fire({
        title: title,
        text: message,
        icon: icon,
        confirmButtonText: 'Restart Quiz',
        cancelButtonText: 'Back to Home',
        showCancelButton: true,
        confirmButtonColor: '#88c3f3',
        cancelButtonColor: '#6ba8e0',
        background: '#dbeeff',
        color: '#88c3f3',
        customClass: {
            popup: 'montserrat-popup',
            title: 'montserrat-title',
            content: 'montserrat-content',
            confirmButton: 'montserrat-button',
            cancelButton: 'montserrat-button'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Restart the quiz
            currentQuestionIndex = 0;
            score = 0;
            displayQuestions();
        } else {
            // Go back to home page
            window.location.href = 'index.html';
        }
    });
}
