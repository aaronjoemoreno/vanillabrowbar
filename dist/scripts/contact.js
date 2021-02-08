let form = document.querySelector('.main-form');
let text = document.querySelector('.main-text');
// let textButton = document.querySelector('.text');
// let emailButton = document.querySelector('.email');

let selected = 'text';

function selectedContact(e){
    selected = e.target.innerHTML.toLowerCase();

    if(selected == 'text'){
        form.setAttribute("style", "display: none");
        text.setAttribute("style", "display: block");
        document.querySelector('.text').classList.add('selected')
        document.querySelector('.email').classList.remove('selected');
    }else{
        form.setAttribute("style", "display: block");
        text.setAttribute("style", "display: none");
        document.querySelector('.email').classList.add('selected')
        document.querySelector('.text').classList.remove('selected');
    }
}

document.querySelectorAll('.contact-buttons h3').forEach(button => {
    button.addEventListener('click', selectedContact);
})