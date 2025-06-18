let showBtn = document.querySelectorAll(".show-btn");
let display = document.querySelector(".calculator-display");
let ansBtn = document.querySelector(".ans-btn");
let backSpaceBtn = document.querySelector('.backspace-btn')
let clearBtn = document.querySelector('.clear-btn')

let isResultShown = false;


showBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isOperator = ['+', '-', 'X', '÷', '%'].includes(btn.textContent);

    if (isResultShown && !isOperator) {
      display.value = '';
      isResultShown = false;
    }
    display.value += btn.textContent;
    display.scrollLeft = display.scrollWidth;
    isResultShown = false;

  });
});

ansBtn.addEventListener("click", () => {
  try {
    let expression = display.value
      .replace(/X/g, "*")
      .replace(/÷/g, "/")
      .replace(/%/g, "/100");
    display.value = eval(expression);
  } catch (err) {
    display.value = "Error"
  }
  isResultShown = true
});


backSpaceBtn.addEventListener('click',()=>{
    display.value = display.value.slice(0,-1)
})

clearBtn.addEventListener('click',()=>{
    display.value = ''
})