import React from 'react';
import '../../App.css';

export default function Services() {
  const labelStyle = {
    minWidth: '150px', // Adjust the width as needed
    display: 'inline-block',
    fontWeight: 'bold',

  };

  return (
    <>
      <h1>Data Diri</h1>
      <p>
        <span style={labelStyle}>Nama</span>: Irsyad Aflaha Shobirin <br />
        <span style={labelStyle}>NIM</span>: 2204130 <br />
        <span style={labelStyle}>Tanggal Lahir</span>: 12 Juni 2004 <br />
        <span style={labelStyle}>Golongan Darah</span>: B <br />
      </p>

      <h1>Riwayat Pendidikan</h1>
      <p>
        <span style={labelStyle}>SD</span>: SD Negeri 146 Gumuruh <br />
        <span style={labelStyle}>SMP</span>: SMP Budi Utomo Perak <br />
        <span style={labelStyle}>SMA</span>: SMA Negeri 5 Bandung <br />
      </p>
    </>
  );
}
