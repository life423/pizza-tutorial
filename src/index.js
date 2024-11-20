import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import pizzaData from './data'

function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Company</h1>
        </header>
    )
}
function Menu() {
    return (
        <main className='menu'>
            <h2>Menu</h2>
            {pizzaData.map(({ name, ingredients, photoName, price }) => (
                <Pizza
                    key={name}
                    name={name}
                    ingredients={ingredients}
                    photoName={photoName}
                    price={price}
                />
            ))}
        </main>
    )
}

function Pizza({ name, ingredients, photoName, price }) {
    return (
        <div className='Pizza'>
            <img src={photoName} alt={name} />
            <h3>
                {name} ${price}
            </h3>
            <p>{ingredients}</p>
        </div>
    )
}

function Footer() {
    const hour = new Date().getHours()
    const openHour = 12
    const closeHour = 22
    const isRestaurantOpen = hour >= openHour && hour <= closeHour

    return (
        <footer className='footer'>
            <p>
                {new Date().toLocaleTimeString()}{' '}
                {isRestaurantOpen ? (
                    <p>'We are open'</p>
                ) : (
                    <p>'We are closed'</p>
                )}
            </p>
        </footer>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
