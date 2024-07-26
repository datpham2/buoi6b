import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container, Row } from 'reactstrap'
import Product from '../product/Product'

export default function Products() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://66a08cbc7053166bcabbc9a5.mockapi.io/student')
        .then(function(response) {
            setData(response.data)
        })
    }, [])
  return (
    <div>
    Products
    <Container>
    <Row lg={4} md={3} sm={2} xs={2}>
     {
        data.map((item,index)=>(
          <Product key={index} product={item} />
        ))
     }
      </Row>
      </Container>
  </div>
  )
}
