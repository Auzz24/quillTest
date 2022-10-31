const toolbar = document.getElementById('toolbar');
const editor = document.getElementById('editor');
const button = document.getElementById('button');
// var QuillDeltaToHtmlConverter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;
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
    console.log(delta);
    var cfg = {};
    // var converter = new QuillDeltaToHtmlConverter(delta, cfg);
    // var html = converter.convert(); 
    // console.log(html);
    var htmlTwo = quill.root.innerHTML
    console.log(htmlTwo);
    var strippedHtml = htmlTwo.replace(/<[^>]+>/g, '');
    console.log(strippedHtml);
});

