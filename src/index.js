import './styles.css';
import retrevingdata from './modules/display.js';

fetch('https://api.tvmaze.com/shows/1');

// https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/
// https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/id/likes/
// https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/id/comments/
// https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/id/reservations/
// /apps/abc234/comments?item_id=item1
// /apps/abc234/reservations?item_id=item1
retrevingdata();