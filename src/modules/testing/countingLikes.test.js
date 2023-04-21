const LikesAdd = require('./countingLikes.js');
const getLikes = require('./getReceiveAPI.js');

describe('API', () => {
  test('Is it creating Data in API?', async () => {
    const data = await LikesAdd(1);
    expect(data).toBe('Created');
  });
  test('Counting: is it or not?', async () => {
    const data = await getLikes();
    const CurrentLikes = data[0].likes;
    await LikesAdd(1);
    const newLikes = await getLikes();
    expect(newLikes[0].likes).toBeGreaterThan(CurrentLikes);
  });
});