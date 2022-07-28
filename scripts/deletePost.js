function deletePost(event) {
  let post = getPost(event);
  // console.log(post);
  // console.log(JSON.parse(localStorage.getItem('posts')));
  event.target.parentNode.parentNode.remove();
  delFromLocalStorage(post);
}

function getPost(event) {
  let title = event.target.parentNode.parentNode.children[0].children[0].innerHTML;
  let date = event.target.parentNode.parentNode.children[0].children[1].innerHTML;
  let summary = event.target.parentNode.parentNode.children[1].children[0].innerHTML;
  console.log(`${title} ${date} ${summary}`);

  let post = { title: title, date: date, summary: summary };
  return post;
}

function delFromLocalStorage(post) {
  let posts = JSON.parse(localStorage.getItem('posts'));
  //   console.log(JSON.parse(posts));
  //   console.log(localStorage);
  for (let i = 0; i < posts.length; i++) {
    if (JSON.stringify(posts[0]) === JSON.stringify(post)) {
      posts.splice(i, 1);
    }
  }
  localStorage.setItem('posts', JSON.stringify(posts));
  //   console.log(posts);
  //   console.log(localStorage);
}

//only export getpost for debug purpose
export { deletePost, getPost, delFromLocalStorage };
