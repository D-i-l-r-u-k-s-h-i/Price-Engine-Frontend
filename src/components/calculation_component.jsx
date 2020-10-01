import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { getAllProductsActions} from '../actions'
import { Container} from 'reactstrap';
import ProductCard from './productCard';

export class CalculationComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            productData:null,
            
        }
    }

    componentDidMount(){
        this.props.getAllProductsActions.getAllProducts(this.state)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
        let newProps={}
        if (nextProps.productData && nextProps.productData !== prevState.productData) {
            newProps.productData = nextProps.productData
        }
        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
        if(newProps.productData){
            return{
               loaded: true,
               productData:newProps.productData,
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }

    render() {
        let {productData}=this.state
        // console.log(productData)
        return (
            <div>
                <Container>
                    <h2>Price Engine</h2><br/>
                    {Array.isArray(productData) && productData && productData.map(property => <ProductCard refresh={this.onRefresh} key={property.productId} props={property}/>)}
                </Container>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        getAllProductsActions:bindActionCreators(getAllProductsActions,dispatch),
                
    }
}

function mapStateToProps (state){
    return{
        ...state.GetProductPrices,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CalculationComponent))
