import API from './api.js';
import UI from './ui.js';

const api = new API();
const ui = new UI();

document.addEventListener('DOMContentLoaded', async () => {
  ui.renderLoader();

  await api.getPopular();

  ui.renderCards(api.songs);
});

ui.form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = event.target.searchInput.value;
  if (!query.trim()) return alert('Lütfen aratılacak kelimeyi giriniz.');

  ui.renderLoader();

  ui.changeTitle(query + ' İçin Sonuçlar');

  await api.searchMusic(query);
  ui.renderCards(api.songs);
});

ui.list.addEventListener('click', (e) => {
  if (e.target.id === 'play-btn') {
    const song = e.target.closest('.card').dataset;
    ui.renderPlayingInfo(song);
  }
});
const mode = localStorage.getItem('mode');
('true');

document.body.className = mode === 'true' ? 'dark' : 'light';

ui.checkbox.checked = mode === 'true';

ui.checkbox.addEventListener('change', (e) => {

  const isDarkMode = e.target.checked;

  localStorage.setItem('mode', isDarkMode);

  document.body.className = isDarkMode ? 'dark' : 'light';
});