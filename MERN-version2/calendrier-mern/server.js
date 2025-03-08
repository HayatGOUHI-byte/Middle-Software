const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Client= require('./models/Client');

const app = express();
app.use(cors());
app.use(express.json());

// Route test
app.get('/api/calendar', (req, res) => {
    res.json({ message: 'Aucun calendrier trouvé !' });
});

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));



//créer des routes pour les CRUD client  ****Ajouter un nouveau client****

app.post('/api/clients', async(req, res) => {
    const {name, email, phone, address} = req.body;

    try {
        const newClient = new Client({name, email, phone, address});
        await newClient.save();


        res.status(201).json(newClient);
    }catch (err){
        res.status(400).json({message: err.message});
    }
});



//Obtenir tous les clients ****
app.get('/api/clients', async(req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    }catch (err) {
        res.status(400).json({ message: err.message });
    }
});



//Route pour obtenir un client en se basant sur son ID 
app.get('/api/clients/:id', async(req, res) => {
    try {
        const client = await Client.findById(req.params.id);
         if (!client) return res.status(404).json({ message: 'Client non trouvé' });
        res.status(200).json(client);

    }catch(err){
        res.status(400).json({message: err.message});
    }
})



//la connexion à la base de données 

// Connecter à MongoDB
mongoose.connect('mongodb://localhost:27017/SaaS', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connecté à MongoDB'))
.catch((err) => console.log('Erreur de connexion à MongoDB:', err));