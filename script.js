const btnE1 = document.getElementById("btn")
const resultE1 = document.getElementById("result")
const change =document.getElementById("re")

function wightcal(){
    const height =document.getElementById("height-inp").value / 100
    const weight =document.getElementById("weight-inp").value
    const bmical=weight/(height*height)
    resultE1.value=bmical

    if(bmical <18.5)
    {
    change.innerText="Weight Condition: Under Weight "
    }
    ifelse(bmical > 18.5 && bmical < 24.9)
    {
    change.innerText="Weight Condition: Normal Weight"
    }
    ifelse(bmical > 25 && bmical < 29.9)
    {
    change.innerHTML="Weight Condition: Over Weight"
    }
    ifelse(bmical>30)
    {
    change.innerText="Weight Condition: Obesity"
    }

}
btnE1.addEventListener("click",wightcal)
