import React, { useState, useEffect } from 'react';
import '@styles/Header.css';
import Nav from '@components/Nav';

const Header = () => {
    const [online, setOnline] = useState(navigator ? navigator.onLine : false);

    useEffect(() => {
        if (!window) return;

        window.addEventListener('online', goOnline);
        window.addEventListener('offline', goOffline);

        return () => {
            window.removeEventListener('online', goOnline);
            window.removeEventListener('offline', goOffline);
        };
    });

    const goOnline = () => {
        setOnline(true);
    };

    const goOffline = () => {
        setOnline(false);
    };

    const share = (event) => {
        event.preventDefault();
        if (!navigation.share) {
            alert('Tu naveganor no soporta la Web Share API');
            return;
        }
        navigator
            .share({
                title: 'Mis compras',
                text: 'Tengo muche que comprar',
                url: document.location.href,
            })
            .then(() => alert('Contenido compartido :)'))
            .catch(() => alert('Hubo un error'));
    };

    const notification = async () => {
        if (!('Notification' in window || !('serviceWorker' in navigator))) {
            return alert('Tu navegador no soporta notificaciones D:');
        }

        if (Notification.permission === 'default') {
            await Notification.requestPermission();
        }

        if (Notification.permission === 'blocked') {
            return alert('Bloqueaste la notificaciones unu');
        }

        if (Notification.permission === 'granted') {
            showNotification();
        }
    };

    const showNotification = async () => {
        const registration = await navigator.serviceWorker.getRegistration();
        if (!registration) return alert('No hay Service Worker Únú');

        registration.showNotification('Esta es la lista :)', {
            body: 'Ohh, algo nuevo que da luz. Siiiiii',
            vibrate: [1000, 500, 1000],
        });
    };

    return (
        <header className="header">
            <h1 className="header__title" onClick={notification}>
                Out of Water {!online && 'Offline'}
            </h1>
            <button className="header__btn" onClick={share}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                    <path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z" />
                </svg>
            </button>
            <Nav />
        </header>
    );
};

export default Header;
