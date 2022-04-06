const number = document.querySelectorAll('.number');
const button = document.querySelector('.button');
const tnx = document.querySelector('#tnx');
const card = document.querySelector('#card');
const returntovote = document.querySelector('#returntovote');


function activeLink(){
            number.forEach((item) =>
            item.classList.remove('active'));
            this.classList.add('active');
        }
        number.forEach((item) =>
        item.addEventListener('click', activeLink))


button.addEventListener('click', () => {
    card.classList.add('hidden');
    tnx.classList.remove('hidden');
})

returntovote.addEventListener('click', () => {
    card.classList.remove('hidden');
    tnx.classList.add('hidden');
    number.forEach((item) =>
    item.classList.remove('active'));
})