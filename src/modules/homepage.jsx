import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import ShowPriceComponent from '../components/show_price_component';
import Footer from '../components/footer';

export class HomePage extends Component {
    render() {
        return (
            <div>
                <div className='page-wrap'>
                    <NavBarComponent/>
                    <ShowPriceComponent/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default HomePage
