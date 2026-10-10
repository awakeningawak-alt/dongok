const $ = id => document.getElementById(id);
const starter = `// OneSpxc DartPad
// Edit the values below, then press Run.
// This starter evaluates a supported Dart snippet format.
// Full arbitrary Flutter compilation needs a compiler service.

const title = 'Hello, OneSpxc';
const subtitle = 'Your code. Your ideas. Live preview.';
const buttonText = 'Launch project';
const cardTitle = 'Dart is ready';
const cardText = 'Change these strings and press Run';

void main() {
  print('Welcome to OneSpxc!');
  print(title);
}`;
const sample = `const title = 'OneSpxc Studio';
const subtitle = 'Build something brilliant.';
const buttonText = 'Explore tools';
const cardTitle = 'Live preview';
const cardText = 'Updated from your Dart source';

void main() {
  print('OneSpxc Studio running');
  print('Preview values parsed successfully');
}`;
let lastCode = starter;
$('code').value = starter;
function count(){const s=$('code').value;$('lineCount').textContent=s.split('\\n').length+' lines';$('charCount').textContent=s.length+' chars';$('editState').textContent=s===lastCode?'Saved sample':'Edited';}
function readConst(name, fallback){const src=$('code').value;const re=new RegExp("(?:const|final|var)\\\\s+"+name+"\\\\s*=\\\\s*(['\\\"])([\\\\s\\\\S]*?)\\\\1\\\\s*;");const m=src.match(re);return m?m[2].replace(/\\\\n/g,'\\n').replace(/\\\\'/g,"'").replace(/\\\\"/g,'"'):fallback;}
function run(){const src=$('code').value;const title=readConst('title','Hello, OneSpxc');const subtitle=readConst('subtitle','Edit the sample and press Run.');const button=readConst('buttonText','Get started');const cardTitle=readConst('cardTitle','Your first widget');const cardText=readConst('cardText','Preview fallback: supported const strings not found.');
$('pTitle').textContent=title;$('pText').textContent=subtitle;$('pButton').textContent=button;$('pCardTitle').textContent=cardTitle;$('pCardText').textContent=cardText;
const prints=[...src.matchAll(/print\\s*\\(\\s*(['"])(.*?)\\1\\s*\\)\\s*;/g)].map(m=>m[2]);
$('consoleOutput').textContent=(prints.length?prints.join('\\n'):'Run completed. No literal print() messages detected.')+'\\n\\nPreview updated from supported const string values.\\nNote: this is a lightweight snippet parser, not the Dart/Flutter compiler.';
$('runState').textContent='Ran locally';$('consoleStatus').textContent='● DONE';$('editState').textContent='Edited';}
$('code').addEventListener('input',count);$('runBtn').addEventListener('click',run);
$('sampleBtn').addEventListener('click',()=>{$('code').value=sample;count();run();});
$('resetBtn').addEventListener('click',()=>{$('code').value=lastCode;count();run();});
$('themeBtn').addEventListener('click',()=>document.body.classList.toggle('light'));
$('pButton').addEventListener('click',()=>{$('consoleOutput').textContent='Preview button clicked. Add a Flutter build/runtime service for real app event execution.';$('consoleStatus').textContent='● EVENT';});
count();run();