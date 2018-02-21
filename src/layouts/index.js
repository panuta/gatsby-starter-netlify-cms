import React from 'react'
import Link from 'gatsby-link';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../../scss/styles.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet  title='Panu Tangchalermkul'>
      <html lang='en' />
      <meta charSet='utf-8' />
    </Helmet>
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link className='nav-link' to='/' activeClassName='active' exact={true}>HOME</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/contact/' activeClassName='active'>CONTACT</Link>
        </li>
      </ul>

    </nav>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
