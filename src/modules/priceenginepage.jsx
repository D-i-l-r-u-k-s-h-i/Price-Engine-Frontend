import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer';
import CalculationComponent from '../components/calculation_component';

export class PriceEnginePage extends Component {
    render() {
        return (
            <div>
                <div className='page-wrap'>
                    <NavBarComponent/>
                    <CalculationComponent/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default PriceEnginePage
