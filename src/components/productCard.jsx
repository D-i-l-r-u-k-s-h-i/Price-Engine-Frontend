import React, { Component } from 'react'
import { Card, FormGroup, Label, Input, CardTitle, CardText, Row, Col ,Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { calcProductPriceActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'

export class ProductCard extends Component {
    constructor(props){
        super(props);
        this.state={
            dropdownOpen:false,
            qty:null,
            type:"UNITS",
            priceData:null
        }
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    select = (event) => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            qty:parseInt(event.target.innerText)
        });
        // console.log(this.props.props.productId)

        let obj = {
            qty: parseInt(event.target.innerText),
            productId: this.props.props.productId,
            type:this.state.type
        }

        this.props.calcProductPriceActions.calcProductPrice(obj)
    }

    componentDidUpdate(prevProps,prevState){
        // console.log(prevProps)
        // console.log(prevState)
        // console.log(this.props)

        // console.log(this.props.priceData)
        // console.log(prevProps.priceData)
        if(this.props.priceData !== prevProps.priceData && (this.props.priceData && this.props.priceData.productId)==this.props.props.productId) {
            console.log(this.props.priceData)
            this.setState({priceData:this.props.priceData})
            this.props.refresh(this.props.priceData)
        }

        if(this.state.qty!=null && this.state.type!=prevState.type){
            // console.log("type change")
            let obj = {
                qty: this.state.qty,
                productId: this.props.props.productId,
                type:this.state.type
            }
    
            this.props.calcProductPriceActions.calcProductPrice(obj)
        }
    
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        const {productName,noOfUnitsPerCarton}=this.props.props
        return (
            <div>
                <Row>
                    <Col sm="10">
                        <Card body>
                            <Row>
                                <Col>
                                    <CardTitle className="font-weight-bold h4">{productName}</CardTitle>
                                    <CardText className="text-muted">{`Units per Carton: ${noOfUnitsPerCarton}`}</CardText>
                                    <CardText className="font-weight-bold">
                                        <FormGroup check>
                                            <Label check>
                                                <Input onClick={() => this.setState({ type: "UNITS" })} type="radio" name={`${productName}`} defaultChecked/>{' '}
                                                Units
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input onClick={() => this.setState({ type: "CARTONS" })} type="radio" name={`${productName}`} />{' '}
                                                Cartons
                                            </Label>
                                        </FormGroup>
                                    </CardText>
                                </Col>
                                {/* <Col></Col> */}
                                <Col>
                                <br /><br /><br /><br />
                                <Dropdown direction="right" group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                                        <DropdownToggle caret>
                                            Choose Quantity
                                        </DropdownToggle>
                                        <DropdownMenu modifiers={{
                                            setMaxHeight: {
                                                enabled: true,
                                                order: 890,
                                                fn: (data) => {
                                                    return {
                                                        ...data,
                                                        styles: {
                                                            ...data.styles,
                                                            overflow: 'auto',
                                                            maxHeight: '100px',
                                                        },
                                                    };
                                                },
                                            },
                                        }}>
                                            {[...Array(50).keys()].map(x => <DropdownItem onClick={this.select}>{++x}</DropdownItem>)}
                                        </DropdownMenu>
                                    </Dropdown>
                                    <input type="text" className="inputsize" value={this.state.qty} readonly/></Col>
                                <Col>
                                    <br /><br /><br /><br />
                                    Amount:
                                    <input type="text"  value={this.state.priceData && this.state.priceData.amount} readonly/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        calcProductPriceActions: bindActionCreators(calcProductPriceActions, dispatch),
        // removeFromCartActions: bindActionCreators(removeFromCartActions, dispatch),
    }
}

function mapStateToProps(state) {
    return {
        ...state.GetProductPrices,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductCard))