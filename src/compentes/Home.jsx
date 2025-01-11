import { Link } from 'react-router-dom';
import { bazarLists } from '../bazar'
import Menu from './Menu.jsx';
import Contact from './Contact.jsx';
import Navbar from './Navbar.jsx';
import image from '../accets/bazar-accueil-img.jpg';
function Home() {
  
  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-white z-50 ">
      <Navbar/>
      </div>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 items-center">
          <div>
              <h2 className="text-3xl font-bold mb-4">Boutique de Issam et décoration Marocaine</h2>
              <p className="text-lg mb-6">
                  Bienvenue dans mon oasis en ligne, où l'essence même du Maroc s'anime à travers une collection soigneusement sélectionnée d'articles emblématiques et authentiques.
              </p>
              <Link to='/' className="bg-black text-white py-2 px-4 text-lg font-semibold rounded hover:bg-gray-800">Voir Nos Produits</Link>
          </div>
          <div className="flex justify-center">
              <img src={image} alt="Souk Marocain" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
      </main>
      <h1 className='text-3xl my-5'><strong>Nos Produits :</strong>  </h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-5 gap-5'>
        {bazarLists.map((product,key)=> 
          <Menu key={key} data={product} />
         )}
      </div>
    </div>
  )
}

export default Home