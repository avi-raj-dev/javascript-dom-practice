// let x=document.getElementsByClassName('items');
// let x=document.getElementsByClassName('items');
// console.log(x[0]);

//Appending h2 tag in web page
// var add=document.createElement('h2');
// add.innerHTML='Heading 2';
// var body=document.getElementsByTagName('body')[0];
// body.append(add);
// console.log(body);
// console.log(add);

//apply new css by replacing old one
function changetheme(){
    //console.log(event);
    let head=document.getElementsByTagName('head')[0];

    //select the current link css tag
    let linktag=document.getElementById('css');
    if(linktag===null){
        console.log(document.getElementById('newcss'));
    }
    else{
        console.log(linktag);
    }
    console.log(head);
    //remove the css link tag
    if(linktag===null){
        head.removeChild(document.getElementById('newcss'));
    }
    else{
        head.removeChild(linktag);
    }

    //create a new link tag
    let newlinktag=document.createElement('link');
    if(linktag===null){
        newlinktag.setAttribute('id','css');
    }
    else{
        newlinktag.setAttribute('id','newcss');
    }
    newlinktag.setAttribute('rel','stylesheet');
    console.log(newlinktag);

    //add the new href
    if(linktag===null){
        newlinktag.setAttribute('href','style.css');
    }
    else{
        newlinktag.setAttribute('href','darktheme.css');
    }

    //append it to the head
    head.appendChild(newlinktag);
}


//select the button
let button=document.getElementById('btn');
console.log('button');

//add the event listener
button.addEventListener('click',changetheme);