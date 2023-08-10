const MORSE_CODE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '|': ' ',
};

function decode(str) {
  const arr = [];

  for (let i = 0; i < str.length; i += 10) {
    str.slice(i, i + 10) === '**********'
      ? arr.push(' ')
      : arr.push(str.slice(i, i + 10));
  }
  return arr
    .reduce((a, b) => {
      if (b === ' ') {
        a.push(b);
        return a;
      }
      let str = '';
      for (let i = 0; i < b.length; i += 2) {
        if (b[i] + b[i + 1] === '10') str += '.';
        else if (b[i] + b[i + 1] === '11') str += '-';
      }
      a.push(MORSE_CODE[str]);
      return a;
    }, [])
    .join('');
}

module.exports = {
  decode,
};
