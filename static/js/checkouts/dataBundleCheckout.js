// PROTECT THE SUCCESS PAGE FROM USERS
localStorage.setItem("_openSuccess", false)


const generateTxSub_id = () =>{
    const retrieveNetworkProvider = localStorage.getItem("_networkProvider")
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")
    const today = Date.now()
    const formID = `${retrieveNetworkProvider}_txSub_${retrieveBeneficiaryNumber}&${today}`
    return formID
}



const dataCheckoutPreview = () =>{
    const retrieveNetworkProvider = localStorage.getItem("_networkProvider")
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")
    const retrieveReceiptEmail = localStorage.getItem("_receipt_email")
    const {bundleName, plan, price, value } = JSON.parse(localStorage.getItem("_bundle"));
    const checkoutPage = (
        `
            <div class="checkout__section">
            <h1>🛒 Checkout Preview</h1>
                <section class="checkout__body">
                    <p>Please confirm your purchase details below <span class="icon__below"><i>👇👇👇</i><span></p>
                    <p class="transaction_ref">Transaction ID: &nbsp; <span class="ref_id"> ${generateTxSub_id()}</span></p>
                    <span class="receipt_email">Mail Receipt to: <em>${retrieveReceiptEmail}</em></span>
                    <section class="checkout__details">
                        <ul>
                            <li>Amount: <span class="checkout__data">#${price}</span></li>
                            <li>Value: <span class="checkout__data">#${value}</span></li>
                            <li>Plan Name: <span class="checkout__data">${plan}</span></li>
                            <li>Network Provider: <span class="checkout__data">${retrieveNetworkProvider}</span></li>
                            <li>Bundle Name: <span class="checkout__data">${bundleName}</span></li>
                            <li>Service Type: <span class="checkout__data">Data Subscription</span></li>
                            <li>Beneficiary Phone Number: <span class="checkout__data">${retrieveBeneficiaryNumber}</span></li>
                        </ul>
                    </section>
                    <section class="checkout__btn__wrapper">
                        <button class="custom__btn checkout__btn" onclick="makePayment('${generateTxSub_id()}')">Checkout</button>
                    </section>
                </section>
            </div>
        `
    )


    handlePreviousSection(dataPlan); // dataPlan IS THE PREVIOUS FUNCTION
    appContainer.classList.add("dataPlan__section");
    appContainer.innerHTML = checkoutPage
}