import React from 'react';
import '../css/AboutUs.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet for creating custom icons
import 'leaflet/dist/leaflet.css';

// Import your custom pin image
import pinImage from './pin.jpg'; // Adjust the path as needed

const AboutUs = () => {
  // Create a custom icon using the pin image
  const customIcon = new L.Icon({
    iconUrl: pinImage,
    iconSize: [35, 45], // Size of the icon [width, height]
    iconAnchor: [17, 45], // Anchor point of the icon [x, y]
    popupAnchor: [0, -40], // Anchor point of the popup [x, y]
  });

  return (
    <div className="about-us">
      <main className="main">
        <section className="intro">
          <h1><span>Welcome</span> to FITCLUB</h1>
          <p>FitClub is a community-driven fitness club dedicated to helping individuals reach their health and wellness goals.</p>
        </section>
        <section className="offerings">
          <h2><span>What</span> We Offer</h2>
          <ul>
            <li>Classes</li>
            <li>Personal Training</li>
            <li>Modern Equipment</li>
          </ul>
        </section>
        <section className="mission">
          <h2>Our <span>Mission</span></h2>
          <p>We aim to provide a positive, supportive space for all fitness levels and promote physical and mental well-being.</p>
          <MapContainer center={[12.9716, 77.5946]} zoom={13} style={{ height: '300px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[12.9716, 77.5946]} icon={customIcon}> {/* Use custom icon here */}
              <Popup>
                FitClub is located here!
              </Popup>
            </Marker>
          </MapContainer>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
