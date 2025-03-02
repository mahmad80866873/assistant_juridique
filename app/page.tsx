import React from 'react';
import ReactDOM from 'react-dom/client';

const NavBar = () => (
  <nav style={{
    backgroundColor: '#1a365d',
    padding: '1rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>JurisConseil</div>
    <div style={{ display: 'flex', gap: '2rem' }}>
      <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Accueil</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
    </div>
  </nav>
);

const Hero = () => (
  <div style={{
    backgroundColor: '#f8fafc',
    padding: '4rem 2rem',
    textAlign: 'center'
  }}>
    <h1 style={{ 
      fontSize: '2.5rem',
      color: '#1a365d',
      marginBottom: '1rem'
    }}>
      Votre partenaire juridique de confiance
    </h1>
    <p style={{
      fontSize: '1.2rem',
      color: '#4a5568',
      marginBottom: '2rem',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      Des solutions juridiques sur mesure pour protéger vos droits et vos intérêts
    </p>
    <button style={{
      backgroundColor: '#2c5282',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.375rem',
      border: 'none',
      cursor: 'pointer'
    }}>
      Consultation gratuite
    </button>
  </div>
);

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => (
  <div style={{
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    flex: '1',
    minWidth: '250px'
  }}>
    <h3 style={{
      color: '#2c5282',
      fontSize: '1.25rem',
      marginBottom: '1rem'
    }}>{title}</h3>
    <p style={{ color: '#4a5568' }}>{description}</p>
  </div>
);

const Services = () => (
  <div style={{
    padding: '4rem 2rem',
    backgroundColor: 'white'
  }}>
    <h2 style={{
      textAlign: 'center',
      color: '#1a365d',
      fontSize: '2rem',
      marginBottom: '3rem'
    }}>Nos Services</h2>
    <div style={{
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      <ServiceCard 
        title="Droit Civil"
        description="Assistance dans les litiges civils, contrats et obligations légales."
      />
      <ServiceCard 
        title="Droit des Affaires"
        description="Conseil juridique pour entreprises et professionnels."
      />
      <ServiceCard 
        title="Droit du Travail"
        description="Protection des droits des employeurs et des employés."
      />
    </div>
  </div>
);

const ContactSection = () => (
  <div style={{
    backgroundColor: '#f8fafc',
    padding: '4rem 2rem',
    textAlign: 'center'
  }}>
    <h2 style={{
      color: '#1a365d',
      fontSize: '2rem',
      marginBottom: '2rem'
    }}>Contactez-nous</h2>
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <input
        type="text"
        placeholder="Nom complet"
        style={{
          padding: '0.75rem',
          borderRadius: '0.375rem',
          border: '1px solid #e2e8f0'
        }}
      />
      <input
        type="email"
        placeholder="Email"
        style={{
          padding: '0.75rem',
          borderRadius: '0.375rem',
          border: '1px solid #e2e8f0'
        }}
      />
      <textarea
        placeholder="Message"
        style={{
          padding: '0.75rem',
          borderRadius: '0.375rem',
          border: '1px solid #e2e8f0',
          minHeight: '150px'
        }}
      />
      <button style={{
        backgroundColor: '#2c5282',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        border: 'none',
        cursor: 'pointer'
      }}>
        Envoyer
      </button>
    </div>
  </div>
);

const Footer = () => (
  <footer style={{
    backgroundColor: '#1a365d',
    color: 'white',
    padding: '2rem',
    textAlign: 'center'
  }}>
    <p>© 2024 JurisConseil - Tous droits réservés</p>
  </footer>
);

const App = () => {
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <NavBar />
      <Hero />
      <Services />
      <ContactSection />
      <Footer />
    </div>
  );
};

const container = document.getElementById('renderDiv');
if (container) {
  const root = ReactDOM.createRoot(container);
} 