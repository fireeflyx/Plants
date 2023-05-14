let log_in = document.getElementById('log_in');
let popUp = document.getElementById('popUp');
let log_in_button = document.getElementById('log_in_button');
let log_in_burger = document.getElementById('log_in_burger');

function toggle_popUp() {
    popUp.classList.toggle('popUp_active')
    document.body.classList.toggle('scroll_block');
}

function logIn() {
        log_in.innerHTML = 'Sign out';
        log_in.removeEventListener('click', toggle_popUp);
        log_in.addEventListener('click', signOut);
}

function signOut(){
    log_in.innerHTML = 'Log in';
    log_in.addEventListener('click', toggle_popUp);
}

log_in.addEventListener('click', toggle_popUp);
log_in_burger.addEventListener('click', toggle_popUp);
log_in_button.addEventListener('click', () => {
    toggle_popUp();
    logIn();
});
popUp.addEventListener('click', (event) => {
    if (event.target === popUp) toggle_popUp();
});
