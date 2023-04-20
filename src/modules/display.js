import popup from './displaypopup.js';
import getLikes from './getLikes.js';
import LikesAdd from './likeCounts.js';

async function retrevingdata() {
  const results = [];
  for (let i = 1; i < 7; i += 1) {
    results.push(fetch(`https://api.tvmaze.com/shows/${i}`).then((res) => res.json()));
  }
  const dt = Promise.all(results);
  return dt;
}

const display = async () => {
  const datas = await retrevingdata();
  const container = document.querySelector('.cards');
  datas.forEach((cur) => {
    container.innerHTML += `
  <div id=${cur.id} class="card">
  <img src="${cur.image.medium}" alt="">
  <div class="likes"><h4>${cur.name}</h4> <span><i class="fa-regular fa-heart like-btn" data-id="${cur.id}"></i><br><span data-item-id="${cur.id}" class="add">Likes</span></span></div>
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
  popup();
};

display();

export default retrevingdata;