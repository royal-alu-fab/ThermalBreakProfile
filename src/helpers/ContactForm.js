import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xkndlddw");
  if (state.succeeded) {
      return <p>Thanks for reaching out to us!! Will contact you soon!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        required
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />

      <label htmlFor="contactNumber">
        Contact Number
      </label>
      <input
        id="contactNumber"
        type="tel"
        name="contactNumber"
        required
      />
      <ValidationError
        prefix="Contact Number"
        field="contactNumber"
        errors={state.errors}
      />

      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <label htmlFor="options">
        Select an Option
      </label>
      <select id="options" name="options">
        <option value='product1'>Thermal Break Profile</option>
        <option value='product2'>Thermal Break Aluminium Profile</option>
        <option value='product3'>Aluminium Extrusion</option>
        <option value='product4'>HVAC Solutions</option>
        <option value='product5'>Powder Coating</option>
        <option value='product5'>Wooden Coating</option>
      </select>
      <ValidationError
        prefix="Options"
        field="options"
        errors={state.errors}
      />

      <label htmlFor="message">
        Your Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
