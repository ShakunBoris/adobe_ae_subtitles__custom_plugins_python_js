// solid = text.sourceText;
const solid = 'Австралийский биотехнологический гигант «FRAME» лидирует на рынке когнитивных имплантов.&&&澳大利亚 生物技术 巨头 “FRAME” 在 认知植入物 市场领先'
const parts = solid.split('&&&');
const text_local = parts[0];
const text_china = parts[1];
let result = '';
// let T = time*effect("Speed")("Slider");
for (let time = 0; time <= text_china.length; time++) {
  let last_space = text_china.substr(0, Math.round(time)).lastIndexOf(' ');
  if (last_space === -1) {
    last_space = 0;
  }
  if (Math.round(time) >= text_china.length) {
    result = text_local;
  } else {
    if (Math.round(time) - last_space - 1 >= 0) {
      const n_words = text_china.substr(0, last_space).split(' ').length;
      result = text_local.split(' ').slice(0, n_words).join(' ') + text_china.substring(last_space, time);
    } else {
      // Do nothing
    }
  }
  process.stdout.write(`current result: ${result}\r`);
}