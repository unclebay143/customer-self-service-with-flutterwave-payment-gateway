/* 
    THIS SCRIPT HANDLES THE GETTING THE EMAIL FOR RECEIPT AND RETURN A CALLBACK TO CHECKOUT PAGE
*/



const getEmail = (event, callback) =>{
    // PREVENT FORM FROM RELOADING THE WEBPAGE
   event.preventDefault()
    
    // GET NUMBER FROM THE INPUT
    const receiptEmail = document.querySelector(".receiptEmail").value || "unclebigbay@gmail.com";
    
    // ONLY UPDATE THE LOCALSTORAGE IF THERE IS AN EMAIL GIVEN
    receiptEmail && localStorage.setItem("_receipt_email", receiptEmail)

    // CALL CHECKOUT FUNCTION FOR EITHER DATA OR AIRTIME CHECKOUT
    callback()
}

const emailForReceipt = (callback) =>{
    // GET USER BENEFICIARY NUMBER
    const getEmailForReceipt = (
        `
            <form class="tel__input" onSubmit="getEmail(event, ${callback})">
                <input 
                    value="" 
                    type="email" 
                    placeholder="Email for receipt (optional)" 
                    class="receiptEmail" 
                    autocomplete="on"
                    />
                <button class="proceed__btn" type="submit">Proceed</button>
            <form>
        `
    )
    appContainer.innerHTML = getEmailForReceipt;
}
