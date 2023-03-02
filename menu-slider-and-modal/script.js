const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//navigation
toggle.addEventListener('click', () =>{
 document.body.classList.toggle('show-nav');
})

// Modal Open
open.addEventListener('click', () => {
 modal.classList.add('show-modal');
})

//Modal Close
close.addEventListener('click', () => {
 modal.classList.remove('show-modal');
})

// Modal Close For Outside Click
window.addEventListener('click', e => 
e.target == modal ? modal.classList.remove('show-modal') : false 
);