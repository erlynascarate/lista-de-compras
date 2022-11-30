import { useState, useEffect } from 'react'
import '@styles/Header.css'

const Header = ({ children }) => {
    const [online, setOnline] = useState(navigator ? navigator.onLine : false)

    useEffect(() => {
        if (!window) return

        window.addEventListener('online', goOnline)
        window.addEventListener('offline', goOffline)

        return () => {
            window.removeEventListener('online', goOnline)
            window.removeEventListener('offline', goOffline)
        }
    })

    const goOnline = () => {
        setOnline(true)
    }

    const goOffline = () => {
        setOnline(false)
    }

    const notification = async () => {
        if (!('Notification' in window || !('serviceWorker' in navigator))) {
            return alert('Tu navegador no soporta notificaciones D:')
        }

        if (Notification.permission === 'default') {
            await Notification.requestPermission()
        }

        if (Notification.permission === 'blocked') {
            return alert('Bloqueaste la notificaciones unu')
        }

        if (Notification.permission === 'granted') {
            showNotification()
        }
    }

    const showNotification = async () => {
        const registration = await navigator.serviceWorker.getRegistration()
        if (!registration) return alert('No hay Service Worker Únú')

        registration.showNotification('Esta es la lista :)', {
            body: 'Ohh, algo nuevo que da luz. Siiiiii',
            vibrate: [1000, 500, 1000],
        })
    }

    return (
        <header className='header'>
            <h1 lang='en' className='header__title' onClick={notification}>
                Out of Water {!online && 'Offline'}
            </h1>
            {children}
        </header>
    )
}

export default Header
