/*// CALCULATOR ENGINE
function add(a, b) {
    return (a + b).toFixed(14) * 1e14 / 1e14;
}

function substract(a, b) {
    return (a - b).toFixed(14) * 1e14 / 1e14;
}

function multiply(a, b) {
    return (a * b).toFixed(14) * 1e14 / 1e14;
}

function divide(a, b) {
    return (a / b).toFixed(14) * 1e14 / 1e14;
}

function operate(a, operator, b) {
    a = +a, b = +b
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '×':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

// CALCULATOR VARIABLES
const calculator = {
    expression: [''],
    result: 0,
    isNewExpression: true,
};

// DOMs
const exprArea = document.querySelector('.expression');
const resultArea = document.querySelector('.result');
const calcBtns = document.querySelectorAll('.btn');
const clearBtn = document.querySelector('.btn-clear');
const backspaceBtn = document.querySelector('.btn-backspace');

// FUNCTIONS
const isNumber = (value) => !isNaN(+value);

// Expression functions
function addToExprression(value) {
    const lastExprSymbol = calculator.expression[calculator.expression.length - 1].slice(-1);
    if (isNumber(value)) {
        isNumber(lastExprSymbol) || lastExprSymbol === '.' ?
            calculator.expression[calculator.expression.length - 1] += value :
            calculator.expression.push(value);
    } else if (value === '.') {
        if (isNumber(lastExprSymbol)) calculator.expression[calculator.expression.length - 1] += value;
    } else {
        (isNumber(lastExprSymbol) && calculator.expression[calculator.expression.length - 1] != '') ?
            calculator.expression.push(value) :
            calculator.expression[calculator.expression.length - 1] = value;
    };
    updateExpression();
};

function updateExpression() {
    exprArea.textContent = calculator.expression.join('');
};

function clearExpression() {
    exprArea.textContent = '';
    calculator.expression = [''];
};

function deleteLast() {
    const lastIndex = calculator.expression.length - 1;

    if (calculator.expression[lastIndex].length in [0, 1]) {
        if (calculator.expression.length === 1) {
            clearExpression();
            clearResult();
        } else {
            calculator.expression.pop()
            updateExpression();
            updateResult();
        };
    } else {
        calculator.expression[lastIndex] = calculator.expression[lastIndex].slice(0, -1);
        updateExpression();
        updateResult();
    };
};

// Result functions
function updateResult() {
    function calculate(expression = calculator.expression) {
        let localExpression = expression.slice();
        let maxIndex = isNumber(localExpression[localExpression.length - 1]) ?
            localExpression.length - 1 :
            localExpression.length - 2;

        for (let i = 0; i < maxIndex; i++) {
            if (localExpression[i] === '×' || localExpression[i] === '/') {
                if (localExpression[i] === '/' && localExpression[i + 1] === '0') {
                    return 'DO NOT DO IT'
                };
                localExpression = operateWithArray(localExpression, i);
                i--;
                maxIndex -= 2;
            };
        };

        for (let i = 0; i < maxIndex; i++) {
            if (localExpression[i] === '+' || localExpression[i] === '-') {
                localExpression = operateWithArray(localExpression, i);
                i--;
                maxIndex -= 2;
            };
        };

        return parseFloat(localExpression[0]);
    };

    function operateWithArray(array, index) {
        const newElement = operate(array[index - 1], array[index], array[index + 1]).toString();
        array.splice(index - 1, 3, newElement);
        return array;
    };

    calculator.result = calculate();
    resultArea.textContent = calculator.result;
};

function addAndUpdate(value) {
    addToExprression(value);
    updateResult();
};

function clearResult() {
    resultArea.textContent = '';
    calculator.result = 0;
};

// EVENTS
backspaceBtn.addEventListener('click', deleteLast);

clearBtn.addEventListener('click', () => {
    clearExpression();
    clearResult();
});

calcBtns.forEach(function (btn) {
    switch (btn.value) {
        case "=":
            btn.addEventListener('click', function () {
                if (calculator.expression.toString() !== '' && isNumber(calculator.result)) {
                    calculator.expression = [`${calculator.result.toString()}`];
                    updateExpression();
                    resultArea.textContent = '';
                };
            });
            break;
        case '+':
        case '-':
        case '×':
        case '/':
            btn.addEventListener('click', function () {
                if (calculator.expression.toString() !== '') {
                    addAndUpdate(btn.value);
                };
            });
            break;
        case '.':
            btn.addEventListener('click', function () {
                if (calculator.expression.toString() !== '' && isNumber(calculator.expression[calculator.expression.length - 1]) && calculator.expression[calculator.expression.length - 1].indexOf('.') < 0) {
                    addAndUpdate(btn.value);
                };
            });
            break;
        default:
            btn.addEventListener('click', function () {
                if (calculator.expression[calculator.expression.length - 1] === '0') {
                    addAndUpdate('.' + btn.value);
                } else {
                    addAndUpdate(btn.value);
                };
            });
            break;
    };
});
*/ 











