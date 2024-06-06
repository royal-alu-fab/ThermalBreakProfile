import React from 'react';
import '../styles/Corevalues.css';
import customersatisfaction from '../assets/customersatisfaction.png';

const coreValues = [
  { image: customersatisfaction, title: 'Customer Satisfaction', description: 'We value our customers by providing services that consistently exceed their expectations.'},
  { title: 'Commitment', description: 'We deliver what we promise and add value beyond what is expected.' },
  { title: 'Continuous Improvement', description: 'We are committed to improving our processes and services continuously.' },
  { title: 'Risk Taking', description: 'We encourage and support calculated risk-taking.' },
  { title: 'Empowerment', description: 'We value people and encourage their development and reward their performance.' },
  { title: 'Timely Delivery', description: 'We are dedicated to delivering on time, every time.' },
  { title: 'Team Work', description: 'We believe in working together to achieve common goals.' },
  { title: 'Mutual Respect', description: 'We maintain a positive environment by treating everyone with dignity and respect.' },
  { title: 'Trust', description: 'We act with integrity and can be trusted to do the right thing.' },
  { title: 'Social Responsibility', description: 'We actively engage in contributing to the community and environment.' },
  { title: 'Health & Safety', description: 'We are committed to ensuring a safe and healthy working environment.' },
  { title: 'Environment', description: 'We value our environment and are committed to its protection and sustainability.' },
];

const CoreValues = () => {
  return (
    <div className="core-values-container">
      <h2>Our Core <span>Values</span></h2>
      <p className='paragraph'>Our core values are based around Integrity, Flexibility, Reliability, Financial Stability and our ongoing learning and experience allows us to share this with our customers and suppliers alike.</p>
      <div className="values-grid">
        {coreValues.map((value, index) => (
          <div key={index} className="value-card">
            {/* <img src={value.image} alt={value.name} /> */}
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;

