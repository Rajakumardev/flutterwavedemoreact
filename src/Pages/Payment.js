import React from 'react'
import { Link } from 'react-router-dom'

const Payment = () => {
    const url = "http://localhost:8000/verifypayment/";
    const onMakePayment = () => {
        window.FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-b729c09697545c012362321423a1bccc-X",
            tx_ref: "hooli-tx-1920bbty8",
            amount: 54600,
            currency: "NGN",
            country: "NG",
            payment_options: "card, mobilemoneyghana, ussd",
            meta: {
                consumer_id: 23,
                consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
                email: "user1@gmail.com",
                phone_number: "08102909304",
                name: "user1",
            },
            callback: async (data) => {
                console.log(data);
                const transid = data.transaction_id || '';
                const responseObj = await fetch(url + transid);
                const response = await responseObj.json();
                console.log("verification response:", response);
            },
            onclose: function () {
                console.log("close called");
            },
            customizations: {
                title: "My store",
                description: "Payment for items in cart",
                logo: "https://assets.piedpiper.com/logo.png",
            },
        });
    }
    return (
        <div>
            <button onClick={onMakePayment}>Buy using flutterwave</button>
        </div>
    )
}

export default Payment