const container = document.querySelector('.result');
const content = document.createElement('div');
content.classList.add('content');
                       // content.textContent = 'total is ' + score;
content.textContent =  0;
container.appendChild(content);

function add(a, b){
  const res = a+b;
  let container = document.querySelector('.result');
  let child = container.lastChild;
  content.classList.add('content');
  content.textContent = res;
  cont = container.appendChild(content);
  container.replaceChild(cont, child);
  return res;
  

  
}
function subtract(a, b){
  const res = a-b;
  let container = document.querySelector('.result');
  let child = container.lastChild;
  content.classList.add('content');
  content.textContent = res;
  cont = container.appendChild(content);
  container.replaceChild(cont, child);
  return res;
  
}
function multiply(a, b){
   const res = a*b;
   let container = document.querySelector('.result');
  let child = container.lastChild;
  content.classList.add('content');
  content.textContent = res;
  cont = container.appendChild(content);
  container.replaceChild(cont, child);
  return res;
  
}
function divide(a, b){
  let res = a/b;
  if(b == 0){
    res="ERROR";
  }
 
  let container = document.querySelector('.result');
  let child = container.lastChild;
  content.classList.add('content');
  content.textContent = res;
  cont = container.appendChild(content);
  container.replaceChild(cont, child);
  return res;
  
}

