//logo
import logo from "../src/assets/navbar/3legant.png"
import icon from "../src/assets/navbar/icons.png"

//hero
import hero_img from "./assets/hero/Image-Placeholder.png"

//card picture
import img1 from "../src/assets/card/img-1.png"
import img2 from "../src/assets/card/img-2.png"
import img3 from "../src/assets/card/img-3.png"
import img4 from "../src/assets/card/img-4.png"

export const data = {
    nav: [
        {
            img: logo
        },
        {
            link: "Home"
        },
        {
            link: "Shop"
        },
        {
            link: "Product"
        },
        {
            link: "Contact us"
        },
        {
            icons: icon
        }
    ],
    hero: [
        {
            hero_sec_img: hero_img
        },
        {
            title: "More than just a game.It’s a lifestyle"
        },
        {
            subtitle: "Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint."
        }
    ],
    card: [
        {
            card_img: img1,
            card_name: "Shark - Men's cabretta white golf glove ",
            card_price: "$19.00"
        },
        {
            card_img: img2,
            card_name: "Greg Norman - Men's Shark Logo Golf Polo Shirt",
            card_price: "$24.99"
        },
        {
            card_img: img3,
            card_name: "G/FORE - Mens Left Glove Snow 2023 ",
            card_price: "$30.00"
        },
        {
            card_img: img4,
            card_name: "Utility Rover-R Double Strap Bag All Black - 2023",
            card_price: "$209.99"
        }
    ]
}