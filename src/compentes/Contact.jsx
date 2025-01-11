import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Contact() {
  const navgate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log(formData);
    navgate('/')
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Nom"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="E-mail"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Numéro de téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Numéro de téléphone"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700">
            Commentaire
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Commentaire"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          Envoyer
        </button>
      </form>
    </div>
    </>
  );
}

export default Contact;
