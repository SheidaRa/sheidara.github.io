// src/components/Section.js

import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ id, children }) => {
  return (
    <section id={id} className="section">
      <div className="section-content">
        <div className="content">{children}</div>
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
