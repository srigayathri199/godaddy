'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnopenmodal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnopenmodal.length; i++) {
    btnopenmodal[i].addEventListener('click', function() {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        //we can also do above one like below but for many classes it is not suitable
        // overlay.style.display = 'block';
       
    })
}

// dry priciple
const closem = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnclosemodal.addEventListener('click', closem);
overlay.addEventListener('click', closem);

document.addEventListener('keyup', function() {
    if (event.keyCode === 27 && !modal.classList.contains('hidden')) {
        closem();
    }
});


var frm = document.getElementById("formPopup");
var frm1 = document.getElementById("formPopup1");

var radio = document.querySelectorAll("input[type=radio]");
for(let i=0;i<radio.length;i++){
    radio[i].addEventListener('change',function(){
        BookCheck(radio[i].id);
    })
}

function BookCheck(type,element="book"){
   var inp= document.createElement("INPUT");
    inp.setAttribute("type", "text");
    inp.className='selected';
    if(type!='movie' && type!='show'){
        inp.setAttribute("placeholder", `Put your favorite ${type} ${element}`);
        frm.innerHTML='';
        frm.append(inp);
    } 
    else{
        inp.setAttribute("placeholder", `Put your favorite ${type}`);
        frm1.innerHTML=''
        frm1.append(inp);
    }
    
}
function clearForm(){
    frm.innerHTML=''
    frm1.innerHTML='' 
    
}

var reset = document.querySelector('.clear').addEventListener('click',clearForm);

let Fblist = document.querySelector('.FbookList')
let NFblist = document.querySelector('.NfbookList')
let Mlist = document.querySelector('.Movielist')
let Sblist = document.querySelector('.Showlist')

let arr=[];


document.querySelector('.set').addEventListener('click',function(e){
    e.preventDefault()
    var value = document.querySelectorAll('.selected')
    
    for(let i=0;i<value.length;i++){
        arr.push(value[i].value)    
    }
    for(let i=0;i<radio.length;i++){
        if(radio[i].checked){
            if(radio[i].id == 'fiction'){
                let li = document.createElement('li');
               li.textContent=arr[0]
                Fblist.append(li)
            }
            if(radio[i].id == 'Non-fiction'){
                let li = document.createElement('li');
               li.textContent=arr[0]
               NFblist.append(li)
            }
            if(radio[i].id == 'movie'){
                let li = document.createElement('li');
               li.textContent=arr[1]
               Mlist.append(li)
            }
            if(radio[i].id == 'show'){
                let li = document.createElement('li');
               li.textContent=arr[1]
               Sblist.append(li)
            }
        }
    }
    clearForm();
    closem();

})
