const getLikes = async () => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NWwzQT0VkGigblfrrx7p/likes')
    .then((res) => res.json())
    .then((data) => data);
};
module.exports = getLikes;