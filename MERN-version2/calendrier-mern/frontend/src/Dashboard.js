import React, { useState } from 'react';
import './dashboard.css'; // Importer ton fichier CSS
import AddClient from './AddClient';
import ClientList from './ClientList'; // Importer la liste des clients

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [showClientsModal, setShowClientsModal] = useState(false); // Permet de rafraîchir la liste après ajout

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">AHDIGITAL<br />AUTOMATION</div>
        <div className="location">SAAS<br />AGADIR, AGADIR</div>
        <input type="text" className="search-bar" placeholder="Search (ctrl K)" />
        <nav className="nav-menu">
          <a href="#" className="active"><i className="fas fa-th"></i> Dashboard</a>
          <a href="#"><i className="fas fa-comments"></i> Conversations</a>
          <a href="#"><i className="fas fa-calendar"></i> Calendars</a>
          <a href="#"><i className="fas fa-address-book"></i> Contacts</a>
          <a href="#"><i className="fas fa-chart-line"></i> Opportunities</a>
          <a href="#"><i className="fas fa-credit-card"></i> Payments</a>
          <a href="#"><i className="fas fa-bullhorn"></i> Marketing</a>
          <a href="#"><i className="fas fa-cogs"></i> Automation</a>
          <a href="#"><i className="fas fa-globe"></i> Sites</a>
          <a href="#"><i className="fas fa-users"></i> Memberships</a>
          <a href="#"><i className="fas fa-cog"></i> Settings</a>
        </nav>
      </aside>

      {/* Main Dashboard */}
      <main className="dashboard">
        <header>
          <h1>Dashboard</h1>
          <div className="date-picker">
            <input type="date" value="2025-01-31" /> - 
            <input type="date" value="2025-03-02" />
          </div>
        </header>

  
        {/* Bouton pour ouvrir la popup d'ajout */}
        <button className="open-modal-btn" onClick={() => setShowModal(true)}>
          + Ajouter un client
        </button>

        {/* Bouton pour ouvrir la popup des clients */}
        <button className="open-modal-btn" onClick={() => setShowClientsModal(true)}>
           Clients disponibles
        </button>

        {/* Pop-up Ajout Client */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close-btn" onClick={() => setShowModal(false)}>&times;</span>
              <h2>Ajouter un Client</h2>
              <AddClient onClientAdded={() => setShowModal(false)} />
            </div>
          </div>
        )}

        {/* Pop-up Liste Clients */}
        {showClientsModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close-btn" onClick={() => setShowClientsModal(false)}>&times;</span>
              <h2>Liste des Clients</h2>
              <ClientList />
            </div>
          </div>
        )}

        <section className="dashboard-cards">
          <div className="card">
            <h3>Opportunity Status</h3>
            <div className="card-content">
              <i className="fas fa-search"></i>
              <p>No Data Found</p>
            </div>
          </div>

          <div className="card">
            <h3>Opportunity Value</h3>
            <div className="card-content">
              <i className="fas fa-search"></i>
              <p>No Data Found</p>
            </div>
          </div>

          <div className="card conversion-rate">
            <h3>Conversion Rate</h3>
            <div className="rate">MAD0</div>
            <p className="comparison">⬆️ 0% vs Last 31 Days</p>
            <div className="circle-chart">
              <div className="circle">
                <span>0%</span>
              </div>
            </div>
            <p>Won revenue<br /><strong>MAD0</strong></p>
          </div>
        </section>

        <section className="bottom-section">
          <div className="card locked-card">
            <h3>Funnel</h3>
            <div className="locked-content">
              <div className="locked-icon">
                <i className="fas fa-lock"></i>
              </div>
              <p>No pipeline available</p>
            </div>
          </div>

          <div className="card locked-card">
            <h3>Stage Distribution</h3>
            <div className="locked-content">
              <div className="locked-icon">
                <i className="fas fa-lock"></i>
              </div>
              <p>No pipeline available</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
