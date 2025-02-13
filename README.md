# Star Wars Explorer

A React app that helps users explore and work with scripts. It fetches data from external APIs and displays it in an interactive interface.

## Demo

You can view the live app here:  
[Star Wars Explorer](https://starwars-gamma-ten.vercel.app/)

## Features

- Fetch and explore data using external APIs.
- Interactive UI with responsive design for mobile and desktop devices.
- User-friendly features for script assistance.

## Technologies Used

- **React** - Frontend library for building UI.
- **Mantine** - Component library for UI.
- **Vite** - Fast build tool.
- **Vercel** - Deployment platform.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/rakeshbabu23/star-wars-explorer.git
    cd star-wars-explorer
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add the following variable:

    ```env
    VITE_SWAPI_API_URL=https://swapi.dev/api/
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

    Your app should now be running at [http://localhost:5175](http://localhost:5175).

## Environment Variables

- `VITE_SWAPI_API_URL`: URL for the Star Wars API used to fetch data. Set it to the SWAPI base URL or any other relevant endpoint.

## Deployment

This app is deployed on **Vercel** and can be accessed at:  
[https://starwars-gamma-ten.vercel.app/](https://starwars-gamma-ten.vercel.app/)
