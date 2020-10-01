import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { getAllProductsActions} from '../actions'
import { Container,Alert} from 'reactstrap';
import ProductCard from './productCard';

export class CalculationComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            productData:null,
            pricesArray:[],
            totalAmount:0.0
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

    onRefresh = value =>{
        // console.log(value)
        let arr= this.state.pricesArray
        
        if(Array.isArray(arr) && arr.length){
            let b = arr.filter(val => val.productId===value.productId);
            // console.log(b)
            if(Array.isArray(b) && b.length){
                // console.log("have match")
                // console.log(arr.indexOf(b[0]))
                arr.splice(arr.indexOf(b[0]),1,value)
            }
            else{
                // console.log("no matches")
                arr.push(value)
            }

            this.setState({pricesArray:arr})
            //   console.log(arr.map(x => x.amount))
        }
        else{
            //initial value
            arr.push(value)
            this.setState({pricesArray:arr})
        }
        console.log(this.state.pricesArray)
        console.log(arr)
        this.calcTotal()
    }

    calcTotal=()=>{
        let tot=0.0
        this.state.pricesArray.forEach(function(item, index, array) {
            tot=tot+item.amount
        });
        console.log(tot)
        this.setState({totalAmount:tot})
        // return tot;
    }

    render() {
        let {productData}=this.state
        // console.log(productData)
        return (
            <div>
                <Container>
                    <h2>Price Engine</h2><br/>
                    {Array.isArray(productData) && productData && productData.map(property => <ProductCard refresh={this.onRefresh} key={property.productId} props={property}/>)}
                    <br/>
                    <Alert color="info">
                        <h5>Total: Rs.{this.state.totalAmount}</h5>
                    </Alert>
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
