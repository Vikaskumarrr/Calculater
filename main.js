
const display = document.getElementById('display')

function appendedToDisplay(value) 
{ 
    display.value += value
}


function clearDisplay()
{ 
    display.value = ""
}


function calculate()
{ 
    if(display.value==="")
    { 
        alert("Please enter a value")
        return
    }

    let reuslt = eval(display.value)
    display.value = reuslt
}