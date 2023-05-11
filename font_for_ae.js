// let text = ' Georgia is the best place to live  ';
let skip = [];
let T = time*effect("Speed")("Slider");

for(let i=0; i<text.sourceText.length; i++){
if(!skip.includes(i)){
// process.stdout.write(text.slice(0, i+1) + '\n');
if (T == i) {
    result = text.sourceText.slice(0, i+1);
}
}
if(text.sourceText[i] === ' ' || i === 0){
let start = i;
let stop;
if(i < text.sourceText.length){
stop = text.sourceText.indexOf(' ', i+1);
if(stop === -1){
stop = text.sourceText.length -1;
}
}
for(let j=0; j<(stop-start); j++){
let rnd = Math.floor(Math.random() * 10);
// process.stdout.write(text.slice(0, i+1) +
// '我可以帮您翻译成中文或使用中文汉字书写'.slice(0, j) +
// '\n');
if (T == i) {
    result = text.sourceText.slice(0, i+1) +
'我可以帮您翻译成中文或使用中文汉字书写'.slice(0, j);
}
}
// skip.push(...Array(stop-start+1).keys()).map(x => x + start);
let indices = Array(stop - start + 1).keys();
skip.push(...indices);
skip = skip.map(x => x + start);
}
}
return result;