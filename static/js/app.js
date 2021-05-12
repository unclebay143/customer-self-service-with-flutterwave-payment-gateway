const appContainer = document.querySelector(".app__container"); 
const previousButton = document.querySelector(".back__btn"); 

const handlePreviousSection = (callback) =>{
    previousButton.style.display = "block";
    previousButton.addEventListener('click', ()=>callback())
}


// GET USER NETWORK TYPE 
const getNetworkType = () =>{
    handlePreviousSection(init) // init IS THE PREVIOUS FUNCTION
    appContainer.innerHTML = (`
    <div>
    <button class="custom__btn network__btn" onClick="serviceMenu('mtn')">MTN</button>
    <button class="custom__btn network__btn" onClick="serviceMenu('airtel')">AIRTEL</button>
    <button class="custom__btn network__btn" onClick="serviceMenu('glo')">GLO</button>
    </div>
    `)
}

// DISPLAY MENU TO USER
const serviceMenu = (networkType) =>{
    handlePreviousSection(getNetworkType) // getNetworkType IS THE PREVIOUS FUNCTION
    networkType && localStorage.setItem("_networkProvider", networkType)
    appContainer.innerHTML = (`
        <div>
            <button class="custom__btn menu__btn" onClick="dataService()">Buy Data</button>
            <button class="custom__btn menu__btn" onClick="airtimeService()">Buy Airtime</button>
        </div>
    `)
}


// get user phone number
const getPhoneNumber = (event) =>{
    event.preventDefault()
    const beneficiaryNumber = document.querySelector(".phone__number").value;
    beneficiaryNumber && localStorage.setItem("_beneficiaryNumber", beneficiaryNumber)
    getNetworkType()
    
}

// app init
const init = () =>{
    // GET USER BENEFICIARY NUMBER
    const getBeneficiaryNumber = (
        `
            <form class="tel__input" onSubmit="getPhoneNumber(event)">
                <input value="090123456790" type="tel" pattern="[0-9]{12}" maxlength="12" minlength="12" placeholder="Beneficiary phone number" class="phone__number" autocomplete="on" required/>
                <button class="proceed__btn" type="submit">Proceed</button>
            <form>
        `
    )
   
    appContainer.classList.add("phone__section");
    appContainer.innerHTML = getBeneficiaryNumber;
}
