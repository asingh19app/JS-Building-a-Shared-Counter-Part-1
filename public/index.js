async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');


   let response= await fetch('http://localhost:9001/counter')
   //skips promise phase, store value there
   let obj = await response.json()
console.log(obj)

   //obj {value: 10}value: 10[[Prototype]]: Object, what is returned





    let countValue = obj.value;

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