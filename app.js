//Trying to make popup for adding a house
//const newHouse = document.querySelector("#new-house");
//const addNewHouse = document.querySelector("#add-modal");

//newHouse.addEventListener('click' , function(){
//    alert
//})

//const toggleHouseModal = () => {
//    addNewHouse.classList.toggle("visible");
//}



const calculate = document.querySelector("#btn-calculate");

calculate.addEventListener('click', function() {
    const amount = document.getElementById("amount").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;

    if (
        amount === "" || isNaN(amount) ||
        rate === "" || isNaN(rate) ||
        amount === "" || isNaN(years)
    ) {
        alert('Enter a valid value');
        return;
    }

    const months = years * 12;
    const totalAmount = amount * (1 + (rate/100) * years);
    const monthlyPayment = totalAmount / months;
    const totalInterest = totalAmount / months;
    
    document.querySelector("#monthly-payment").value = monthlyPayment;
    document.querySelector("#total-payment").value = totalAmount;
    document.querySelector("#total-interest").value = totalInterest;
})