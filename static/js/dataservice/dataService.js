const retrieveNetworkProvider = localStorage.getItem("_networkProvider")
const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")

const dataService = () =>{
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
    handlePreviousSection(dataService) // dataService IS THE PREVIOUS FUNCTION
    let serviceProvider;
    switch (localStorage._networkProvider) {
        case 'mtn':
            serviceProvider = mtnDataPlans;
        default:
            break;
    }

    appContainer.innerHTML = serviceProvider.filter((dataBundle)=>dataBundle.plan === planName)
    .map(({bundleName, price, planID}, index)=>{
        const currentServiceProvider = serviceProvider[index]
        return (`
        <section 
            class="accordion" 
            id="accordionForDataBundle" 
            onClick="setBundle(${JSON.stringify(currentServiceProvider).split('"').join("&quot;")})">
            <div class="accordion-item">
                <h2 class="accordion-header" id="${bundleName}">
                    <button class="accordion-button" type="button">
                        ${bundleName} - #${price}
                    </button>
                </h2>
            </div>
        </section>
        `)
    }).join("")
}

const setBundle = (selectedBundle) =>{
    appContainer.classList.add("dataPlan__section");
    localStorage.setItem('_bundle', JSON.stringify(selectedBundle))
    checkoutPreview()
}