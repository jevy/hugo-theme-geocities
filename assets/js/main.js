// Geocities Theme - JavaScript
// Retro effects and visitor counter

(function() {
  'use strict';

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initVisitorCounter();
    initStarEffects();
  });

  // Fake visitor counter that remembers visits
  function initVisitorCounter() {
    const counter = document.getElementById('visitor-count');
    if (!counter) return;

    // Get or initialize visitor count from localStorage
    let count = localStorage.getItem('geocities-visitor-count');

    if (!count) {
      // Start with a fun retro number
      count = Math.floor(Math.random() * 9000) + 1000;
    } else {
      count = parseInt(count, 10);
    }

    // Increment on each visit (check session)
    const visited = sessionStorage.getItem('geocities-visited');
    if (!visited) {
      count++;
      sessionStorage.setItem('geocities-visited', 'true');
      localStorage.setItem('geocities-visitor-count', count.toString());
    }

    // Format with leading zeros for that classic look
    counter.textContent = count.toString().padStart(6, '0');
  }

  // Add random twinkling to stars
  function initStarEffects() {
    const starsContainer = document.querySelector('.stars-container');
    if (!starsContainer) return;

    // Create occasional shooting star
    setInterval(createShootingStar, 8000);
  }

  function createShootingStar() {
    const starsContainer = document.querySelector('.stars-container');
    if (!starsContainer) return;

    const star = document.createElement('div');
    star.style.cssText = `
      position: absolute;
      width: 3px;
      height: 3px;
      background: white;
      border-radius: 50%;
      top: ${Math.random() * 30}%;
      left: ${Math.random() * 100}%;
      box-shadow: 0 0 6px 2px white;
      animation: shooting-star 1s linear forwards;
    `;

    starsContainer.appendChild(star);

    // Remove after animation
    setTimeout(() => star.remove(), 1000);
  }

  // Add shooting star animation dynamically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shooting-star {
      0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translate(200px, 200px) scale(0);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Console easter egg
  console.log('%c Welcome to GeoCities! ',
    'background: linear-gradient(90deg, #FF00FF, #00FFFF); color: #000; font-size: 20px; font-weight: bold; padding: 10px;');
  console.log('%c Best viewed with Netscape Navigator 4.0 at 800x600 resolution! ',
    'color: #00FF00; font-family: "Courier New";');

})();
