// PROTECT THE SUCCESS PAGE FROM USERS
localStorage.setItem("_openSuccess", false)

const generateTxReg_id = () =>{
    const retrieveNetworkProvider = localStorage.getItem("_networkProvider")
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")
    // GET CURRENT TIME AND APPEND CUSTOM ID AND BENEFICIARY PHONE NUMBER
    const today = Date.now()
    const formID = `${retrieveNetworkProvider}_txRech_${retrieveBeneficiaryNumber}&${today}`
    return formID
}


const airtimeCheckoutPreview = () =>{
    const retrieveRechargeAmount = localStorage.getItem("_recharge_amount")
    const retrieveNetworkProvider = localStorage.getItem("_networkProvider")
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")
    const retrieveReceiptEmail = localStorage.getItem("_receipt_email")

    const checkoutPage = (
        `
            <div class="checkout__section">
            <h1>🛒 Checkout Preview</h1>
                <section class="checkout__body">
                    <p>Please confirm your purchase details below <span class="icon__below"><i>👇👇👇</i><span></p>
                    <p class="transaction_ref">Transaction ID: &nbsp; <span class="ref_id"> ${generateTxReg_id()}</span></p>
                    <span class="receipt_email">Mail Receipt to: <em>${retrieveReceiptEmail}</em></span>
                    <section class="checkout__details">
                        <ul>
                            <li>Amount: <span class="checkout__data">#${retrieveRechargeAmount}</span></li>
                            <li>Network Provider: <span class="checkout__data">${retrieveNetworkProvider}</span></li>
                            <li>Service Type: <span class="checkout__data">Airtime Top-up</span></li>
                            <li>Beneficiary Phone Number: <span class="checkout__data">${retrieveBeneficiaryNumber}</span></li>

                    </section>
                    <section class="checkout__btn__wrapper">
                        <button class="custom__btn checkout__btn" onclick="makeAirtimePayment('${generateTxReg_id()}')">Checkout</button>
                    </section>
                </section>
            </div>
        `
    )


    handlePreviousSection(dataPlan); // dataPlan IS THE PREVIOUS FUNCTION
    appContainer.classList.add("dataPlan__section");
    appContainer.innerHTML = checkoutPage
}