import React, { useRef } from 'react'
import { Gap } from '../../components';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ij2sh1s', 'template_1586lee', form.current, 'RjP6YTZ4yUUcE9-Xl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <Gap height={120} />
      <form ref={form} onSubmit={sendEmail} className='container card p-3' style={{width: '75%'}}>
        <h2 className='text-center text-info'>Contact Form</h2>
        <div className='mb-3'>
          <label for='name' className='form-label'>Nama</label>
          <input type='text' name='name' className='form-control' id='name' />
        </div>
        <div className='mb-3'>
          <label for='email' className='form-label'>Email</label>
          <input type='email' name='email' className='form-control' id='email' />
        </div>
        <div class='mb-3'>
          <label for='message' className='form-label'>Pesan</label>
          <textarea name='message' id='message' className='form-control' style={{height: '120px'}}></textarea>
        </div>
        <button type='submit' className='btn btn-info text-white'>Submit</button>
      </form>
      <Gap height={40} />
    </div>
  );
};

export default ContactUs;