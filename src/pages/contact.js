import React from 'react';
import Helmet from 'react-helmet';

export default class ContactPage extends React.Component {

  render() {
    const { data } = this.props;

    return (
      <section className="section">
        <Helmet>
          <body className='page-contact' />
        </Helmet>

        <div className={'container-fluid'}>
          <header>
            <h1>Contact</h1>
          </header>

          <main>
            <ul>
              <li>
                <div className='purpose'>For career opportunity, general inquiry, or just saying hello</div>
                <div className='contact'>Send an email to me at <a href="mailto:panuta@gmail.com">panuta@gmail.com</a></div>
              </li>
              <li>
                <div className='purpose'>If we have ever met and want to continue our friendship</div>
                <div className='contact'>Add me as a friend at <a href="http://www.facebook.com/panuta">Facebook</a></div>
              </li>
              <li>
                <div className='purpose'>For unsolicited message, urgent request from Nigerian Prince, or intriguing business deals</div>
                <div className='contact'>Send your proposal to me at <a href="mailto:panuta+trash@gmail.com">panuta+trash@gmail.com</a></div>
              </li>
            </ul>
          </main>
        </div>
      </section>
    );
  }
}
