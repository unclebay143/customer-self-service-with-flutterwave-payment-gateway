const {id, bundleName, plan, planID, price, value } = JSON.parse(localStorage.getItem("_bundle"));
const checkoutPage = (
    `
        <div class="checkout__section">
        <h1>🛒 Checkout Preview</h1>
            <section class="checkout__body">
                <p>Please confirm your purchase details below <span class="icon__below"><i>👇👇👇</i><span></p>
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
                    <button class="custom__btn checkout__btn">Checkout</button>
                </section>
            </section>
        </div>
    `
)

const checkoutPreview = () =>{
    appContainer.innerHTML = checkoutPage
}