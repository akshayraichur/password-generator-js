const displayPassword = document.querySelector('.password');
const passwordLenElm = document.querySelector('.password-length');
const copyBtn = document.querySelector('.copy-btn');

const chars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '@',
  '#',
  '$',
  '%',
  '=',
  ':',
  '?',
  '.',
  '/',
  '|',
  '~',
  '>',
  '*',
  '(',
  ')',
  '<',
];

let PASSWORD_LENGTH = 16;

const getChar = () => chars[Math.floor(Math.random() * chars.length)];

const generatePassword = () => {
  let randomPassword = '';
  for (let i = 0; i < PASSWORD_LENGTH; i++) {
    let char = getChar();
    randomPassword += char;
  }

  return randomPassword;
};

const updateDOM = (len = PASSWORD_LENGTH) => {
  PASSWORD_LENGTH = len;
  password = generatePassword();
  passwordLenElm.textContent = `Password length: ${PASSWORD_LENGTH}`;
  displayPassword.textContent = password;
};

const copyToClipboard = () => {
  copyBtn.classList.remove('fa-copy');
  copyBtn.classList.add('fa-circle-check');
  let passwordContent = displayPassword.textContent;
  navigator.clipboard.writeText(passwordContent).then((r) => {
    // copied.
  });
  setTimeout(() => {
    copyBtn.classList.remove('fa-circle-check');
    copyBtn.classList.add('fa-copy');
  }, 1500);
};

const App = () => {
  updateDOM();

  // Event Listeners
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('range-input')) {
      updateDOM(Number(e.target.value));
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
      copyToClipboard();
    }
    if (e.target.classList.contains('refresh-btn')) {
      updateDOM();
    }
  });
};

App();
