const {id, bundleName, plan, planID, price, value } = JSON.parse(localStorage.getItem("_bundle"));
const checkoutPage = (
    `
        <div class="checkout__section">
        <h1>Checkout Preview</h1>
            <section class="checkout__body">

            </section>
        </div>
    `
)

const checkoutPreview = () =>{
    appContainer.innerHTML = checkoutPage
}