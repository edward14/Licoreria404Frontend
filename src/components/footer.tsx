import React, { useState, useEffect } from "react";

const Footer: React.FC = () => {
    const [showFooter, setShowFooter] = useState(false);

    const handleScroll = () => {
        const bottomOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;
        setShowFooter(bottomOfPage);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer className={`fixed bottom-0 left-0 w-full p-4 bg-gray-100 text-gray-600 text-center ${showFooter ? 'visible' : 'invisible'}`}>
            <p> 2024 licoreria 404
                el exceso de alcohol es perjudicial para la salud
                prohibase su venta a menores de edad
            </p>
        </footer>
    );
};

export default Footer;