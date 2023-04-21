import getLikes from './getLikes.js';

async function LikesAdd(id) {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fy6DJ86u1eQhR7jHzpFg/likes/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  getLikes();
}

export default LikesAdd;