const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    
                    const container = document.querySelector('.window');

                    const content = document.createElement('div');
                    content.classList.add('content');
                    const text = button.innerText;
                    if(text != "C"){
                        content.textContent =  text;
                        container.appendChild(content);
                    }
                    const parent = container;
                    const child = parent.childNodes
                    let lastc = parent.lastChild;
                   // console.log(lastc.innerText);
                    if(lastc.innerText == "="){
                      let prev = 0;
                      
                      let numb = [0];
                      numb[0]=child[0].innerText;
                      let j = 0;
                      for(let x=0; x< child.length-1; x++){
                        if(child[x].innerText != "+" && child[x].innerText != "-" && child[x].innerText != "*" && child[x].innerText != "/"){
                          numb[j] = child[x].innerText;
                          j++;
                        }
                      }
                      for(let x=0; x< child.length-1; x++){
                        //console.log(child[x].innerText);
                        if(child[x].innerText == "+"){
                          if(prev == 0){
                             let a = child[x].previousSibling.innerText;
                             let b = child[x].nextSibling.innerText;

                             /*let aa = numb.slice(0, x);
                             //console.log(aa.join(""));
                             a = aa.join("");
                            
                             let b = child[x].nextSibling.innerText;
                             let i = x+1;
                            while(child[i].innerText != "+" || child[i].innerText != "-" || child[i].innerText != "*" || child[i].innerText != "/"){
                             
                             
                                if(i == child.length-2){
                                    break;
                             }
                              i = i+1;
                             
                            }
                            i = i - x;
                            //console.log(i);
                            //console.log(numb);
                            let bb = numb.slice(x, (x+i));
                            //console.log(bb.join(""));
                            b = bb.join("");*/
                            
                            
                            prev = add(parseInt(a), parseInt(b));
                          }
                          else{
                            let a = prev;
                            let b = child[x].nextSibling.innerText;
                            //console.log(a);
                            
                            /*let i = x+1;
                            while(child[i].innerText != "+" || child[i].innerText != "-" || child[i].innerText != "*" || child[i].innerText != "/"){
                             
                             
                              if(i == child.length-2){
                                break;
                             }
                              i = i+1;
                             
                            }
                            i = i - x;
                            console.log(i);
                            //console.log(numb);
                            let bb = numb.slice(x, (x+i));
                            console.log(bb.join(""));
                            b = bb.join("");*/
                            
                            prev = add(a, parseInt(b));
                          }
                          
                          
                         
                          //console.log(parseInt(a), parseInt(b));
                          //parent.removeChild(child[x-1]);
                          //parent.removeChild(child[x]);
                          //child[x+1].innerText =add(parseInt(a), parseInt(b));
                          //parent.removeChild(child[x-1]);
                          //parent.removeChild(child[x]);
                          
                          
                          
                          console.log(prev);
                        }
                          if(child[x].innerText == "-"){
                          if(prev == 0){
                              let a = child[x].previousSibling.innerText;
                            let b = child[x].nextSibling.innerText;
                            
                            prev = subtract(parseInt(a), parseInt(b));
                          }
                          else{
                            let a = prev;
                            let b = child[x].nextSibling.innerText;
                            
                            prev = subtract(a, parseInt(b));
                          }
                          
                            
                          
                        }
                          if(child[x].innerText == "*"){
                          if(prev == 0){
                              let a = child[x].previousSibling.innerText;
                            let b = child[x].nextSibling.innerText;
                            prev = multiply(parseInt(a), parseInt(b));
                          }
                          else{
                            let a = prev;
                            let b = child[x].nextSibling.innerText;

                            prev = multiply(a, parseInt(b));
                          }
                          
                        }
                          if(child[x].innerText == "/"){
                          if(prev == 0){
                              let a = child[x].previousSibling.innerText;
                            let b = child[x].nextSibling.innerText;  
                            prev = divide(parseInt(a), parseInt(b));
                          }
                          else{
                            let a = prev;
                            let b = child[x].nextSibling.innerText;
                            prev = divide(a, parseInt(b));
                          }
                          
                        }
                        /*if(child[x].innerText != "+" && child[x].innerText != "-" && child[x].innerText != "*" && child[x].innerText != "/"){
                          numb[j] = child[x].innerText;
                          j++;
                        }
                        console.log(numb);*/
                        
                      }
                      
                      
                      
                        //console.log(child.length);
                        /*for(let x=0; x< child.length-1; x++){
                                  
                            if(x%3==0){
                                console.log(child[(x-2)].innerText);
                                console.log(child[(x-1)].innerText);
                                console.log(child[x].innerText);
                            }
                                  
                        }*/
                    }
    
 
                        
                        //console.log("length is ");
                       // console.log(child.length);
    
                        /*if(lastc.innerText == "="){
                           for(let x=0; x< child.length-1; x++){
                             console.log(child[x].innerText);
                              const a = child[x].innerText;
                             console.log(a);
                             //console.log(parseInt(a));
                             const op = child[x+1].innerText;
                              const b = child[x+2].innerText;

                              if(op == "+"){
                                add(a, b);
                              }
                             else if(op == "-"){
                                subtract(a, b);
                              }
                             else if(op == "/"){
                                divide(a, b);
                              }
                             else{
                               multiply(a, b);
                             }

                           }    
                        }*/




                          });
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  const parent = document.querySelector('.window');
  const child = parent.childNodes;
  for(var x=0; x < child.length; x++){
       parent.removeChild(child[x]);
  }
});
