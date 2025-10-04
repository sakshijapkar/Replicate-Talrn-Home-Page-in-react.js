import React, { useState } from 'react';

const industries = ['Healthcare', 'Automotive', 'Banking', 'Capital Markets', 'Travel', 'Digital Commerce'];

const Features = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(''); // Still track selection if needed

  return (
    <section>
      <h2>Augment your team with highly-skilled iOS Developers</h2>
      <p>Scale your team with Talrn's immediately available resources</p>
      <p>Find pre-vetted iOS developers that have previously worked in the same industry instantly.</p>
      <a href="https://talrn.com/profiles" className="cta-button">View Profiles</a>
      <div className="industry-grid"> {/* New grid class */}
        <h3>What is your industry?</h3>
        {industries.map((industry) => (
          <button
            key={industry}
            className={`industry-btn ${selectedIndustry === industry ? 'selected' : ''}`}
            onClick={() => setSelectedIndustry(industry)}
          >
            {industry}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Features;