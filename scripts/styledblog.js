import { addPost } from './addPost.js';
import { savePost } from './styledsavePost.js';
import { loadAllPosts } from './styledloadPost.js';
// localStorage.clear();
// console.log(localStorage);
document.getElementById('add-post').addEventListener('click', addPost);
document.getElementById('save').addEventListener('click', savePost);
loadAllPosts();
console.log(JSON.parse(localStorage.getItem('posts')));

import { deletePost, getPost } from './deletePost.js';
