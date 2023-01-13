// sk_test_51MPlB6SGXIVKb2H5jy6sl9hrEVtmeUNJPvsz1sTdJK5WOq6uQ0qSG5vH5Gbdf4Rzrlc4FOHWT1awLM5keF8YbPPS00KSf6SziE
// Coffee : price_1MPlL9SGXIVKb2H5DfNUdni0
// Sunglasses: price_1MPlMiSGXIVKb2H5Uf9FYZjN
// Camera: price_1MPlNfSGXIVKb2H5bLJzAWfl

const express = require('express');
var cors = require('cors') // allows any id address to access the stripe server
const stripe = require('stripe')('sk_test_51MPlB6SGXIVKb2H5jy6sl9hrEVtmeUNJPvsz1sTdJK5WOq6uQ0qSG5vH5Gbdf4Rzrlc4FOHWT1awLM5keF8YbPPS00KSf6SziE'); // initialize stripe client for out account

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe  wants
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    
    
    */
   console.log(req.body)
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, ()=> console.log("Listening on port 4000!"));






