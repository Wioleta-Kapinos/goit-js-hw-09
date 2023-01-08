import Notiflix from "notiflix";
let delayInput = document.querySelector('[name="delay"]');
let stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const formPromise = document.querySelector(".form");
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
      if(shouldResolve) {
        return Promise.resolve({position, delay});
      } else {
        return Promise.reject({position, delay});
      }
};
let position;

function callTheFunction(event) {
  event.preventDefault();
  let value = amountInput.value;
  let delay = delayInput.value;
  let totalDelay = delay + stepInput.value;
    for (let i = 0; i < value; i++) {
    position = i + 1;
    delay = delay + stepInput.value * i;
    createPromise(position, delay)
     .then(({ position, totalDelay }) => {
       Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
     })
     .catch(({ position, totalDelay }) => {
       Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
     });
    }
} 
formPromise.addEventListener("submit", callTheFunction);