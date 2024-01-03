const submit = document.getElementById('submit');
const close = document.querySelector('.btn-close');

/* SUBMIT LOGIC */

function showError(warning, message) {
    warning.classList.remove('d-none');
    warning.innerHTML = message;
}

function hideError(warning) {
    warning.classList.add('d-none');
}

function isValidName(value, warning, type) {
    if (value === '') {
        showError(warning, type + " cannot be empty!");
        return false;
    } else if (!value.match(/^[a-zA-Z]+$/)) {
        showError(warning, type + " can have only letters!");
        return false;
    } else {
        hideError(warning);
        return true;
    }
}

function isValidEmail(value, warning) {
    if (value === '') {
        showError(warning, "Email cannot be empty!");
        return false;
    } else if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        showError(warning, "Invalid Email format! Should be 'example@example.com'.");
        return false;
    } else {
        hideError(warning);
        return true;
    }
}

submit.onclick = function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const warning_1 = document.getElementById('info-1');
    const warning_2 = document.getElementById('info-2');
    const warning_3 = document.getElementById('info-3');

    const check_name = isValidName(name.value, warning_1, "Name");
    const check_surname = isValidName(surname.value, warning_2, "Surname");
    const check_email = isValidEmail(email.value, warning_3);

    if (check_name && check_surname && check_email) {
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));

        const modalNames = document.getElementById('names_m');
        const modalEmail = document.getElementById('email_m');
        const modalMessage = document.getElementById('message_m');

        modalNames.innerHTML = name.value + ' ' + surname.value;
        modalEmail.innerHTML = email.value;
        modalMessage.innerHTML = message.value;

        modal.show();
    }
}

/* CLOSE MODAL AND RELOAD */

close.onclick = function () {
    location.reload();
}

/* SOUND PLAYING */

logo = document.querySelector('header img');
const audio = new Audio('./welcome.mp3');

logo.addEventListener("click", function() {
  if (!audio.paused) {
    return;
  }
	audio.play();
})

