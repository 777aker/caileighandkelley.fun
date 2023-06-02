const countdown = document.querySelector("#countdown");
const countdowntitle = document.querySelector("#countdowntitle");

function countdowndraw() {
  // actual countdown math
  countdowntillwedding();
  // change font size for funsies
  // I actually don't like this effect bye
  //colorfullnonsense();
}

function countdowntillwedding() {
  let date = new Date();
  let month = 10 - (date.getUTCMonth() + 1);
  let day = 7 - date.getUTCDate();
  if(day < 0) {
    day = date.getUTCDate();
    if(month == 6 || month == 9) {
      month -= 1;
      day = 30 - day + 7;
    } else {
      month -= 1;
      day = 31 - day + 7;
    }
  }
  let hour = (11 + 9) - date.getUTCHours();
  if(hour < 0) {
    hour = date.getUTCHours();
    day -= 1;
    hour = 23 - hour + 20;
  }
  let minute = 59 - date.getUTCMinutes();
  let second = 59 - date.getUTCSeconds();
  countdown.innerHTML = month + " months " + day + " days " + hour + " hours "
    + minute + " minutes and " + second + " seconds";
}

function colorfullnonsense() {
  let fsize = sin(millis() / 500) * 5 + 18;
  countdown.style.fontSize = fsize + "pt";
  countdowntitle.style.fontSize = fsize + 10 + "pt";
  // change font color for funsies
  let r = (sin(millis() + millis() / 500) + 1) * 122;
  let g = (cos(millis() * 3 / 500) + 1) * 122;
  let b = (sin((millis() + millis()) / 500) + 1) * 122;
  countdown.style.color = "rgb(" + r + "," + g + "," + b + ")";
  r = (sin((millis() + millis()) / 500) + 1) * 122;
  g = (cos(millis() * 8 / 500) + 1) * 122;
  b = (sin(millis() / 500) + 1) * 122;
  countdowntitle.style.color = "rgb(" + r + "," + g + "," + b + ")";
}
