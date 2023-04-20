async function LikesAdd(id) {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NWwzQT0VkGigblfrrx7p/likes/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const data = await res.text();
  return data;
}
module.exports = LikesAdd;