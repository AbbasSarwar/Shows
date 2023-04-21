const testcommentcounter = (comment) => {
  const arr = [{ item_id: 1, username: 'Alex', comment: 'This is great' }];
  if (comment) {
    arr.push(comment);
    return arr.length;
  }
  return arr.length;
};

module.exports = testcommentcounter;