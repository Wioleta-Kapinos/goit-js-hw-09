import Notiflix from "notiflix";
let delayInput = document.querySelector('[name="delay"]');
let stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const formPromise = document.querySelector(".form");
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
      if(shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
}
let position;
function callTheFunction(event) {
  event.preventDefault();
  let value = amountInput.value;
  let delay = parseInt(delayInput.value);
  let step = parseInt(stepInput.value);
  for (let i = 1; i <= value; i++) {
    position = i;
    createPromise(position, delay)
     .then(({ position, delay }) => {
       Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
     })
     .catch(({ position, delay }) => {
       Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
     });
    delay += step;
  }
} 
formPromise.addEventListener("submit", callTheFunction);