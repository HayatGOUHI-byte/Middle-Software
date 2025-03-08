// src/Conversations.js
import React from 'react';
import './conversation.css'; // Importation du fichier CSS
import { Link } from 'wouter';

function Conversation() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">AHDIGITAL<br />AUTOMATION</div>
        <div className="location">SAAS<br />AGADIR, AGADIR</div>
        <input type="text" className="search-bar" placeholder="Search (ctrl K)" />
        <nav className="nav-menu">
          <a href="#"><i className="fas fa-th"></i> Launchpad</a>
          <Link to="/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
          <Link to="/conversation" className="active"><i className="fas fa-comments"></i> Conversations</Link>
          <a href="#"><i className="fas fa-calendar"></i> Calendars</a>
          <a href="#"><i className="fas fa-user"></i> Contacts</a>
          <a href="#"><i className="fas fa-chart-line"></i> Opportunities</a>
          <a href="#"><i className="fas fa-credit-card"></i> Payments</a>
          <a href="#"><i className="fas fa-bullhorn"></i> Marketing</a>
          <a href="#"><i className="fas fa-cogs"></i> Automation</a>
          <a href="#"><i className="fas fa-globe"></i> Sites</a>
          <a href="#"><i className="fas fa-users"></i> Memberships</a>
          <a href="#"><i className="fas fa-cog"></i> Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard">
        <header>
          <h1>Conversations</h1>
          <nav className="tabs">
            <a href="#" className="active">Conversations</a>
            <a href="#">Manual Actions</a>
            <a href="#">Snippets</a>
            <a href="#">Trigger Links</a>
          </nav>
        </header>

        {/* Conversations Section */}
        <div className="conversations-container">
          <div className="conversations-list">
            <input type="text" className="search-convo" placeholder="Search" />
            <p className="no-results">0 RESULTS</p>
          </div>
          <div className="chat-window">
            <div className="empty-message">
              <i className="fas fa-search"></i>
              <p>No conversation selected</p>
            </div>
          </div>
          <div className="contact-info">
            <div className="empty-message">
              <i className="fas fa-search"></i>
              <p>No contact selected</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Conversation;
