let timeControl = document.querySelector(".time-control");
let question = document.querySelector(".question-title");
let answers = Array.from(document.querySelectorAll(".answer"));
let startBtn = document.querySelector(".start-btn");
let nextQuestionBtn = document.querySelector(".next-question");
let lastQuestionBtn = document.querySelector(".last-question");
let submitBtn = document.querySelector(".submit");
let examPage = document.querySelector(".exam");
let resultPage = document.querySelector(".exam-result");

let selectedAnswers = [];
let currentQuestionIndex = 0;
let quizStarted = false;
let countdownInterval;

let questionsAndAnswers = [
  {
    question: " 1- المقاومه الكليه للدائره I هي R1  و المقاومه الكليه للدائره II هي R2  فإن R1 / R2 تكون",
    options: [
      "3/8",
      "1/2",
      "2/3",
      "3/4",
    ],
    correctAnswer: "3/8",
    photoUrl: "./image/8.png",
  },
  {
    question: " 2- الشكل المقابل يمثل جزء من دائره فإن النسبه بين القدره المستنفذه في المقاومه (X)  الي القدره المستنفذه في المقاومه (Y) يكون   (Pw)x (Pw) / y  ",
    options: [
      "1/3",
      "3/1",
      "1/2",
      "2/1",
    ],
    correctAnswer: "1/3",
    photoUrl: "./image/10.png",
  },
  {
    question: " 3- في الدائرة الكهربية المقابلة إذا كانت قراءة الفولتميتر والمفتاح K مفتوح هي 36V  وقراءته وهو مغلق 24V  فإن قيمة ق.د.ك للبطارية  VB = ",
    options: [
      "36v",
      "24v",
      "12v",
      "60v",
    ],
    correctAnswer: "36v",
    photoUrl: "./image/14.jpg",
  },
  {
    question: "4- في الدائرة المقابلة إذا كانت قراءة الفولتميتر وزالق الريوستات عند النقطة (A) يساوي 12v وقراءته عند تحريك الزالق إىل النقطة (B) تصبح 3v تكون قيمة المقاومة المأخوذة من الريوستات تساوي ",
    options: [
      "25 Ω",
      "30 Ω",
      "15 Ω",
      "20 Ω",
    ],
    correctAnswer: "15Ω",
    photoUrl: "./image/31.jpg",
  },
  {
    question: "6- في دائرة الكهربية الموضحة بالشكل عند غلق المفتاح S فان قراءة االجهزة االميتر A و الفولتميتر V سيحدث لها ",
    options: [
      "قراءة A تزداد و قراءة V تزداد ",
      "قراءة A تقل و قراءة V تقل ",
      "قراءة A تزداد و قراءة V تقل ",
      "قراءة A تقل و قراءة V تزداد ",
    ],
    correctAnswer: "قراءة A تزداد و قراءة V تقل ",
    photoUrl: "./image/32.jpg",
  },
  {
    question: "7- الشكل الذي امامك جزء من دائرة كهربية مغلقة فان المقاومة الكهربية R تساوي ",
    options: [
      "4 Ω",
      "2 Ω",
      "6 Ω",
      "3 Ω",
    ],
    correctAnswer: "4 Ω",
    photoUrl: "./image/25.jpg",
  },
  {
    question: "8- الشكل المقابل يوضح مقدار و اتجاه ثالثة تيارات تمر بالنقطة X , ما مقدار و اتجاه التيار الفعلي المار في السلك XY ؟ ",
    options: [
      " 1A من X الي Y",
      "A من Y الي X",
      "A من X الي Y",
      "A من Y الي X",
    ],
    correctAnswer: " 1A من X الي Y",
    photoUrl: "./image/38.jpg",
  },
  {
    question: "9- في الدائرة المقابلة : تكون شدة التيار I1 هي ",
    options: [
      "3.5A",
      "1A",
      "2A",
      "-3.5A",
    ],
    correctAnswer: "-3.5A",
    photoUrl: "./image/37.jpg",
  },
  {
    question: " 10- في الشكل المقابل مکعب طول ضلعه 3m يؤثر عليه مجال مغناطيسى كثافة فيضه 0.5 T في االتجاه المبين في الشكل يكون الفيض المغناطيسي المؤثر عىل الوجه (X) ",
    options: [
      "9 Wb",
      "4.5 Wb",
      "1.5 Wb",
      "صفر",
    ],
    correctAnswer: "صفر",
    photoUrl: "./image/36.jpg",
  },
  {
    question: " 11- الش كل المقابل يبين العالقة البيانية بين الفيض المغناطيسي (m𝝋)  الذي يخترق الملف  والزاوية (θ) التي يدور بها الملف طبقًا للبيانات  عىل الرسم فإن 1𝒎𝝋 / 𝝋𝒎2 = �",
    options: [
      "1/3",
      "3/1",
      "1/2",
      "2/1",
    ],
    correctAnswer: "2/1",
    photoUrl: "./image/43.jpg",
  },
  // Add more questions as needed
];

nextQuestionBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questionsAndAnswers.length) {
    displayQuestion();
  } else {
    nextQuestionBtn.style.display = "none";
    submitBtn.style.display = "block";
  }
});

lastQuestionBtn.addEventListener("click", () => {
  currentQuestionIndex--;

  if (currentQuestionIndex >= 0) {
    displayQuestion();
  } else {
  }
});

function displayQuestion() {
  const currentQuestion = questionsAndAnswers[currentQuestionIndex];
  question.innerHTML = currentQuestion.question;

  if (currentQuestion.photoUrl) {
    const photoContainer = document.querySelector(".images");
    const imageElement = document.createElement("img");
    imageElement.src = currentQuestion.photoUrl;
    imageElement.alt = "Question Photo";
    photoContainer.innerHTML = ""; 
    photoContainer.appendChild(imageElement);
  }
  resetAnswerStyles();

  // إظهار زر "التالي" بشكل صريح
  nextQuestionBtn.style.display = "block";

  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = currentQuestion.options[i];

    answers[i].addEventListener("click", function () {
      selectedAnswers[currentQuestionIndex] = {
        answer: currentQuestion.options[i],
        index: i,
      };
      resetAnswerStyles();
      this.classList.add("choosed");
    });

    if (
      selectedAnswers[currentQuestionIndex] &&
      selectedAnswers[currentQuestionIndex].answer ===
        currentQuestion.options[i]
    ) {
      answers[i].classList.add("choosed");
    }
  }
}


submitBtn.addEventListener("click", () => {
  clearInterval(countdownInterval);
  examPage.style.display = "none";
  resultPage.style.display = "block";
  submitBtn.clicked = true; 
  showResult();
});

function startQuiz() {
  displayQuestion();

  const countdownDuration = 10; // تعيين مدة العد التنازلي بالدقائق
  const endTime = new Date().getTime() + countdownDuration * 60 * 1000;
  countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const ending = endTime - now;

    const minutes = Math.floor((ending % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ending % (1000 * 60)) / 1000);

    document.querySelector(".time").innerHTML = `${minutes}m ${seconds}s`;
    if (ending < 0) {
      clearInterval(countdownInterval);
      document.querySelector(".time").innerHTML = "EXPIRED!";
      if (!submitBtn.clicked) {
        showResult();
        examPage.style.display = "none"; // إخفاء صفحة الامتحان
        resultPage.style.display = "block"; // إظهار صفحة النتيجة
      }
    }
  }, 1000);
}


window.onload = () => {
  if (!quizStarted) {
    quizStarted = true;
    startQuiz();
  }
};

function resetAnswerStyles() {
  answers.forEach((answer) => answer.classList.remove("choosed"));
}

function showResult() {
  const resultContainer = document.querySelector(".result");
  const degreeContainer = document.querySelector(".degree");
  resultContainer.innerHTML = "";
  let correctAnswersCount = 0;

  for (let i = 0; i < questionsAndAnswers.length; i++) {
    const currentQuestion = questionsAndAnswers[i];
    const resultElement = document.createElement("p");

    if (
      selectedAnswers[i] &&
      selectedAnswers[i].answer === currentQuestion.correctAnswer
    ) {
      resultElement.textContent = `Question ${i + 1}: Correct`;
      resultElement.classList.add("correct-answer");
      correctAnswersCount++;
    } else {
      resultElement.textContent = `Question ${i + 1}: Wrong`;
      resultElement.classList.add("wrong-answer");
    }
    resultContainer.appendChild(resultElement);
  }
  let studentDegree = document.createElement("span");
  studentDegree.classList.add("student-degree");
  studentDegree.innerHTML = `${correctAnswersCount} / `;

  let examDegree = document.createElement("span");
  examDegree.classList.add("exam-degree");
  examDegree.innerHTML = questionsAndAnswers.length;

  degreeContainer.appendChild(studentDegree);
  degreeContainer.appendChild(examDegree);
}
