/**
 * Vercel Web Analytics Integration
 * This script initializes Vercel Web Analytics for the project.
 */

(function() {
  'use strict';

  // Initialize the analytics queue
  if (window.va) return;
  
  window.va = function va() {
    (window.vaq = window.vaq || []).push(arguments);
  };

  // Detect environment (production vs development)
  function detectEnvironment() {
    // In production (on Vercel), this will be production mode
    // In development (localhost), this will be development mode
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return 'development';
    }
    return 'production';
  }

  // Set the mode
  window.vam = detectEnvironment();

  // Get the script source
  // When deployed on Vercel, this path will be automatically configured
  var scriptSrc = '/_vercel/insights/script.js';

  // Create and inject the analytics script
  var script = document.createElement('script');
  script.defer = true;
  script.src = scriptSrc;
  
  // Append script to head
  var firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }

  // Log in development mode
  if (window.vam === 'development') {
    console.log('[Vercel Analytics] Running in development mode. Analytics will not send data.');
  }
})();
