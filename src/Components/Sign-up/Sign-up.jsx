import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import PocketBase from 'pocketbase';
import Swal from 'sweetalert2';

export default function SignUp() {

    const navigate = useNavigate();
    const client = new PocketBase('http://127.0.0.1:8090');

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const eventHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const eventLog = () => {
        navigate('/login');
    }

    const eventSubmit = async () => {
        const name = user.firstName + user.lastName;
        console.log(name);
        try {
            const data = {
                "username": name,
                "email": user.email,
                "password": user.password,
                "passwordConfirm": user.repassword,
            };
            const record = await client.collection('users').create(data);
            if (record) {
                const uname = user.firstName + " " + user.lastName;
                localStorage.setItem('s-mart-username', uname);
                localStorage.setItem('s-mart-email', user.email);
                localStorage.setItem('s-mart-cart', []);
                localStorage.setItem('s-mart-wishlist', []);

                Swal.fire({
                    icon: 'success',
                    title: 'Yayy...',
                    text: 'Successfully Signed Up..!',
                })
            }
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
        catch (e) {
            console.log("Please try again later...");
        }
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" name="firstName" onChange={eventHandler} />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" name="lastName" onChange={eventHandler} />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" name="email" onChange={eventHandler} />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} id="pass" name="password" onChange={eventHandler} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Re - Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} id="repass" name="repassword" onChange={eventHandler} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={eventSubmit}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'blue.400'} onClick={eventLog}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}