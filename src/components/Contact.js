import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import emailjs from 'emailjs-com';
import ButtonContainer1 from './ButtonConatiner1';

const Contact = () => {
  const { theme } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    console.log("Validation Started");
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    console.log("Validation Done");
    return newErrors;
  };

  const handleSubmit = async (e) => {
    console.log("Submit Started");
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, send email using EmailJS
      try {
        console.log("Form is valid. Sending email...");

        const templateParams = {
          to_name:"Ayush Chauhan",
          from_name: formData.name,
          from_email: formData.email, // Using the formData email as the sender's email
          subject: formData.subject,
          message: formData.message,
        };

        const result = await emailjs.send(
          'service_v6ucodg', // Replace with your EmailJS service ID
          'template_rbzuvls', // Replace with your EmailJS template ID
          templateParams,
          'Q1TMhQLW1-PKj-MCJ' // Replace with your EmailJS user ID
        );

        if (result.status === 200) {
          setMessageSent(true);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          alert('Message sent successfully!');
        } else {
          alert('Failed to send message. Please try again later.');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the message.');
      }
    } else {
      console.log("Validation Errors", newErrors);
      setErrors(newErrors);
    }

    setIsSubmitting(false);
  };

  return (
    <div className={`flex flex-col px-4 items-center justify-center gap-6`}>
      <h1 className={`flex flex-row items-center mt-[50px] justify-center text-[40px] gap-2  lg:mt-10 font-black my-5`}>
        Let's <span className={`${theme === 'light' ? 'text-lightTheme' : 'text-darkTheme'}`}>Talk</span>
      </h1>
      <div className={`w-[100%] flex flex-col items-center`}>
        <h1 className={`w-[100%] lg:w-[60%] font-bold`}>
          <span>On Social Network:</span>
        </h1>
        <ButtonContainer1 />
      </div>

      <div className={`w-[100%] flex flex-col items-center`}>
        <h1 className='w-[100%] lg:w-[60%] font-bold'>
          <span>Send Your Message:</span>
        </h1>

        <form onSubmit={handleSubmit} className="w-[100%] lg:px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto flex flex-col lg:items-center lg:justify-start">
          <div className={`flex flex-col lg:flex-row lg:gap-2 w-[100%] lg:w-[800px]`}>
            <div className={`mb-4 box p-2 rounded-3xl w-[100%] lg:w-[400px] ${theme === 'light' ? 'box' : 'bg-gray-700'}`}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                className={`bg-transparent font-semibold border-none w-full py-2 px-3 text-${theme === 'light' ? 'greyText' : 'lightBg'} leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>

            <div className={`mb-4 box p-2 rounded-3xl w-[100%] lg:w-[400px] ${theme === 'light' ? 'box' : 'bg-gray-700'}`}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder='Enter your Email'
                onChange={handleChange}
                className={`bg-transparent font-semibold border-none w-full py-2 px-3 text-${theme === 'light' ? 'greyText' : 'lightBg'} leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
          </div>

          <div className={`flex flex-col lg:flex-row gap-2 w-[100%] lg:w-[800px]`}>
            <div className={`mb-4 box p-2 rounded-3xl w-[100%] lg:w-[600px] ${theme === 'light' ? 'box' : 'bg-gray-700'}`}>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder='Enter Subject of the Message'
                value={formData.subject}
                onChange={handleChange}
                className={`bg-transparent font-semibold border-none w-full py-2 px-3 text-${theme === 'light' ? 'greyText' : 'lightBg'} leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.subject && <p className="text-red-500 text-xs italic">{errors.subject}</p>}
            </div>
          </div>

          <div className={`flex flex-col lg:flex-row gap-2 w-[100%] lg:w-[800px]`}>
            <div className={`my-4 box p-2 rounded-3xl w-[100%] lg:w-[800px] ${theme === 'light' ? 'box' : 'bg-gray-700'}`}>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder='Enter Your Message'
                className={`bg-transparent font-semibold border-none w-full py-2 px-3 text-${theme === 'light' ? 'greyText' : 'lightBg'} leading-tight focus:outline-none focus:shadow-outline`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
            </div>
          </div>

          <div className="flex items-center justify-between box2 p-2 mx-auto rounded-3xl">
            <button
              type="submit"
              className={`text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline ${theme === 'light' ? 'bg-lightTheme' : 'bg-darkTheme'}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>

        </form>

        {messageSent && <p className="text-green-500 text-lg mt-4">Message sent successfully!</p>}
      </div>
    </div>
  );
}

export default Contact;
