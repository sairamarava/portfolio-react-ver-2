import emailjs from 'emailjs-com';

export const sendEmail = (templateParams) => {
  return emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    templateParams,
    'YOUR_USER_ID'
  );
};