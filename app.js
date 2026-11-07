const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const body = document.body;

function closeMenu() {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute('aria-expanded', 'false');
  mobileMenu.hidden = true;
  body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mobileMenu.hidden = open;
  body.classList.toggle('menu-open', !open);
});

mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const goalCopy = {
  'Get found locally': 'Build a search path that earns trust before the first click.',
  'Automate work': 'Remove one repetitive loop so your team can stay with the customer.',
  'Improve reliability': 'Make the digital layer dependable enough to stop thinking about it.',
  'Grow demand': 'Turn more of the attention you already have into a better conversation.'
};
const goalResult = document.querySelector('#goal-result-title');
const goalLink = document.querySelector('#goal-result-link');
const assessmentGoal = document.querySelector('#assessment-goal');

function chooseGoal(goal) {
  document.querySelectorAll('[data-goal-option]').forEach((button) => {
    const selected = button.dataset.goalOption === goal;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  if (goalResult) goalResult.textContent = goalCopy[goal] || goalCopy['Get found locally'];
  if (goalLink) goalLink.dataset.goal = goal;
  if (assessmentGoal) assessmentGoal.value = goal;
}

document.querySelectorAll('[data-goal-option]').forEach((button) => {
  button.setAttribute('aria-pressed', button.classList.contains('is-selected') ? 'true' : 'false');
  button.addEventListener('click', () => chooseGoal(button.dataset.goalOption));
});

document.querySelectorAll('[data-goal], [data-package]').forEach((link) => {
  link.addEventListener('click', () => {
    const value = link.dataset.goal || link.dataset.package;
    if (value && assessmentGoal) {
      const mapped = value === 'Visibility' ? 'Get found locally' : value === 'Automation' ? 'Automate work' : value === 'Growth operations' ? 'Grow demand' : value;
      assessmentGoal.value = mapped;
    }
  });
});

goalLink?.addEventListener('click', () => {
  const goal = goalLink.dataset.goal || 'Get found locally';
  if (assessmentGoal) assessmentGoal.value = goal;
});

const form = document.querySelector('#assessment-form');
const success = document.querySelector('#form-success');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const business = data.get('business');
  const goal = data.get('goal');
  const whatsapp = data.get('whatsapp');
  const message = `Hi BugData, I'd like to book an assessment. Name: ${name}. Business: ${business}. Goal: ${goal}. My WhatsApp: ${whatsapp}.`;
  if (success) success.hidden = false;
  window.open(`https://wa.me/263782067259?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

document.querySelector('#year').textContent = String(new Date().getFullYear());
