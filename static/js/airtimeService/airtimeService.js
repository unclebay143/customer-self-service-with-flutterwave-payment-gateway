const airtimeService = () =>{
    appContainer.innerHTML = (`
        <form class="tel__input" onSubmit="getRechargeAmount(event)">
            <input 
                minlength="1" 
                type="number"
                placeholder="Enter Airtime Amount" 
                class="airtime_amount" 
                autocomplete="on" 
                required
                />
            <button type="submit">Recharge</button>
        <form>        
    `)
}


const getRechargeAmount = (event) =>{
    event.preventDefault()
    const rechargeAmount = document.querySelector(".airtime_amount").value;
    rechargeAmount && localStorage.setItem("_recharge_amount", rechargeAmount)
    emailForReceipt("airtimeCheckoutPreview")
    // airtimeCheckoutPreview()
}