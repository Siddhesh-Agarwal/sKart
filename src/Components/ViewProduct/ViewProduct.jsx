import React from 'react';
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const ViewProduct = ({ product }) => {
    const navigate = useNavigate();
    const viewid = localStorage.getItem('s-mart-viewProduct');
    console.log(product);

    const eventBack = () => {
        navigate('/products');
    }

    return (
        <div>
            <div>
                <h1>Description About that product</h1>
            </div>
            <Button onClick={eventBack}>Back</Button>
        </div >
    );
}

export default ViewProduct