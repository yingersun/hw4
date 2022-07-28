let alertdialog = document.getElementById('alert');
let confirmdialog = document.getElementById('confirm');
let promptdialog = document.getElementById('prompt');
let safer_promptdialog = document.getElementById('safer_prompt');

let alertbtn = document.getElementById('alertbtn');
let confirmbtn = document.getElementById('confirmbtn');
let promptbtn = document.getElementById('promptbtn');
let safer_promptbtn = document.getElementById('safer_promptbtn');

let output = document.getElementById('output');

//alert
alertbtn.addEventListener('click', () => {
  alertdialog.show();
  document.getElementById('alert-ok').addEventListener('click', () => {
    alertdialog.close();
    output.innerHTML = 'The value returned by the confirm method is : ok';
  });
});

//confirm
confirmbtn.addEventListener('click', () => {
  confirmdialog.show();
  document.getElementById('confirm-ok').addEventListener('click', () => {
    confirmdialog.close();
    output.innerHTML = 'The value returned by the confirm method is : ok';
  });
  document.getElementById('confirm-cancel').addEventListener('click', () => {
    confirmdialog.close();
    output.innerHTML = 'The value returned by the confirm method is : cancel';
  });
});

//prompt
promptbtn.addEventListener('click', () => {
  promptdialog.show();
  document.getElementById('prompt-ok').addEventListener('click', () => {
    let input = document.getElementById('prompt-input').value;
    promptdialog.close();
    if (input) {
      output.innerHTML = `The value returned by the confirm method is : ${input}`;
    } else {
      output.innerHTML = `User didn’t enter anything`;
    }
    input = '';
  });
  document.getElementById('prompt-cancel').addEventListener('click', () => {
    promptdialog.close();
    output.innerHTML = 'The value returned by the confirm method is : cancel';
  });
});

//safer prompt
safer_promptbtn.addEventListener('click', () => {
  safer_promptdialog.show();
  document.getElementById('safer_prompt-ok').addEventListener('click', () => {
    let input = document.getElementById('safer_prompt-input').value;
    safer_promptdialog.close();
    if (input) {
      output.innerHTML = `The value returned by the confirm method is : ${DOMPurify.sanitize(input)}`;
    } else {
      output.innerHTML = `User didn’t enter anything`;
    }
    input = '';
  });
  document.getElementById('safer_prompt-cancel').addEventListener('click', () => {
    safer_promptdialog.close();
    output.innerHTML = 'The value returned by the confirm method is : cancel';
  });
});
