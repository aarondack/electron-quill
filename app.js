const Quill = require('quill');
const dialog = require('electron').remote.dialog;
const fs = require('fs');

let basicEditor = new Quill('#editor', {
  theme: 'snow'
});

basicEditor.addModule('toolbar',
  { container: '#toolbar' });

//Util method
function $(selector) {
  return document.querySelector(selector);
}

//Util save method
function saveFile() {
  dialog.showSaveDialog({defaultPath: $('.note-name').value + '.txt'} ,
    function(fileName) {
      console.log(fileName);
      if (fileName === undefined) return;
      fs.writeFile(fileName, basicEditor.getText(), (err) => {
        if (err) console.error(err);
    })
  })
}

// basicEditor.on('text-change', function(delta,source) {
//   if (source == 'user') {
//     console.log("A user action triggered this change");
//   }
// });

$('.save-note').addEventListener('click', () => saveFile());


//Write a file to node
// fs.writeFile('message.txt', 'hello nodejs', (err) => {
//     if (err) throw err;
// });

// fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
//   if (err) return console.log(err);
//   console.log('Hello World > helloworld.txt');
// });
