import React, { Component } from 'react'
import { Table ,Container} from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { getProductPricesActions} from '../actions'

export class ShowPriceComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            productData:null,
            
        }
    }

    componentDidMount(){
        this.props.getProductPricesActions.getProductPrices(this.state)
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
        console.log(productData)
        return (
            <div>
                <Container>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>product Name</th>
                                <th>No. of Units per Carton</th>
                                <th>Price Per Carton (LK Rs.)</th>
                                <th>(1-50) Unit Prices (LK Rs.)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productData && Array.isArray(productData) && productData.map(property => {
                                return (
                                    <tr key={property.productId}>
                                        <td>{property.productName}</td>
                                        <td>{property.noOfUnitsPerCarton}</td>
                                        <td>{property.pricePerCarton}</td>
                                        <td>
                                            <div>
                                                <ul>
                                                    {Object.entries(property.unitPrices).map(([k,v]) => k!=1?<li>{`${k} Units- ${v}`}</li>:<li>{`${k} Unit- ${v}`}</li>)}
                                                </ul>
                                            </div>
                                        </td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}
function mapDispatchToProps (dispatch){
    return{
        getProductPricesActions:bindActionCreators(getProductPricesActions,dispatch),
                
    }
}


function mapStateToProps (state){
    return{
        ...state.GetProductPrices,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (ShowPriceComponent))
