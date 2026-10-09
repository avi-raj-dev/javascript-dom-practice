// let x;

// // x=document.getElementById('text')
// // x=document.getElementsByClassName('items')
// // x=document.querySelector('#id')
// // x=document.querySelector('.items')
// // x=document.querySelectorAll('.items')
// x=document.createElement('li')
// x.className='items';
// x.innerText='Item 5';
// x.style.color='green';

// let ul=document.getElementById('list')
// ul.append(x); 

// console.log(ul);

// // console.log(x);


//adding links to movies given
var items=document.getElementsByTagName('li');

for(let i=0; i<items.length; i++){
    const item=items[i];
    // console.log(item);
    let link=item.querySelector('a');
    link.setAttribute('href','https://www.google.com/search?q='+link.innerText);
    console.log(link);
}


// console.log(items);