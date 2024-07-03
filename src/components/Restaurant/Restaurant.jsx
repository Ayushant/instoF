import React from "react"

export default function Restaurant() {
    let restaurants = [
        {
            image: "https://hospitalitysnapshots.com/wp-content/uploads/sites/3/2021/07/155620.jpg",
            title: "Restaurant 1",
            rating: "/rating.svg"
        },
        {
            image : "https://png.pngtree.com/background/20231117/original/pngtree-3d-rendering-of-a-fashionable-bar-s-exterior-picture-image_6297988.jpg",
            title: "Restaurant 2",
            rating: "/rating.svg"
        },
        {
            image: "https://s.yimg.com/ny/api/res/1.2/Svy1Zoo4ItgRVw2QB5jOkw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/architectural_digest_422/284a90545d8ab5b811ae32b81cbda071",
            title: "Restaurant 3",
            rating: "/rating.svg"
        }
    ]
    return (
        <div className="flex justify-center ">
            {
                restaurants.map((restaurant) => (
                    <div className=" border-2 border-white mt-20 mr-14 p-3 rounded-2xl ">
                        <div className="card card-compact bg-base-100 w-80 shadow- h-80 ">
                            <figure>
                                <img
                                    src= {restaurant.image}
                                    alt="restaurant" className="p-1 rounded-2xl h-52 w-80" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-archivo">{restaurant.title}</h2>
                                <p><img src= {restaurant.rating} alt="rating" className="h-3"/></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}