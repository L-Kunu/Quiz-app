function cards() {
  const quizCards = document.querySelectorAll('[data-js="card"]');

  quizCards.forEach(card => {
    const bookmark = card.querySelector('[data-js=bookmark]');
    const answerButton = card.querySelector('[answerButton]');
    const answerText = card.querySelector('[data-js=answerText]');
    const answerSpanHidden = card.querySelector('[data-js=answerSpanHidden]');
    const answerTitle = card.querySelector('[data-js=answer-title]');

    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('bookmarked');
    });

    answerButton.addEventListener('click', () => {
      answerText.classList.toggle('hidden');
    });
  });
}

const cardsContainer = document.querySelector('[data-js=cards]');
const form = document.querySelector('[data-js=form]');

let cards = [];

form.addEventListener('submit', event => {
  event.preventDefault();

  const questionElement = form.elements.question;
  const answerElement = form.elements.answer;
  const tagsElement = form.elements.tags;

  const newCard = {
    question: questionElement.value,
    answer: answerElement.value,
    tags: tagsElement.value
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length),
  };

  cards = [newCard, ...cards];
  renderCards();

  form.reset();
  questionElement.focus();
});

function renderCards() {
  cardsContainer.innerHTML = '';

  cards.forEach(card => {
    const cardElement = document.createElement('li');
    cardElement.className = 'card';
    cardElement.innerHTML = `
      <p>${card.question}</p>
      <p>${card.answer}</p>
      <ul role="list" class="card__tag-list">
        ${card.tags.map(tag => `<li class="card__tag">${tag}</li>`).join('')}
      </ul>
    `;
    cardsContainer.append(cardElement);
  });
}
export default cards;
