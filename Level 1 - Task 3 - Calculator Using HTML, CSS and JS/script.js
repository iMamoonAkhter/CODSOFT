let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('.input').value = string;
      string = "";
    }
    else{
      string = string + e.target.innerHTML;
      document.querySelector('.input').value = string;
    }
  })
})