import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

const Container = ({ children }) => <div className="container">{children}</div>;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.array]).isRequired,
};

export default Container;
