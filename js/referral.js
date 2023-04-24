const formBox = document.querySelectorAll('.join-form-area > div');


function clremove(){
    formBox[0].classList.remove('w50per');
    formBox[1].classList.remove('w50per');
    formBox[4].classList.remove('w50per');
    formBox[5].classList.remove('w50per');
}

if(window.matchMedia("(max-width: 1023px)").matches){
    clremove();
}else{
    console.log('boo')
}