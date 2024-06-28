const generateBtn = document.querySelector(".generate_btn");
const copy = document.querySelector(".generate_copy");

const letters = {
  number: "0123456789",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  symbol: "!@#$%^&*()_+~|}{[]:;?><,./-=",
};

generateBtn.onclick = function (e) {
  e.preventDefault();
  const passwordDisplay = document.querySelector(".generate_input_text");
  const passwordLength = parseInt(
    document.querySelector(".password_length").value
  );
  let string = "";

  if (!passwordLength || passwordLength <= 0) {
    alert("Please fill length");
  }

  const inputcheck = [
    ...document.querySelectorAll("input[type=checkbox]:checked"),
  ];

  if (inputcheck.length == 0) {
    alert("Please pick");
  }

  for (input of inputcheck) {
    const inputCase = input.getAttribute("case");
    string += letters[inputCase];
  }

  passwordDisplay.value = generatePassword(string, passwordLength);
};

copy.onclick = function (e) {
  const passwordDisplay = document.querySelector(".generate_input_text").value;

  navigator.clipboard
    .writeText(passwordDisplay)
    .then(() => {
      alert("Copy success");
    })
    .catch((err) => {
      alert("Copy failed");
    });
};

function generatePassword(string, passLength) {
  let password = "";
  for (let i = 0; i < passLength; i++) {
    password += string.charAt(Math.floor(Math.random() * string.length));
  }
  return password;
}
