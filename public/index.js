async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

//this is from the asignemnt part 1
//    let response= await fetch('http://localhost:9001/counter')
   //skips promise phase, store value there
//    let obj = await response.json()
// console.log(obj)
   //obj {value: 10}value: 10[[Prototype]]: Object, what is returned
//this is from the assigenemnt part 1

//this is from assignemnt part 2

let response = await fetch('http://localhost:9001/counter',{
    method:'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        "value" : 11
    })
})


let obj = await response.json()


    let countValue = obj.value;
    //dont want to hardcode 10, we want to return the value assigned to obj to get value of 10, which is located in db.json

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()