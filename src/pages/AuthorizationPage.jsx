import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorizationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('message', (event) => {
      console.log('Message event received:', event.data);
      const { wabaId, phoneId } = event.data;
      if (wabaId && phoneId) {
        localStorage.setItem('wabaId', wabaId);
        localStorage.setItem('phoneId', phoneId);
      }
    });
  }, []);

  const fbLoginCallback = (response) => {
    console.log('Facebook login response:', response);
    if (response.authResponse) {
      const code = response.authResponse.code;
      const wabaId = localStorage.getItem('wabaId');
      const phoneId = localStorage.getItem('phoneId');
      console.log('Sending data to backend:', { code, wabaId, phoneId });
      fetch('/api/whatsapp-integration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, wabaId, phoneId }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Backend response:', data);
        navigate('/dashboard');
      })
      .catch(error => {
        console.error('Error during backend call:', error);
      });
    }
  };

  const launchWhatsAppSignup = () => {
    console.log('Launching WhatsApp signup');
    FB.login(fbLoginCallback, {
      config_id: '810119337854999', // configuration ID goes here
      response_type: 'code',
      override_default_response_type: true,
      extras: {
        setup: {},
        featureType: '',
        sessionInfoVersion: '2',
      }
    });
  };

  return (
    <div className="container">
      <h1>Authorize Meta Business</h1>
      <p>Please authorize access to your Meta business account to continue.</p>
      <button
        onClick={launchWhatsAppSignup}
        style={{
          backgroundColor: '#1877f2',
          border: 0,
          borderRadius: '4px',
          color: '#fff',
          cursor: 'pointer',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontSize: '16px',
          fontWeight: 'bold',
          height: '40px',
          padding: '0 24px',
        }}
      >
        Login with Facebook
      </button>
    </div>
  );
};

export default AuthorizationPage;
