const getLikes = async () => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fy6DJ86u1eQhR7jHzpFg/likes')
    .then((res) => res.json())
    .then((data) => {
      const show = document.querySelectorAll('.add');
      show.forEach((cur) => {
        const id = Number(cur.getAttribute('data-item-id'));
        const matchingObject = data.find((obj) => obj.item_id === id);
        if (matchingObject) {
          cur.innerHTML = matchingObject.likes;
        } else {
          cur.innerHTML = '0';
        }
      });
    });
};
export default getLikes;