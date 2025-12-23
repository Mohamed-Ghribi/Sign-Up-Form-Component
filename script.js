const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const pass = document.getElementById("Pass")
const btn = document.getElementById("btn")
const inputs = document.querySelectorAll("input")
const errors = document.querySelectorAll(".error")
const icons = document.querySelectorAll("i")



btn.addEventListener("click",function(e){
   e.preventDefault()
   inputs.forEach(element =>{
    if(element.value === ""){
        if(element.id ==="email"){
            element.value ="email@example/com"
            element.style.color = "hsl(0, 100%, 74%) "
        }
        element.style.border = `2px solid hsl(0, 100%, 74%) `
        errors.forEach(ele =>{
            if(ele.classList.contains(element.id)){
                ele.style.display = "block"
                ele.innerHTML = `${element.name} cannot be empty`
            }
        })
        icons.forEach(ele => {
            if(ele.classList.contains(element.id)){
                ele.style.display = "block"
            }
        })
        
        
    }
   })
})