const appContainer = document.querySelector(".app__container"); 


// GET USER BENEFICIARY NUMBER
const getBeneficiaryNumber = (
    `
        <form class="tel__input" onSubmit="getPhoneNumber(event)">
            <input value="090123456790" type="tel" pattern="[0-9]{12}" maxlength="12" minlength="12" placeholder="Enter phone number" class="phone__number" autocomplete="on" required/>
            <button type="submit">Proceed</button>
        <form>
    `
)
   
// GET USER NETWORK TYPE 
const networkType = (beneficiaryNumber) =>{
    appContainer.innerHTML = (`
        <div>
            <button class="custom__btn network__btn" onClick="serviceMenu('mtn', ${beneficiaryNumber})">MTN</button>
            <button class="custom__btn network__btn" onClick="serviceMenu('airtel', ${beneficiaryNumber})">AIRTEL</button>
            <button class="custom__btn network__btn" onClick="serviceMenu('glo', ${beneficiaryNumber})">GLO</button>
        </div>
    `)
}

// DISPLAY MENU TO USER
const serviceMenu = (networkType, beneficiaryNumber) =>{
    appContainer.innerHTML = (`
        <div>
            <button class="custom__btn menu__btn" onClick="dataService('${networkType}' , ${beneficiaryNumber})">Buy Data</button>
            <button class="custom__btn menu__btn" onClick="airtimeService('${networkType}', ${beneficiaryNumber})">Buy Airtime</button>
        </div>
    `)
}





// get user phone number
const getPhoneNumber = (event) =>{
    event.preventDefault()
    const beneficiaryNumber = document.querySelector(".phone__number").value;
    networkType(beneficiaryNumber)
    
}

// app init
const init = () =>{
    appContainer.classList.add("phone__section")
    appContainer.innerHTML = getBeneficiaryNumber;
}
