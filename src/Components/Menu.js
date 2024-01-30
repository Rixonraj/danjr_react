import React from 'react'
import dish1 from '../Assets/dish1.png'
import dish2 from '../Assets/dish2.png'
import dish3 from '../Assets/dish3.png'
import dish4 from '../Assets/dish4.png'
import dish5 from '../Assets/dish5.png'
import dish6 from '../Assets/dish6.png'
// import dish7 from '../Assets/ '


function Menu() {
    const menuArray = [
        {
            img: dish1,
            title: "",
            description: "",
            price: "",
            id: "",
            quantity: ""
        },
        {
            img: dish2,
            title: "",
            description: "",
            price: "",
            id: "",
            quantity: ""
        },    {
            img: dish3,
            title: "",
            description: "",
            price: "",
            id: "",
            quantity: ""
        },
        {
            img: dish4,
            title: "",
            description: "",
            price: "",
            id: "",
            quantity: ""
        },
        {
            img: dish5,
            title: "",
            description: "",
            price: "",
            id: "",
            quantity: ""
        },
        {
            img: dish6,
            title: "",
            description: "",
            price: "",
            id: "",
            quantity: ""
        },
        {
            img: dish6,
            title: "",
            description: "",
            price: "",
            id: "",
            quantity: ""
        },
        {
            img: dish1,
            title: "",
            description: "",
            price: "",
            id: "",
            quantity: ""
        },
    ]
    return (
        <div id='menu' className='bbblack'>

            <div className="d-flex align-items-center justify-content-center" >
                <h1> Biriyanis </h1>
            </div>
            <div className=' row bbblack padding0'>
                {menuArray.map((dish) => {
                    return <div class="card bbblack padding0 col-xl-3 col-md-3 m-4" style={{paddingLeft:'0px !important',paddingRight:'0px !important'}}>
                        <img class="card-img-top bbblack" src={dish.img} alt="Card image cap" />
                        <div class="card-body bbblack">
                            <h5 class="card-title bbblack">Card title</h5>
                            <p class="card-text bbblack">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Menu
