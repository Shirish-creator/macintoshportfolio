var viewcase=document.querySelectorAll('.rightimg');
var cursor= document.querySelector('.mouse-cursor')




viewcase.forEach(occurence=>{
    occurence.addEventListener('mouseenter',()=>{
        
       cursor.classList.add("mouse-cursor-case")
    })
})

viewcase.forEach(occurence=>{
    occurence.addEventListener('mouseleave',()=>{
        
        cursor.classList.remove("mouse-cursor-case")
    })
})