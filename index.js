let buttons = document.querySelectorAll('.btn');
let screen = document.querySelector('.screen');
let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.getAttribute('data-value');

    if (value === 'C') {
      currentInput = '';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else {
      currentInput += value;
    }

    screen.textContent = currentInput;
  });
});

// Power button changes background color
let powerBtn = document.querySelector('.bution_upper ul li:last-child button');
powerBtn.addEventListener("click", () => {
  screen.style.background = "white";
});
powerBtn.addEventListener("dblclick", () => {
  screen.style.background = "black";
});