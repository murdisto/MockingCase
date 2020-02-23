const button = document.getElementById("button");
const onButtonClick = () => {
  const mockInput = document.getElementById("mock-input").value;
  const toMockingCase = mockInput => {
    let strArr = mockInput.split("");
    const newArr = [];
    for (let i = 0; i < strArr.length; i++) {
      if (i % 2 === 0) {
        newArr.push(strArr[i].toUpperCase());
      } else {
        newArr.push(strArr[i]);
      }
    }
    let output = newArr.join("");
    return output;
  };

  document.getElementById("result").textContent = "";
  document.getElementById("result").textContent += toMockingCase(mockInput);
  document.getElementById("mock-input").value = "";
};

button.addEventListener("click", onButtonClick);
document.getElementById("mock-input").addEventListener("keypress", e => {
  if (e.code === "Enter") {
    e.preventDefault();
    onButtonClick();
  }
});
