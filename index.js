// Завдання 1
// Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину.
//  При досягненні 30 хвилин, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.

let time = 3600;
const hourTimer = setInterval(() => {
  time = time - 1;
  console.log(time)
  if (time === 1800) {
    console.log("Залишилось менше половини часу");
  }
  if (time === 0) { 
    clearInterval(hourTimer);
  }
}, 1000);


// Завдання 2
// Створити таймер, який буде починати відлік з 30 секунд та зменшувати час кожну мілісекунду. При досягненні 10 секунд, таймер повинен відтворювати якусь анімацію,
//  а при досягненні 0 секунд — виконувати певну дію, наприклад, робити кнопку почати знову активною.

let secondTime = 30000; 
const secondsTimer = setInterval(() => { 
    secondTime = secondTime - 1000;
    if (secondTime === 10000) { 
        document.body.style.background = "#5768ff";
    }
    if (secondTime === 0) { 
        document.body.style.background = "white";
        clearInterval(secondsTimer);
    }
}, 1000)