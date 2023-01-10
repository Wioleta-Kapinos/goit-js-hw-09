import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";
const btnStart = document.querySelector('[data-start');
btnStart.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: function(selectedDates) {
      if(selectedDates[0] <= fp.now) {
        Notiflix.Notify.failure("Please choose a date in the future");
        btnStart.disabled = true;
      } else {
        btnStart.disabled = false;
      }
    },
};
const myInput = document.querySelector("#datetime-picker");
const fp = flatpickr(myInput, options);
const fieldDay = document.querySelector("[data-days]");
const fieldHours = document.querySelector("[data-hours]");
const fieldMinutes = document.querySelector("[data-minutes]");
const fieldSeconds = document.querySelector("[data-seconds]"); 

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
return { days, hours, minutes, seconds };
}
let ms;
function addLeadingZero(value) { 
return String(value).padStart(2, "0");
}
let timerId;
 function countTimer() {
  btnStart.disabled = true;
  timerId = setInterval(() => {
    const today = new Date().getTime();
    const selectDate = new Date(fp.selectedDates[0]).getTime();
    ms = selectDate - today;
    const result = convertMs(ms);
    fieldDay.innerHTML = addLeadingZero(result.days);
    fieldHours.innerHTML = addLeadingZero(result.hours);
    fieldMinutes.innerHTML = addLeadingZero(result.minutes);
    fieldSeconds.innerHTML = addLeadingZero(result.seconds);
    if (ms < 0) {
      clearInterval(timerId);
      fieldDay.innerHTML = "00";
      fieldHours.innerHTML = "00";
      fieldMinutes.innerHTML = "00";
      fieldSeconds.innerHTML = "00"; 
    }
  }, 1000);
};
btnStart.addEventListener("click", countTimer);