import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../../scss/styles.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet  title="Panu Tangchalermkul">
      <html lang="en" />
      <meta charSet="utf-8" />
    </Helmet>
    <nav className={'navbar'}>
      {/*<button className={'navbar-toggler'} type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">*/}
        {/*<i className={'far fa-bars'} />*/}
      {/*</button>*/}
      <ul className={'navbar-nav'}>
        <li className={'nav-item active'}>
          <a className={'nav-link'} href="#">HOME</a>
        </li>
        <li className={'nav-item'}>
          <a className={'nav-link'} href="#">CONTACT</a>
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
