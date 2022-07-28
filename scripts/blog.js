import { addPost } from './addPost.js';
import { savePost } from './savePost.js';
import { loadAllPosts } from './loadPost.js';
// localStorage.clear();
// console.log(localStorage);
document.getElementById('add-post').addEventListener('click', addPost);
document.getElementById('save').addEventListener('click', savePost);
loadAllPosts();
console.log(JSON.parse(localStorage.getItem('posts')));

import { deletePost, getPost } from './deletePost.js';
