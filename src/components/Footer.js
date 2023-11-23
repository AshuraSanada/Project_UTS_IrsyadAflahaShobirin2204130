import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Terima kasih telah berkunjung ke website saya.
        </p>
        <p className='footer-subscription-text'>
          Jangan lupa follow
        </p>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              UPI.EDU
              <i class='' />
            </Link>
          </div>
          <small class='website-rights'>ASH © 2023</small>
          <div class='social-icons'>
          <a href='https://www.facebook.com/profile.php?id=100009902855566/'
               class='social-icon-link facebook'>
                <i class='fab fa-facebook' />
               </a>
            <a href='https://www.instagram.com/ash_brine//'
               class='social-icon-link instagram'>
                <i class='fab fa-instagram' />
               </a>
            <a href='https://www.youtube.com/channel/UCw4dGzz-LP5OucU0k6nwKXQ/'
               class='social-icon-link youtube'>
                <i class='fab fa-youtube' />
               </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
