const submitButton = document.getElementById('submit-button');
const onButtonClick = () => {
  const mockInput = document.getElementById('mock-input').value;
  const toMockingCase = input => {
    const strArr = input.split('');
    const newArr = [];
    for (let i = 0; i < strArr.length; i++) {
      if (i % 2 === 0) {
        newArr.push(strArr[i].toUpperCase());
      } else {
        newArr.push(strArr[i]);
      }
    }
    const output = newArr.join('');
    return output;
  };

  document.getElementById('result').textContent = '';
  document.getElementById('result').textContent = toMockingCase(mockInput);
  document.getElementById('mock-input').value = '';
  document.getElementById('output').style.visibility = 'visible';
};

submitButton.addEventListener('click', onButtonClick);
document.getElementById('mock-input').addEventListener('keypress', e => {
  if (e.code === 'Enter') {
    e.preventDefault();
    onButtonClick();
  }
});

const copyText = elementId => {
  const copiedText = elementId;
  const tempInputField = document.createElement('input');
  tempInputField.type = 'text';
  tempInputField.value = copiedText;
  document.body.appendChild(tempInputField);
  tempInputField.select();
  document.execCommand('Copy');
  document.body.removeChild(tempInputField);
};

const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click', e => {
  e.preventDefault();
  copyText(document.getElementById('result').textContent);
  copyButton.textContent = 'Copied to Clipboard!';
});
