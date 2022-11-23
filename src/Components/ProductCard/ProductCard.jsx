import { useState, useEffect, React } from "react";
import { Box, Image, Flex, Badge, Text, Spacer, Link } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
// import ViewProduct from "../ViewProduct/ViewProduct";

export default function ProductCard() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([{
        id: "",
        name: "",
        brand: "",
        price: "",
        image: "",
        description: "",
        category: "",
    }]);

    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, []);
    
    const eventCapture = (event) => {
        const v_id = event.currentTarget.id;
        localStorage.setItem('s-mart-viewProduct', v_id);

        // const paka = products.filter((ele) => ele === event.currentTarget.id);
        // const viewid = localStorage.getItem('s-mart-viewProduct');
        navigate('/viewProduct');

    }

    return (

        <Flex flexWrap="wrap" justifyContent="space-between" p="4">
            {
                products.map((product) => {
                    return (
                        <>
                            <Link onClick={eventCapture} id={product.id}>
                                <Box width="300px" borderWidth="1px" borderRadius="md" shadow="md" margin={5}>
                                    <Image
                                        borderTopRadius="md"
                                        src={product.image}
                                        alt={`${product.brand}'s ${product.name}`}
                                        w="300px"
                                        h="300px"
                                    />
                                    <Box p="5">
                                        <Flex align="baseline" mt={2}>
                                            <Badge colorScheme="blue">{product.category}</Badge>
                                            <Text
                                                ml={3}
                                                textTransform="uppercase"
                                                fontSize="sm"
                                                fontWeight="semibold"
                                                color="blue.800"
                                            >
                                                {product.brand}
                                            </Text>
                                        </Flex>
                                        <Text mt={2} fontSize="xl" fontWeight="bold" lineHeight="short">
                                            {product.name}
                                        </Text>
                                        <Flex mt={2}>
                                            <Text>${product.price}</Text>
                                            <Spacer />
                                            <Flex align="center">
                                                <Box as={MdStar} color="orange.400" />
                                                <Text ml={1} fontSize="sm">
                                                    <b>4.84</b> (190)
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                </Box>
                            </Link>
                        </>
                    )
                })
            }
        </Flex>
    )
}