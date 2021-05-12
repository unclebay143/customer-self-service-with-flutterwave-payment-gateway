
const makeAirtimePayment = (transaction_ref) =>{
    // ENABLE THE SUCCESS PAGE
    localStorage.setItem("_openSuccess", true)

    // GET BENEFICIARY NUMBER FROM THE LOCAL STORAGE
    const retrieveBeneficiaryNumber = localStorage.getItem("_beneficiaryNumber")

    // GET PURCHASE DETAILS FROM THE LOCAL STORAGE
    const retrieveRechargeAmount = localStorage.getItem("_recharge_amount")

    // EMAIL TO SEND RECEIPT TO
    const retrieveReceiptEmail = localStorage.getItem("_receipt_email")

    FlutterwaveCheckout({
        public_key: process.private.PAYMENT_KEY,
        tx_ref: transaction_ref,
        amount: retrieveRechargeAmount,
        currency: "NGN",
        country: "NG",
        payment_options: "card, mobilemoneyghana, ussd",
        redirect_url: // REDIRECT TO SUCCESS PAGE
        "./../../../public/success.html",
        customer: {
            email: retrieveReceiptEmail,
            phone_number: retrieveBeneficiaryNumber,
            name: retrieveBeneficiaryNumber,
        },
        callback: function (data) {
            localStorage.clear()
        },
        onclose: function() {
        // WHAT SHOULD HAPPEN WHEN THE MODAL CLOSES
        },
        customizations: {
            title: "Unclebigbay Service",
            description: `Payment of ${retrieveRechargeAmount} Recharge card for ${retrieveBeneficiaryNumber}`,
            logo: "https://github.com/unclebay143.png",

        },
    });
}