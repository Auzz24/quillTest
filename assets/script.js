const toolbar = document.getElementById('toolbar');
const editor = document.getElementById('editor');
const button = document.getElementById('button');
// const { htmlToText } = require('html-to-text');

let toolbarOptions = [
    ['bold', 'italic']
];

var quill = new Quill(editor,{
    modules:{
        toolbar: toolbarOptions
    },
    theme: 'snow'
});

button.addEventListener('click', function(){
    var delta = quill.getContents();
    var html = quill.root.innerHTML
    var strippedHtml = html.replace(/<[^>]+>/g, '');
    console.log(delta);
    console.log(html);
    console.log(strippedHtml);
});

