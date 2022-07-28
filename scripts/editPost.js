import { getPost, delFromLocalStorage } from './deletePost.js';

function editPost(event) {
  document.getElementById('blog-form').show();
  // document.getElementById('output-ul');
  let post = getPost(event);

  document.getElementById('title').value = post.title;
  document.getElementById('date').value = post.date;
  document.getElementById('summary').value = post.summary;

  event.target.parentNode.parentNode.remove();
  console.log(event.target.parentNode.parentNode);
  delFromLocalStorage(post);
  console.log(localStorage);
}
export { editPost };
