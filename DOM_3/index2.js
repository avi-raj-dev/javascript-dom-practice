var body=document.getElementById('body');

var outerDiv=document.getElementById('outerDiv');

var innerDiv=document.getElementById('innerDiv');

var button=document.getElementById('btn');

//clickHandler function
function clickHandler(event){
    //where it was clicked
    //console.log(event.target);
    console.log(event.currentTarget);
    //event.stopPropagation();
}

button.addEventListener('click',clickHandler);
innerDiv.addEventListener('click',clickHandler);
outerDiv.addEventListener('click',clickHandler);
body.addEventListener('click',clickHandler);