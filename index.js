// Get the DOM elements
const lengthEl = document.querySelector("#length");
const symbolsEl = document.querySelector("#symbols");
const numbersEl = document.querySelector("#numbers");
const generateBtn = document.querySelector("#generate");
const password1El = document.querySelector("#password1");
const password2El = document.querySelector("#password2");

// Generate a random password
function generatePassword(length, symbols, numbers) {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (symbols) {
    chars += "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
  }
  if (numbers) {
    chars += "0123456789";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

// Copy the password to the clipboard
function copyPasswordToClipboard(passwordEl) {
  const password = passwordEl.innerText;
  navigator.clipboard.writeText(password)
    .then(() => {
      passwordEl.classList.add("copied");
      setTimeout(() => {
        passwordEl.classList.remove("copied");
      }, 1000);
    })
    .catch((err) => {
      alert(`Failed to copy password: ${err}`);
    });
}

// Handle the generate button click
generateBtn.addEventListener("click", () => {
  const length = lengthEl.value;
  const symbols = symbolsEl.checked;
  const numbers = numbersEl.checked;

  // Generate the first password
  const password1Text = generatePassword(length, symbols, numbers);
  password1El.innerText = password1Text;

  // Generate the second password
  const password2Text = generatePassword(length, symbols, numbers);
  password2El.innerText = password2Text;

  // Show the passwords container
  const passwordsEl = document.querySelector("#passwords");
  passwordsEl.style.display = "block";
});

// Handle the length input change
lengthEl.addEventListener("input", () => {
  const length = lengthEl.value;
  if (length < 6) {
    lengthEl.value = 6;
  } else if (length > 30) {
    lengthEl.value = 30;
  }
});

// Handle the symbols checkbox change
symbolsEl.addEventListener("change", () => {
  const symbols = symbolsEl.checked;
});

// Handle the numbers checkbox change
numbersEl.addEventListener("change", () => {
  const numbers = numbersEl.checked;
});

// Handle password click to copy
password1El.addEventListener("click", () => {
  copyPasswordToClipboard(password1El);
});

password2El.addEventListener("click", () => {
  copyPasswordToClipboard(password2El);
});