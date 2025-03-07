"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { toast } from "react-toastify";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import ContactInfo from './ContactInfo';


type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

const FormSection = () => {
  // Initialize formData with the correct type
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({}); // Partial<FormData> allows errors to be a subset of FormData
  
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    // Validation rules
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\+[1-9]\d{1,14}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number is invalid';
    }
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {

        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL
        

        if (!backendUrl) {
          throw new Error('Backend URL is not defined in the environment variables');
        }
        console.log('Form data being submitted:', formData);
      


        const response = await axios.post(`${backendUrl}/emails`, formData);
  
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 3000, // Close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  
        console.log('Form submitted successfully', response.data);

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          subject: '',
          message: ''
        });
      } catch (error) {
    
        toast.error('Failed to send message. Please try again.', {
          position: "top-right",
          autoClose: 3000, // Close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.error('Error sending message:', error);
      }
    } else {
      toast.error('Please fix the errors in the form before submitting.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log('Form validation failed');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhoneChange = (value?: string) => {
    setFormData({
      ...formData,
      phoneNumber: value || ''
    });
  };
  


  return (
    
    <section className="flex flex-col py-20 overflow-hidden max-container padding-container mt-16 animate-fade-in">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
      <ContactInfo/>

        {/* Section Formulaire */}
        <div className="p-8 w-full lg:w-2/3">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full border-b-2 p-2 focus:outline-none"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-gray-600">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full border-b-2 p-2 focus:outline-none"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  className="w-full border-b-2 p-2 focus:outline-none"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-600">Phone Number</label>
                <PhoneInput
                  international
                  defaultCountry="TN"
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="Enter phone number"
                  className="w-full border-b-2 p-2 focus:outline-none"
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-gray-600">Select Subject</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="General Inquiry"
                    checked={formData.subject === 'General Inquiry'}
                    onChange={handleChange}
                    className="text-red-600"
                  />
                  General Inquiry
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="subject"
                    value="Support"
                    checked={formData.subject === 'Support'}
                    onChange={handleChange}
                    className="text-red-600"
                  />
                  Support
                </label>
              </div>
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
            </div>

            <div className="mt-4">
              <label className="block text-gray-600">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="w-full border-b-2 p-2 focus:outline-none h-24"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button type="submit" className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default FormSection;