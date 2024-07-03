import React from "react"

function Card() {
    const cards = [
        { 
            number : 1,
            image : "/C1.png",
            title : "Scan QR Code",
            content : "Customers scan the QR code placed on their table using their smartphone camera."
        },
        {
            number : 2,
            image : "/C2.png",
            title : "Browse Menu",
            content : "Once scanned, customers are directed to the restaurant's menu page on our website."
        },
        {
            number : 3,
            image : "/C3.png",
            title : "Place Order",
            content : "Customers select their desired items from the menu and customize as needed."
        },
        {
            number : 4,
            image : "/C4.png",
            title : "Make Payment",
            content : "Customers securely pay for their order directly on the website."
        },
    ]
    return (
        <div className="flex justify-center my-24">
            {cards.map((card)=>(
                    <div className="bg-[#FF5521] w-52 h-80 m-8 rounded-2xl text-center p-4">
                        <div className="h-16 w-16 rounded-full bg-white mx-auto -mt-14"></div>
                        <div className="h-14 w-14 rounded-full bg-[#F8CF41] mx-auto -mt-16 text-4xl flex items-center justify-center font-archivo">{card.number}</div>
                       <img src= {card.image} alt="qr_img" className="mx-auto my-7"/>
                       <h2 className="font-archivo text-white text-2xl font-semibold">{card.title}</h2>
                       <p className="font-archivo text-white font-thin my-4">{card.content}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Card