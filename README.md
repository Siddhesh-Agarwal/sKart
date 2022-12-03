# s-Mart

A eCommerce website for students!
__________________________________________________________________

## Running the project

### running the API

1. open project in terminal.

2. create virtaul environment using:

    ```sh
    python -m venv env
    ```

3. install dependencies using:

    ```sh
    pip install -r ./requirements.txt
    ```

4. goto `./api` using

    ```sh
    cd ./api
    ```

5. start API using

    ```sh
    uvicorn main:app --reload
    ```

NOTE: Do not close the terminal else API will stop.

### starting the app

1. Open another terminal window.

2. Install the dependencies using:

    ```sh
    npm i
    ```

3. start development server using:

    ```sh
    npm start
    ```

__________________________________________________________________

## Dependencies
1. Python
    - FastAPI
    - TinyDB
    - uvicorn
2. JavaScript
    - React.js
    - Chakra UI
    - PocketBase
