let text = ' Georgia is the best place to live ';
let skip = [];
let t = 20;

for(let i=0; i<text.length; i++){
if(!skip.includes(i)){
process.stdout.write(text.slice(0, i+1) + ' '.repeat(5));
}
if(text[i] === ' ' || i === 0){
let start = i;
let stop;
if(i < text.length){
stop = text.indexOf(' ', i+1);
if(stop === -1){
stop = text.length -1;
}
}
for(let j=0; j<(stop-start); j++){
let rnd = Math.floor(Math.random() * 10);
process.stdout.write(text.slice(0, i+1) +
'我可以帮您翻译成中文或使用中文汉字书写'.slice(0, j) +
' '.repeat(5));
}
skip.push(...Array(stop-start+1).keys()).map(x => x + start);
}
}