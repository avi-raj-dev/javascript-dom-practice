//select the button
let yesBtn=document.getElementById('yes');
let noBtn=document.getElementById('no');

yesBtn.addEventListener('click',submit);
noBtn.addEventListener('click',submit);
noBtn.addEventListener('mouseover',function (){
    noBtn.innerHTML='Yes';
    yesBtn.innerHTML='No';
});
noBtn.addEventListener('mouseout',function (){
    noBtn.innerHTML='No';
    yesBtn.innerHTML='Yes';
});

//move no button randomly on the site when mouse over the button
// noBtn.addEventListener('mouseover', function () {
//     let x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
//     let y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

//     noBtn.style.position = 'absolute';
//     noBtn.style.left = x + 'px';
//     noBtn.style.top = y + 'px';
// });

function submit(){
    window.alert("Congratulation you got a Date with me");
}
