const questionList = document.querySelector(".questions-list");

const toggleActive = (e) => {
  const target = e.target.closest(".btn");

  if (!target) return null;

  const currentQuestion = target.closest(".question");

  const allQuestions = document.querySelectorAll(".question");

  allQuestions.forEach((q) => {
    if (q !== target) {
      const otherButton = q.querySelector(".question__title");
      const otherContent = q.querySelector(".question__content");

      otherButton.classList.remove("question__title--active");
      otherContent.classList.remove("question__content--active");
    }
  });

  const questionContent = currentQuestion.querySelector(".question__content");

  target.classList.toggle("question__title--active");
  questionContent.classList.toggle("question__content--active");
};

questionList.addEventListener("click", toggleActive);
