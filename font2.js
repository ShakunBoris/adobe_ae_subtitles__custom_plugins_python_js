// L = text.sourceText.length;
// T = time*effect("Speed")("Slider");
// F = Math.round(T % 1);
// if(F==1 |(T <L & T>0)){Fl="_";}else{Fl=" ";}
// substr(0,T) + Fl;


// const text = 'Georgia is the best place to live';
let text_local = text.sourceText;
let symbols = '我可以帮您翻译成中文或使用中文汉字书写'
T = time*effect("Speed")("Slider");
let result = '';
let last_space = text_local.substr(0, Math.round(T)).lastIndexOf(' ');
if (last_space === -1) {
last_space = 0;
}
else {
    last_space = Math.round(T) - 2;
}
if (Math.round(T) >= text_local.length) {
result = text_local;
} else {
if (Math.round(T) - last_space - 1 >= 0) {
    result = text_local.substr(0, last_space) + ' ' + Array.from({length: Math.round(T) - last_space - 1}, () => symbols.charAt(Math.floor(Math.random() * symbols.length))).join('');
}
}
// console.log('current result: ', result);
result;