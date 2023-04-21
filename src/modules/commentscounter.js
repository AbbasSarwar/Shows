const commentcounter = () => {
  const showdivcontainer = document.querySelector('.show-comments');
  const showdivAllPtags = document.querySelectorAll('.show-comments p');
  const ptag = document.querySelector('.show-comments p');
  const h3 = document.createElement('h3');
  h3.innerText = `Comments (${showdivAllPtags.length})`;
  showdivcontainer.insertBefore(h3, ptag);
};

export default commentcounter;