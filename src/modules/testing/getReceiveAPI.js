const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NWwzQT0VkGigblfrrx7p/likes');
  const data = await response.json();
  return data;
};
module.exports = getLikes;