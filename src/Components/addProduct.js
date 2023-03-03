import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from'react-router-dom'
import { addProduct } from '../services/api';

 function AddProduct() {
    const navigate = useNavigate();
    const [product, setProducts] = useState(
        {
            "name": "",
            "price": "",
            "img": "",
            "like": 0,
            "quantity": "",
            "description": ""
        }
    )
    const handlechange=(e)=>{
        console.log(e.target.value)
        setProducts({...product,[e.target.name]:e.target.value})
        console.log(product)

    } 
    const handlechangeFile=(e)=>{
        console.log(e.target.value)
        setProducts({...product,img:e.target.files[0].name})
        console.log(product)
    }
    const add=(e)=>{
        e.preventDefault();
        addProduct(product).then(()=>navigate('/products/list'))
    }
    return (
        <div>
            <Container style={{ marginTop: "30px" }}>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control as="textarea" type="text" placeholder="Enter the name" name='name' onChange={(e)=>handlechange(e)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter the product description" name='description' onChange={(e)=>handlechange(e)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" name='price' onChange={(e)=>handlechange(e)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" name='quantity' onChange={(e)=>handlechange(e)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" name='img' onChange={(e)=>handlechangeFile(e)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e)=>add(e)}>
                        Add Product
                    </Button>
                    <Button variant="gray" type="reset">
                        Save
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
 export default AddProduct;