import { editPost } from './editPost.js';
import { deletePost } from './deletePost.js';
function loadPost(post) {
  let post_html = `<span>Title: <span>${post.title}</span> (<span>${post.date}</span>)</span> <span>Summary: <span>${post.summary}</span></span><div><button>Edit</button><button>Delete</button></div>`;
  return post_html;
}

function loadAllPosts() {
  let posts = JSON.parse(localStorage.getItem('posts'));
  let output_ul = document.getElementById('output-ul');
  if (posts != null) {
    for (let i = 0; i < posts.length; i++) {
      let newElem = document.createElement('li');
      newElem.innerHTML = loadPost(posts[i]);
      //   console.log(newElem);
      newElem.children[2].children[0].addEventListener('click', editPost);
      newElem.children[2].children[1].addEventListener('click', deletePost);
      output_ul.appendChild(newElem);
    }
  }
}

export { loadAllPosts };
