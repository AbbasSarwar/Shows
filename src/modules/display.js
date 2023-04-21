import { popup } from './displaypopup.js';
import getLikes from './getLikes.js';
import LikesAdd from './likeCounts.js';

async function retrevingdata() {
  const results = [];
  for (let i = 1; i < 9; i += 1) {
    results.push(fetch(`https://api.tvmaze.com/shows/${i}`).then((res) => res.json()));
  }
  const dt = Promise.all(results);
  return dt;
}

const cardscounter = () => {
  const cardlen = document.querySelector('#cardlen');
  const cards = document.querySelectorAll('.cards .card');
  cardlen.innerHTML = `Show(${cards.length})`;
};

const display = async () => {
  const datas = await retrevingdata();
  const container = document.querySelector('.cards');
  datas.forEach((cur) => {
    container.innerHTML += `
  <div id=${cur.id} class="card">
  <img src="${cur.image.medium}" alt="">
  <div class="add-container">
  <div class="likes"><h4>${cur.name}</h4></div>
  <div class="Likes-container">
  <div class="Like-icon">
      <span><i class="fa-regular fa-heart like-btn" data-id="${cur.id}"></i></span>
  </div>
  <div class="Likes-Span">
      <span data-item-id="${cur.id}" class="add"></span>
      <span class="Last-like">Likes</span>
  </div>
  </div>
  <button class="comment-btn">Comments</button>
</div>
  `;
    getLikes();
    const likeBtn = document.querySelectorAll('.like-btn');
    likeBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const val = Number(e.target.dataset.id);
        LikesAdd(val);
      });
    });
  });
  cardscounter();
  popup();
};

display();

export default retrevingdata;