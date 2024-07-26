import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, Col, CardTitle } from 'reactstrap'
import { AppContext } from '../../AppContext'

export default function Product(props) {
    const { product } = props
    const { addToCart } = useContext(AppContext)
    return (
        <div>
            <Col className='mb-4'>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            <h1>product</h1>
                            <p>Info: {product.name}</p>
                            <Link to='/'>Chi tiết sản phẩm</Link>
                        </CardText>
                        <Button color="success" onClick={function() {
                            addToCart(product.id)
                        }}>
                            Add to Cart
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}
