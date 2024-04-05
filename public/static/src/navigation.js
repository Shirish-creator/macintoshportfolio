
var el=document.querySelector('main');
var ham=document.querySelector('.ham-menu');
var hamClose=document.querySelector('.close-ham');
var togSection=document.querySelector('.toggle-menu-section');

el.scrollTop = 0;
el.scrollLeft = 0;
var anchor = document.querySelectorAll('.anchor');

// console.log(anchor)

// Convert buttons NodeList to an array
var anchorsArray = Array.from(anchor);

//navlink scroll function
function navfunc(n){
    let id= n.target.id;
    window.scrollTo(0,200)

    if(id==="about" | id==="home"){
        el.scrollTop=0
    }
    if(id==="contact"){
        el.scrollTop=1900  
    }
   
    if(id==="works"){
        el.scrollTop=725
    }
   
    
    togSection.classList.remove('toggle-active') 
};



anchor.forEach(occurence=>{
    occurence.addEventListener('click',navfunc)
})

ham.addEventListener('click',()=>{
    togSection.classList.add('toggle-active') 
})

hamClose.addEventListener('click',()=>{
    togSection.classList.remove('toggle-active') 
})
