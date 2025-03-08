import React, { useState } from 'react';
import axios from 'axios';
import "./AddClient.css"; // Assurez-vous d'ajouter ce fichier CSS

function AddClient() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/clients', {
                name, email, phone, address
            });
            alert('Client ajouté');
        } catch (error) {
            alert('Erreur lors de l\'ajout du client');
        }
    };

    return (
        <div className="form-container">
            <h2>Ajouter un Client</h2>
            <form onSubmit={handleSubmit} className="client-form">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom"
                    className="input-field"
                />

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="input-field"
                />

                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Téléphone"
                    className="input-field"
                />

                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Adresse"
                    className="input-field"
                />
                
                <button type="submit" className="submit-btn">Ajouter Client</button>
            </form>
        </div>
    );
}

export default AddClient;
