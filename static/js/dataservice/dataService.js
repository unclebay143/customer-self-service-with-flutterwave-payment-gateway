
const dataService = () =>{
    const retrieveNetworkProvider = localStorage.getItem("_networkProvider")
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")
    handlePreviousSection(serviceMenu); // serviceMenu IS THE PREVIOUS FUNCTION
    // ADD THE CSS STYLE FOR THE SECTION
    appContainer.classList.add("dataPlan__section");
    const showBundles = (
        `
            <div>
                <button class="custom__btn network__btn" onClick="dataPlan('daily', '${retrieveNetworkProvider}', ${retrieveBeneficiaryNumber})">DAILY</button>
                <button class="custom__btn network__btn" onClick="dataPlan('weekly', '${retrieveNetworkProvider}', ${retrieveBeneficiaryNumber})">WEEKLY</button>
                <button class="custom__btn network__btn" onClick="dataPlan('monthly', '${retrieveNetworkProvider}', ${retrieveBeneficiaryNumber})">MONTHLY</button>
            </div>
        `
    )
    appContainer.innerHTML = showBundles;
};


const dataPlan = (planName) => {
    // ONLY UPDATE THE LOCAL-STORAGE WHEN THERE IS AN INPUT FROM THE USER
    planName && localStorage.setItem("_planName", planName)
    // GET THE PLAN NAME FROM THE LOCALSTORAGE
    const _planName = localStorage._planName

    handlePreviousSection(dataService) // dataService IS THE PREVIOUS FUNCTION
    let serviceProvider;

    switch (localStorage._networkProvider) { // CHECK THE NETWORK OF THE CUSTOMER AND SWITCH THE DATA PLANS
        case 'airtel':
            serviceProvider = airtelDataPlans;
        case 'mtn':
            serviceProvider = mtnDataPlans;
        case 'glo':
            serviceProvider = gloDataPlans;
        default:
            break;
    }
    console.log(serviceProvider);
    const filterOutPlan = serviceProvider.filter((dataBundle)=>dataBundle.plan === _planName);
    appContainer.innerHTML = filterOutPlan.map(({bundleName, price, value}, index)=>{
        const currentServiceProvider = filterOutPlan[index]
        return (`
        <section 
            class="accordion" 
            id="accordionForDataBundle" 
            onClick="setBundle(${JSON.stringify(currentServiceProvider).split('"').join("&quot;")})">
            <div class="accordion-item">
                <h2 class="accordion-header" id="${bundleName}">
                    <button class="accordion-button" type="button">
                        ${bundleName}: ${value} - #${price}
                    </button>
                </h2>
            </div>
        </section>
        `)
    }).join("")
    
}

const setBundle = (selectedBundle) =>{
    console.log(selectedBundle);
    appContainer.classList.add("dataPlan__section");
    localStorage.setItem('_bundle', JSON.stringify(selectedBundle))
    emailForReceipt("dataCheckoutPreview")
}

