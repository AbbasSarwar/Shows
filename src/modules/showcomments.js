import commentcounter from './commentscounter.js';

const showcomments = async (index2) => {
  const popupcontainer = document.querySelector('.popup-container');
  const form = document.querySelector('form');
  const showdiv = document.createElement('div');
  showdiv.className = 'show-comments';
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  const commentData = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Gv3n01pNZoeZ0ZE7nWSD/comments?item_id=${index2}`, {
    method: 'GET',
  });
  const data = await commentData.json();

  if (!commentData.ok) {
    h3.innerText = 'Comments (0)';
    showdiv.appendChild(h3);
    p.innerText = 'No comments available for now';
    h3.after(p);
    popupcontainer.insertBefore(showdiv, form);
    throw new Error(`No comments are present in ID: ${index2}`);
  }

  data.forEach((item) => {
    showdiv.innerHTML += `
    <p>${item.creation_date} ${item.username}: ${item.comment}</p> `;
  });

  popupcontainer.insertBefore(showdiv, form);
  commentcounter();
};

const getformvalue = (index) => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const inputvalue = document.querySelector('input').value;
    const textareavalue = document.querySelector('textarea').value;
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Gv3n01pNZoeZ0ZE7nWSD/comments', {
      method: 'POST',
      body: JSON.stringify({
        item_id: index,
        username: inputvalue,
        comment: textareavalue,
      }),
      headers: {
        'Content-Type': 'application/json; charset=Utf-8',
      },
    }).then((response) => {
      response.json();
    })
      // .then(() => setTimeout(window.location.reload(), 500));
      document.addEventListener('DOMContentLoaded',showcomments(index))

    form.reset();
  });
};

export { showcomments, getformvalue };