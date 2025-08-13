import { useState } from 'react';
import emailjs from 'emailjs-com';

const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (templateParams) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        setSuccess(true);
        console.log('Email sent successfully:', response);
      })
      .catch((err) => {
        setError(err);
        console.error('Failed to send email:', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { sendEmail, isLoading, error, success };
};

export default useEmailJS;