// solid = text.sourceText;
const solid = 'Австралийский биотехнологический гигант «FRAME» лидирует на рынке когнитивных имплантов.&&&澳大利亚 生物技术 巨头 “FRAME” 在 认知植入物 市场领先'
const parts = solid.split('&&&');
const text_local = parts[0];
const text_china = parts[1];

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
for (let time = 0; time < text_sum_txt.length; time++) {
  let last_space = text_sum_txt.slice(0, time).lastIndexOf(' ');
      if (last_space === -1) {
        let tmp = text_sum_txt.slice(0, time);
      console.log(tmp);
    }
  if (text_sum_txt.slice(0, last_space).split(' ').length <= Math.min(text_local.split(' ').length * 2, text_china.split(' ').length * 2)) {

    if (last_space !== -1) {
      let tmp = text_sum_txt.slice(0, last_space).split(' ').filter((_, i) => i % 2 !== 0).join(' ') + text_sum_txt.slice(last_space, time);
      tmp = tmp.trim();
      console.log(tmp);
    } 
  } else if (last_space != -1) {
    let last_item = Math.min(text_local.split(' ').length * 2, text_china.split(' ').length * 2);
    let last_item_index = text_sum.slice(0, last_item).join(' ').length;
    let tmp = text_sum_txt.split(' ').slice(0, last_item).filter((_, i) => i % 2 !== 0).join(' ') + text_sum_txt.slice(last_item_index, time);
    console.log(tmp);
  }
}