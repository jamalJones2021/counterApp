let incrementBtn = document.getElementById('increment')
let decrementBtn = document.getElementById('decrement')
let zeroBtn = document.getElementById('reset')
let counter = document.getElementById('counter')
let count = 0;
counter.innerText = count;

incrementBtn.addEventListener('click',incrementItem)

decrementBtn.addEventListener('click',decrementItem)

zeroBtn.addEventListener('click',resetItem)


function incrementItem(){
  count++;
  const styleOne = count == 0 ? counter.style.color = 'black': counter.style.color = 'none'
  const styleTwo = count >= 1 ? counter.style.color = 'green' : counter.style.color ='none';
  counter.innerText = count;
}

function decrementItem(){
    count--;
    const styleThree = count == 0 ? counter.style.color = 'black': counter.style.color = 'none'
    const styleFour = count < 0 ? counter.style.color = 'red' : counter.style.color ='none';
    counter.innerText = count;
}

function resetItem(){
  count = 0
  const styleFive = count == 0 ? counter.style.color = 'black' : false;
  counter.innerText = count;
}
