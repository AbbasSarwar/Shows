const testcommentcounter = require('./commentcounter.js');

describe('comments tests', () => {
  test('Testing existing functionality', () => {
    expect(testcommentcounter()).toEqual(1);
  });
  test('Add a comment', () => {
    expect(testcommentcounter({ item_id: 2, username: 'Mike', comment: 'Nice season' })).toEqual(2);
  });
});