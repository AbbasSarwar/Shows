import retrevingdata from './display.js';
import commentform from './commentform.js';
import { showcomments, getformvalue } from './showcomments.js';

const body = document.querySelector('body');
const header = document.querySelector('header');
const cardscontainer = document.querySelector('.cards-container');
const footer = document.querySelector('footer');
const addclasses = () => {
  header.classList.add('blur');
  cardscontainer.classList.add('blur');
  footer.classList.add('blur');
  body.style.overflow = 'hidden';
};

const removeclasses = () => {
  const crossbtn = document.querySelector('.cross-btn');
  crossbtn.addEventListener('click', () => {
    header.classList.remove('blur');
    cardscontainer.classList.remove('blur');
    footer.classList.remove('blur');
    body.lastElementChild.remove();
    body.style.overflow = 'auto';
  });
};
const displaypopup = async (index, index2) => {
  const array = await retrevingdata();
  const newarr = array[index];
  const div = document.createElement('div');
  div.className = 'popup-container';
  div.innerHTML = `
        <div class="image">
            <img src="${newarr.image.original}" alt="cardimg">
            <span class="cross-btn"><i class="fa-solid fa-x"></i></span>
        </div>
        <div class="heading">
            <h1>${newarr.name}</h1>
        </div>
        <div class="ratingbox">
            <h3>Rating: ${newarr.rating.average}</h3>
            <h3>Language: ${newarr.language}</h3>
        </div>
        <div class="genresbox">
            <h3>Genres: ${newarr.genres[0]},${newarr.genres[1]},${newarr.genres[2]}</h3>
            <h3>Premiered: ${newarr.premiered}</h3>
        </div>
        <form action="" method="submit">
        <div class="show-comments">
        </div>
        <form action="#" method="post">
            ${commentform()}
        </form>
        
    `;
  body.appendChild(div);
  getformvalue(index2);
  showcomments(index2);
  removeclasses();
};
const popup = () => {
  const commentbtn = document.querySelectorAll('.comment-btn');
  commentbtn.forEach((cmtbtn) => {
    cmtbtn.addEventListener('click', (btn) => {
      addclasses();
      const btnCall1 = btn.target.parentElement.parentElement.id - 1;
      const btnCall2 = btn.target.parentElement.parentElement.id;
      displaypopup(btnCall1, btnCall2);
    });
  });
};

export default popup;
