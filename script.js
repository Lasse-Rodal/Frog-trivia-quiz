const quizData = [
    {
      question: "What is the primary color of most frogs?",
      options: ["Red", "Blue", "Green", "Yellow"],
      answer: "Green",
    },
    {
      question: "Which of the following is a common frog species?",
      options: ["Bullfrog", "Crocodile", "Turtle", "Lizard"],
      answer: "Bullfrog",
    },
    {
      question: "Where do most frogs live?",
      options: ["Desert", "Mountains", "Water", "Sky"],
      answer: "Water",
    },
    {
      question: "Which frog is famous for its ability to change color?",
      options: ["Leopard Frog", "Chameleon Frog", "Tree Frog", "Poison Dart Frog"],
      answer: "Chameleon Frog",
    },
    {
      question: "What sound do frogs typically make?",
      options: ["Roar", "Chirp", "Croak", "Growl"],
      answer: "Croak",
    },
    {
      question: "What is the process called when frogs change from tadpoles to adult frogs?",
      options: ["Cocooning", "Metamorphosis", "Hibernation", "Pollination"],
      answer: "Metamorphosis",
    },
    {
      question: "Which type of frog is known for being toxic and brightly colored?",
      options: ["Bullfrog", "Poison Dart Frog", "Leopard Frog", "Tree Frog"],
      answer: "Poison Dart Frog",
    },
    {
      question: "What is the largest species of frog?",
      options: ["Goliath Frog", "American Bullfrog", "African Tree Frog", "Leopard Frog"],
      answer: "Goliath Frog",
    },
    {
      question: "How do most frogs absorb water?",
      options: ["Through their mouths", "Through their skin", "Through their lungs", "Through their eyes"],
      answer: "Through their skin",
    },
    {
      question: "Which frog is capable of surviving in freezing temperatures?",
      options: ["Wood Frog", "Pacific Tree Frog", "Common Frog", "Red-eyed Tree Frog"],
      answer: "Wood Frog",
    }
  ];
  
  const questionElement = document.querySelector(".question");
  const optionsElement = document.querySelector(".options");
  const scoreElement = document.querySelector(".score");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
  }
  
  function loadOptions() {
    const question = quizData[currentQuestion];
    optionsElement.innerHTML = "";
  
    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-button");
  
      button.addEventListener("click", () => {
        checkAnswer(option);
        const buttons = document.querySelectorAll(".option-button");
        buttons.forEach((button) => button.disabled = true);
      });
  
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestion].answer;
    const buttons = document.querySelectorAll(".option-button");
  
    buttons.forEach(button => {
      if (button.textContent === selectedOption) {
        if (selectedOption === correctAnswer) {
          button.style.backgroundColor = "green";
          score++;
        } else {
          button.style.backgroundColor = "red";
        }
        button.disabled = true;
      }
    });
  
    scoreElement.textContent = `${score}/${quizData.length} points`;
  
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion >= quizData.length) {
        endQuiz();
      } else {
        loadQuestion();
        loadOptions();
      }
    }, 1000);
  }
  
  function endQuiz() {
    const container = document.querySelector(".container");
    container.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score}/${quizData.length}</p>
    `;
  
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.addEventListener("click", restartQuiz);
    container.appendChild(restartButton);
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.location.reload();
  }
  
  loadQuestion();
  loadOptions();
  