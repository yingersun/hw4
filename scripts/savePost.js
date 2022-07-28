import { addPost, closePost } from './addPost.js';
import { deletePost, getPost } from './deletePost.js';
import { editPost } from './editPost.js';

// let index = 0;
//i need to move index to localstorage

function savePost() {
  //   index++;
  let title = document.getElementById('title').value;
  let date = document.getElementById('date').value;
  let summary = document.getElementById('summary').value;

  let post = new Object();
  post.title = title;
  post.date = date;
  post.summary = summary;

  if (localStorage.length == 0) {
    //check if localstorage empty
    let posts = [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    // console.log(JSON.parse(localStorage.getItem('posts')));
  } else {
    let posts = JSON.parse(localStorage.getItem('posts')); //array containing posts
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  let output_ul = document.getElementById('output-ul');
  let new_post = document.createElement('li');
  new_post.innerHTML = `<span>Title: <span class="post-title">${post.title}</span> (<span class="post-date">${post.date}</span>) </span> <span>Summary: <span class="post-summary">${post.summary}</span></span>`;

  let edit_btn = document.createElement('button');
  edit_btn.innerHTML = 'Edit';
  //   edit_btn.setAttribute('id', `edit-${index}`);
  edit_btn.addEventListener('click', editPost); //addeventerliset

  let del_btn = document.createElement('button');
  del_btn.innerHTML = 'Delete';
  //   del_btn.setAttribute('id', `del-${index}`);
  del_btn.addEventListener('click', deletePost); //addeventlistner

  let btnDiv = document.createElement('div');
  btnDiv.appendChild(edit_btn);
  btnDiv.appendChild(del_btn);

  new_post.appendChild(btnDiv);
  output_ul.appendChild(new_post);

  closePost();
  document.getElementById('title').value = '';
  document.getElementById('date').value = '';
  document.getElementById('summary').value = '';
}

export { savePost };
