//This is a node program to be run from the command line
const prompt = require('prompt');

prompt.start().get(['Input'], (err, result) => {
  if (err) { return onErr(err); }
  let strArr = result.Input.split("");
  
  const toMockingCase = strArr => {
    let newArr = [];
    for (let i = 0; i < strArr.length; i++) {
      if (i % 2 === 0) {        
        newArr.push(strArr[i].toUpperCase());
      }else {
        newArr.push(strArr[i]);
      }
    }
    return newArr;
  };
  
  let output = toMockingCase(strArr).join('');
  console.log(output);
});

function onErr(err) {
  console.log(err);
  return 1;
}