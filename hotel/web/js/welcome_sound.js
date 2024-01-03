logo = document.querySelector('header img');
const audio = new Audio('./welcome.mp3');

logo.addEventListener("click", function() {
  if (!audio.paused) {
    return;
  }

	audio.play();
})

const box = document.getElementById('box1');

function changeColorOnMouseOver() {
  box.style.color = '#E0B973';
}
function revertColorOnMouseOut() {
  box.style.color = 'white';
}

box.addEventListener('mouseover', changeColorOnMouseOver);
box.addEventListener('mouseout', revertColorOnMouseOut);

/* ------------------------ */

const hotel = document.getElementById("hotel2");

function changeColorOnMouseOverHotel() {
  hotel.style.color = '#E0B973';
}

function revertColorOnMouseOutHotel(){
  hotel.style.color = 'white';
}

hotel.addEventListener('mouseover', changeColorOnMouseOverHotel);
hotel.addEventListener('mouseout', revertColorOnMouseOutHotel);
