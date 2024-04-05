let copy = document.querySelectorAll(".code");
let btn = document.querySelectorAll(".btn");


btn.forEach((item,i)=>{
    btn[i].addEventListener("click",()=>{
           let code = copy[i].innerText
        navigator.clipboard.writeText(code) 
        .then(()=> {
            alert("copied");
            item.innerHTML = "copied"
        }
        )
        .catch(err=> alert(err))
    
        
    })
})






