const questions = [
  "あなたは犬が好きですか？",
  "毎日、運動することは大切だと思いますか？",
  "新しいことを学ぶのは好きですか？",
  "他人の意見に敏感ですか？",
  "友達と過ごす時間が大切だと思いますか？",
  "ストレスがたまると、どうしますか？",
  "他人の感情に共感することができますか？",
  "未来の計画を立てるのは得意ですか？",
  "冒険をすることは好きですか？",
  "芸術や創造的な活動が好きですか？",
  "人前で話すことは得意ですか？",
  "計画的に物事を進めることが好きですか？",
  "人間関係でトラブルがあると、どう対処しますか？",
  "ストレスの解消法として、音楽を聴くことはありますか？",
  "他人の期待に応えることが大切だと思いますか？",
  "新しい場所や環境に適応するのは得意ですか？",
  "夜型ですか、朝型ですか？",
  "他人と協力することが得意ですか？",
  "自分の意見をはっきりと述べる方ですか？",
  "孤独を感じることはありますか？"
];

let currentQuestion = 0;
let yesCount = 0;

function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  questionText.textContent = questions[currentQuestion];
}

function answerQuestion(answer) {
  if (answer === 'yes') {
    yesCount++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const quizContainer = document.querySelector(".quiz-container");
  const buttonContainer = document.getElementById("button-container");
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");

  quizContainer.removeChild(buttonContainer);
  resultText.textContent = `あなたの性格は${yesCount}点です！`; // 適当な結果表示

  resultContainer.style.display = "block";
}
showQuestion();
