import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>IRSYAD AFLAHA SHOBIRIN</h1>
      <p>Mahasiswa Universitas Pendidikan Indonesia Program Studi Ilmu Komputer Angkatan 2022</p>
    </div>
  );
}

export default HeroSection;
