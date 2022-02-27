function answer() {
  const rightAnswers = document.querySelectorAll('[right-answer__btn]');
  const wrongAnswers = document.querySelector('[wrong-answer__btn]');

  rightAnswers.forEach(answer => {
    answer.addEventListener('click', () => {
      rightAnswers.classList.add('answer__btn--right');
    });
  });

  wrongAnswers.forEach(answer => {
    answer.addEventListener('click', () => {
      wrongAnswers.classList.add('answer__btn--wrong');
    });
  });
}

export { answer };
