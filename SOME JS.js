const text = 'Georgia is the best place to live';
let result = '';
for (let time = 0; time < text.length+1; time++) {
  let last_space = text.substr(0, time).lastIndexOf(' ');
  if (last_space === -1) {
    last_space = 0;
  }
  else {
    last_space = time - 3;
}
  if (time >= text.length) {
    result = text;
  } else {
    if (time - last_space - 1 >= 0) {
      result = text.substr(0, last_space) + ' ' + Array.from({length: time - last_space - 1}, () => '我可以帮您翻译成中文或使用中文汉字书写'.charAt(Math.floor(Math.random() * '我可以帮您翻译成中文或使用中文汉字书写'.length))).join('');
    }
  }
  console.log('current result: ', result);
}
return result;


// solid = text.sourceText;
const solid = 'Австралийский биотехнологический гигант «FRAME» лидирует на рынке когнитивных имплантов.&&&澳大利亚 生物技术 巨头 “FRAME” 在 认知植入物 市场领先'
const parts = solid.split('&&&');
const text_local = parts[0];
const text_china = parts[1];
let result = '';
// let T = time*effect("Speed")("Slider");
// T = 7.5
for (let time = 0; time <= text_china.length; time++) {
    T= time;
  let last_space = text_china.substr(0, Math.round(T)).lastIndexOf(' ');
  if (last_space === -1) {
    last_space = 0;
  }
  if (Math.round(T) >= text_china.length) {
    result = text_local;
  } else {
    if (Math.round(T) - last_space - 1 >= 0) {
      const n_words = text_china.substr(0, last_space).split(' ').length;
      if (text_china.substr(0, last_space).split(' ').length === 1 && text_china.substr(0, last_space).split(' ')[0] === '') {
          result = text_china.substring(last_space, Math.round(T));
      }
      else {
      result = text_local.split(' ').slice(0, n_words).join(' ') + text_china.substring(last_space, Math.round(T));
      }
    } else {
      // Do nothing
    }
  }
L = text_china.length;
F = Math.round(time % 1);
if(F==1 |(T <L & T>0)){Fl="_";}else{Fl=" ";}
result = result + Fl;
  console.log(result);
  result;
//   process.stdout.write(result+'\r');
}

// LAST+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

solid = text.sourceText;
// const solid = 'Австралийский биотехнологический гигант «FRAME» лидирует на рынке когнитивных имплантов.&&&澳大利亚 生物技术 巨头 “FRAME” 在 认知植入物 市场领先'
const parts = solid.split('&&&');
const text_local = parts[0];
const text_china = parts[1];
let T = time*effect("Speed")("Slider");
let tmp= '';
let max_len = Math.max(text_local.split(' ').length, text_china.split(' ').length);
let text_sum = [];
for (let i = 0; i < max_len; i++) {
  if (i < text_china.split(' ').length) {
    text_sum.push(text_china.split(' ')[i]);
  }
  if (i < text_local.split(' ').length) {
    text_sum.push(text_local.split(' ')[i]);
  }
}
let text_sum_txt = text_sum.join(' ');
let result = '';
// for (let time = 0; time < text_sum_txt.length; time++) {
  let last_space = text_sum_txt.slice(0, Math.round(T)).lastIndexOf(' ');
      if (last_space === -1) {
        tmp = text_sum_txt.slice(0, Math.round(T));
    //   console.log(tmp);
    }
  if (text_sum_txt.slice(0, last_space).split(' ').length <= Math.min(text_local.split(' ').length * 2, text_china.split(' ').length * 2)) {

    if (last_space !== -1) {
      tmp = text_sum_txt.slice(0, last_space).split(' ').filter((_, i) => i % 2 !== 0).join(' ') + text_sum_txt.slice(last_space, Math.round(T));
      tmp = tmp.trim();
    //   console.log(tmp);
    } 
  } else if (last_space != -1) {
    let last_item = Math.min(text_local.split(' ').length * 2, text_china.split(' ').length * 2);
    let last_item_index = text_sum.slice(0, last_item).join(' ').length;
    tmp = text_sum_txt.split(' ').slice(0, last_item).filter((_, i) => i % 2 !== 0).join(' ') + text_sum_txt.slice(last_item_index, Math.round(T));
    // console.log(tmp);
  }
//   console.log(tmp);
  if(Math.round(T % 1)==1 |(T <text_china.length & T>0)){Fl="_";}else{Fl=" ";}
tmp = tmp + Fl;
tmp;
// }