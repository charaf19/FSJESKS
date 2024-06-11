import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Assuming you have a logo image in the assets folder

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="flex bg-blue-600 p-2 items-center space-x-4">
          <span style={{color: "#ffffff",}}>Suivez-nous sur</span>
          <a href="https://www.facebook.com" className="text-blue-600">
          
          <i className="fab fa-facebook-f" style={{color: "#ffffff",}}></i>
          </a>
          <a href="https://www.twitter.com" className="text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com" className="text-red-600">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com" className="text-blue-700">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
        <Link to="/" className="p-4"><img src={logo} alt="University Logo" className="h-16 mr-4" /></Link>
          <div>
            <h1 className="text-2xl font-bold">FACULTÉ DES SCIENCES JURIDIQUES, ÉCONOMIQUES ET SOCIALES</h1>
            <h2 className="text-md font-semibold">KELAA SRAGHNA</h2>
          </div>
        </div>
        
        
        <div className="flex space-x-4">
            <span>Vous êtes</span>
            <Link to="/student" className="hover:underline">ETUDIANT</Link>
            <Link to="/teacher" className="hover:underline">ENSEIGNANT</Link>
            <Link to="/staff" className="hover:underline">PERSONNEL</Link>
          </div>
      </div>
      <nav className="bg-blue-600 text-white">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <Link to="/" className="hover:underline">ACCUEIL</Link>
            <Link to="/faculty" className="hover:underline">FACULTÉ</Link>
            <Link to="/courses" className="hover:underline">FORMATIONS</Link>
            <Link to="/research" className="hover:underline">RECHERCHE ET COOPÉRATION</Link>
            <Link to="/news" className="hover:underline">ACTUALITÉS</Link>
            <Link to="/contact" className="hover:underline">NOUS CONTACTER</Link>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
