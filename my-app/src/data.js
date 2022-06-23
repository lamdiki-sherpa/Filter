import ima from './images/image1.jpg'
import imb from './images/image2.jpg'
import imc from './images/image3.jpg'
import imd from './images/image4.jpg'
import ime from './images/image5.jpg'
import imf from './images/image6.jpg'



const Dataa=[
    {
        id:1,
        category:"lunch",
        menuTitle:"Thakali set",
        price:'$3',
        info:"Thakali meal consists of locally grown buckwheat, barley, millet, rice, maize and dal. A kind of dal is also made from the dried, ground buckwheat leaves.",
        img:`${ima} `
        

    },
    {   id:2,
        category:'breakfast',
        menuTitle:"Egg tart",
        price:"$2",
        info:"The dish consists of an outer pastry crust filled with egg custard.It is a type of breakfast and can be enjoyed with coffee.",
        img:`${imb}`
    },
    {
        id:3,
        category:'Dessert',
        menuTitle:"Strawberry icecream",
        price:"$5",
        info:"Strawberry ice cream is a flavor of ice cream made with strawberry or strawberry flavoring. ",
        img:`${imc} ` 
    },
    {
        id:4,
        category:"lunch",
        menuTitle:"Veg momo",
        price:'$6',
        info:"Thakali meal consists of locally grown buckwheat, barley, millet, rice, maize and dal. A kind of dal is also made from the dried, ground buckwheat leaves.",
        img:`${imd} `
        

    },
    {   id:5,
        category:'breakfast',
        menuTitle:"Turkey Sandwich",
        price:"$3",
        info:"The dish consists of an outer pastry crust filled with egg custard.It is a type of breakfast and can be enjoyed with coffee.",
        img:`${ime}`
    },
    {
        id:6,
        category:'Dessert',
        menuTitle:"Chocolate cake",
        price:"$4",
        info:"Strawberry ice cream is a flavor of ice cream made with strawberry or strawberry flavoring. ",
        img:`${imf} ` 
    }
]
export default Dataa;