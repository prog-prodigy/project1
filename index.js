let count = 0
let countEl = document.querySelector("#count-el")
let paraCount = document.querySelector("#para").innerText
document.querySelector("#increment-btn").addEventListener("click",function(){
    count++
    countEl.innerText= count
})


document.querySelector("#save-btn").addEventListener("click",function(){
    document.querySelector("#para").innerText = document.querySelector("#para").innerText +" "+ count + "-" 
    count = 0
    countEl.innerText= count
})