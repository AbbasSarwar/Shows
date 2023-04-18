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
  <div class="likes"><h4>${cur.name}</h4> <span><span><i class="fa-regular fa-heart"></i></span><br>Likes</span></div>
  <button>Comments</button>
  <button>Reservations</button>
</div>
  `;
  });
};
display();
export default retrevingdata;