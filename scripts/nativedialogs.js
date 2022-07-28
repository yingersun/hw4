let output = document.getElementById('output');

let alertbtn = document.getElementById('alert');
alertbtn.addEventListener('click', () => {
  alert('hello this is an alert');
  output.innerHTML = "The value returned by the confirm method is : ok'";
});

document.getElementById('confirm').addEventListener('click', () => {
  let text = 'press ok to confirm. cancel to cancel.';
  let confirmbox = confirm(text);
  if (confirmbox) {
    text = 'The value returned by the confirm method is : ok';
  } else {
    text = 'The value returned by the confirm method is : cancel';
  }
  output.innerHTML = text;
});

document.getElementById('prompt').addEventListener('click', () => {
  let text = 'this is a prompt.';
  let promptbox = prompt(text);
  if (promptbox) {
    text = `The value returned by the confirm method is : ${promptbox}`;
  } else {
    text = 'User didn’t enter anything';
  }
  output.innerHTML = text;
});

document.getElementById('safer_prompt').addEventListener('click', () => {
  let text = 'this is a safer prompt.';
  let safer_promptbox = prompt(text);
  if (safer_promptbox) {
    text = `The value returned by the confirm method is : ${DOMPurify.sanitize(safer_promptbox)}`;
  } else {
    text = 'User didn’t enter anything';
  }
  output.innerHTML = text;
});
