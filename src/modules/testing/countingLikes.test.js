// const { default: expect } = require('expect');
const LikesAdd = require('./countingLikes.js');

test('Is it creating Data in API?', async () => {
  const data = await LikesAdd(1);
  expect(data).toBe('Created');
});