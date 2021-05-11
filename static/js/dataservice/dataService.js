
const dataService = (networkType, beneficiaryNumber) =>{
    const showBundles = (
        `
            <div>
                <button class="custom__btn network__btn" onClick="dataPlan('daily', '${networkType}', ${beneficiaryNumber})">DAILY</button>
                <button class="custom__btn network__btn" onClick="dataPlan('weekly', '${networkType}', ${beneficiaryNumber})">WEEKLY</button>
                <button class="custom__btn network__btn" onClick="dataPlan('monthly', '${networkType}', ${beneficiaryNumber})">MONTHLY</button>
            </div>
        `
    )
    appContainer.innerHTML = showBundles;
};


const dataPlan = (planName, networkType, beneficiaryNumber) => {
    appContainer.classList.add("dataPlan__section")
    let serviceProvider;
    switch (networkType) {
        case 'mtn':
            serviceProvider = mtnDataPlans
        default:
            break;
    }
    appContainer.innerHTML = serviceProvider.filter((dataBundle)=>dataBundle.plan === planName).map(({bundleName, price})=>(`
        <section class="accordion" id="accordionForDataBundle">
            <div class="accordion-item">
                <h2 class="accordion-header" id="${bundleName}">
                    <button class="accordion-button" type="button">
                        ${bundleName} - ${price}
                    </button>
                </h2>
            </div>
        </section>
        `)).join("")
}