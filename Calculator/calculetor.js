


let expression = ""; 
let memory = 0;

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
     
      expression = eval(expression);
   
      document.querySelector('.input').value = expression;
    } else if (e.target.innerHTML === 'C') {
      
      expression = "";
     
      document.querySelector('.input').value = expression;
    } else if (e.target.innerHTML === 'MRC') {
      
      expression = memory;
      
      document.querySelector('.input').value = expression;
    } else if (e.target.innerHTML === 'M+') {
     
      memory += eval(expression);
  
      expression = "";
      
      document.querySelector('.input').value = memory;
    } else if (e.target.innerHTML === 'M-') {
      
      memory -= eval(expression);
     
      expression = "";

      document.querySelector('.input').value = memory;
    } else {
      
      expression = expression + e.target.innerHTML;

      document.querySelector('.input').value = expression;
    }
  });
});


