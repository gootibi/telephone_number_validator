const inputText = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultText = document.getElementById("results-div");

const telephoneCheck = str => {

  let arr1 = str.split("");
  let arr = [];
  let numCounter = 0;
  let separatorFirst = 0;
  let separatorCounter = 0;

  arr1.forEach(item => {
    if (item !== " ") arr.push(item);
  });

  arr.forEach((item, index) => {

    (numTest(item) === true) ? numCounter++ :
      (index === 0 && item === "(") ? separatorFirst++ :
        (index === 4 && item === ")") ? separatorFirst++ :
          (index === 3 && item === "-") ? separatorCounter++ :
            (index === 7 && item === "-") ? separatorCounter++ :
              (index === 8 && item === "-") ? separatorCounter++ : "";

  });

  return (numCounter === 10 && separatorFirst === 0 && separatorCounter === 0) ? true :
    (numCounter === 11 && str[0] == 1 && separatorFirst === 0) ? true :
      (numCounter === 10 && separatorFirst === 2 && separatorCounter === 1) ? true :
        !!((numCounter === 10 && separatorFirst === 0 && separatorCounter === 2));
}

const numTest = num => {
  switch (num) {
    case "1":
      return true;
    case "2":
      return true;
    case "3":
      return true;
    case "4":
      return true;
    case "5":
      return true;
    case "6":
      return true;
    case "7":
      return true;
    case "8":
      return true;
    case "9":
      return true;
    case "0":
      return true;
    default:
      return false;
  }
}

checkButton.addEventListener("click", () => {
  inputText.value === "" ? alert("Please provide a phone number") : null;
  const result = telephoneCheck(inputText.value);
  resultText.textContent = (result ? `Valid US number: ${inputText.value}` : `Invalid US number: ${inputText.value}`);
  inputText.value = null;
});

clearButton.addEventListener('click', () => {
  inputText.value = null;
  resultText.textContent = null;
});