import React from 'react';

const Accueil = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900">
            <header className="w-full flex justify-between items-center p-6 border-b">
                <div className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Maroc Bazar Logo" className="h-10" />
                    <h1 className="text-xl font-bold">MAROC BAZAR</h1>
                </div>
                <nav className="flex space-x-6">
                    <a href="#" className="text-black font-semibold">Accueil</a>
                    <a href="#">Offres Fin d'Année</a>
                    <a href="#">Mode et Beauté</a>
                    <a href="#">Art de Table</a>
                    <a href="#">Décoration</a>
                    <a href="#">Contact</a>
                </nav>
                <div className="flex space-x-4">
                    <button>🔍</button>
                    <button>👤</button>
                    <button>🛒</button>
                </div>
            </header>

            <main className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Boutique d'artisanat et décoration Marocaine</h2>
                    <p className="text-lg mb-6">
                        Bienvenue dans notre oasis en ligne, où l'essence même du Maroc s'anime à travers une collection soigneusement sélectionnée d'articles emblématiques et authentiques.
                    </p>
                    <a href="#" className="bg-black text-white py-2 px-4 text-lg font-semibold rounded hover:bg-gray-800">Voir Nos Produits</a>
                </div>
                <div className="flex justify-center">
                    <img src="/souk-image.jpg" alt="Souk Marocain" className="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
            </main>
        </div>
    );
};

export default Accueil;
