// function getPin() {
//     const pin = Math.round(Math.random() * 10000);
//         return pin;
  
// }
// function generatePin() {
//     const pin = getPin();
//     document.getElementById('display-pin').value = pin;
// }

document.getElementById('pin-generate-btn').addEventListener('click',function(){

    function getPin(){
        const pin = Math.round(Math.random()*10000)
        const pinStr = pin + '';

        if( pinStr.length < 4){
           return getPin();
        }
        else{
            return pin;
        }
        
    }

    const pin = getPin();
    
        console.log(pin);

        document.getElementById('display-pin').value = pin;
})

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNember = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C')
        typedNember.value = '';
    }

    else {
        const previousNumber = typedNember.value;
        const newNumber = previousNumber + number;
        typedNember.value = newNumber;
    }
})

document.getElementById('submit-button').addEventListener('click',function(){
    const displayPin = document.getElementById('display-pin').value
    const typedNember = document.getElementById('typed-numbers').value

    if( displayPin == typedNember ){
        document.getElementById('success').style.display='block';
        document.getElementById('deny').style.display='none';
    }
    else{
        document.getElementById('deny').style.display='block';
        document.getElementById('success').style.display='none';
    }
})