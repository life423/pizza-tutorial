import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const pizzaData = [
    {
        name: 'Focaccia',
        ingredients: 'Bread with italian olive oil and rosemary',
        price: 6,
        photoName: 'pizzas/focaccia.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Margherita',
        ingredients: 'Tomato and mozarella',
        price: 10,
        photoName: 'pizzas/margherita.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Spinaci',
        ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
        price: 12,
        photoName: 'pizzas/spinaci.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Funghi',
        ingredients: 'Tomato, mozarella, mushrooms, and onion',
        price: 12,
        photoName: 'pizzas/funghi.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Salamino',
        ingredients: 'Tomato, mozarella, and pepperoni',
        price: 15,
        photoName: 'pizzas/salamino.jpg',
        soldOut: true,
    },
    {
        name: 'Pizza Prosciutto',
        ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
        price: 18,
        photoName: 'pizzas/prosciutto.jpg',
        soldOut: false,
    },
]

function App() {
    return (
        <div className='container'>
            <h1>Hello, World!</h1>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <heade className='header'>
            <h1>Fast React Pizza Company</h1>
        </heade>
    )
}

function Menu() {
    return (
        <main className='menu'>
            <h2>Menu</h2>
            <Pizza />
        </main>
    )
}

function Footer() {
    const hour = new Date().getHours()
    const openHour = 12,
        closeHour = 22
    const isOpen = hour >= openHour && hour < closeHour

    isOpen ? console.log('We are open') : console.log('We are closed')

    return (
        <footer className='footer'>
            <p>{new Date().toLocaleTimeString()}</p>
        </footer>
    )
}

function Pizza() {
    return (
        <div>
            <img src='pizzas/focaccia.jpg' alt='Focaccia' />
            <h3>Pizza</h3>
            <p>sfafds</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
