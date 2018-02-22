import React from 'react';
import Helmet from 'react-helmet';

import Lightbox from 'react-images';

export default class ProfilePage extends React.Component {

  constructor() {
    super();

    this.state = {
      backgroundStoryIsExpanded: false,
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.expandBackgroundStory = this.expandBackgroundStory.bind(this);

    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }

  expandBackgroundStory(event) {
    event.preventDefault();
    this.setState({
      backgroundStoryIsExpanded: true,
    });
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    console.log('go next');

    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  static renderBackgroundStoryContent() {
    return (
      <div>
        <p>My life and passion as being a software developer started since high school when I came to <strong>love seeing some result out of my creation</strong>. Though it's very basic, I even created a meeting room reservation systems out of <strong>C language</strong> running on MS-DOS using graphical interface. It's not a very big deal looking back but I enjoy it.</p>
        <p>Continuing on this path, I enrolled in a <strong>Software Engineering bachelor degree</strong> at Kasetsart University in Thailand. And after I graduated, I worked as a Java developer for about 2 years using <strong>Java Servlet</strong> to create a web application such as school attendance record systems, and dashboard to monitor backend systems for a telecommunications company.</p>
        <p><strong>I was enjoy writing Java language.</strong> Although it's quite verbose, the fact that it's very Object-Oriented, I always feel like I'm organizing something. When the resulting code is beautifully laid out, you'd get the same satisfaction like you successfully finished organizing your messy drawer.</p>
        <p>Year 2006, I came to US to study a master degree at Dominican University, IL. I chose <strong>Master of Science in Management Information Systems</strong> program because I like the mix of computer science and business topics. Thinking to myself that I want to be a software developer who has a wide perspective and doesn't only think like a typical programmer.</p>
        <p>Two years studying abroad, I always find side-projects to sharpen my programming skills. Still using Java Servlet to create a web app, but on the frontend side I was using <strong>GWT (Google Web Toolkit)</strong> instead. The upside is that I can use Java on both backend and frontend.</p>
        <p>Then I started getting tired with the verbosity of Java language, also I saw that people are talking about new web framework such as Rails and Django. I decided to give Rails a try first to create a restaurant recommendation website. About a week into it, I then tried with Django. Comparing between the two, I happened to like <strong>Django</strong> more maybe because <strong>Python</strong> is more similar to Java than Ruby.</p>
        <p>At that time, Django version is still 0.96, has no migrations, ugly custom user model, and very limited ORM capability. However, it's still a web framework that matches its slogan "The web framework for perfectionists with deadlines." and what I like the most about Django is that it always encourages best-practices way of doing things like Python language itself.</p>
        <p>Jump right to the present day, web technology is totally different since when I started. I'm now seeing myself using <strong>React</strong> to create a Single Page Application, writing CSS with preprocessors to create a <strong>responsive web page</strong>, optimizing page load speed, building <strong>Docker</strong> images to streamline development and deployment process, and deploying web apps on cloud services such as Linode, Digital Ocean, Amazon AWS or Google Cloud.</p>
        <p>It's quite a stack of technologies but I just love to be <strong>a web developer who can start creating something from zero</strong>, including website design and user experience (though may not be as good as a real designer).</p>
      </div>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <section className="section">
        <Helmet>
          <body className='page-profile' />
        </Helmet>

        <div className={'container-fluid'}>
          <header>
            <h1>Profile</h1>
          </header>

          <main>
            <div className='introduction'>
              <h2>Background story</h2>

              {this.state.backgroundStoryIsExpanded ? (
                <div className='content'>
                  {ProfilePage.renderBackgroundStoryContent()}
                </div>
              ) : (
                <div>
                  <svg className={'content ' + (this.state.backgroundStoryIsExpanded ? '' : 'collapsed')}>
                    <defs>
                      <mask id="mask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
                        <linearGradient id="g" gradientUnits="objectBoundingBox" x2="0" y2="1">
                          <stop stopColor="white" stopOpacity="1" offset="60%" />
                          <stop stopColor="white" stopOpacity="0" offset="1" />
                        </linearGradient>
                        <rect width="100%" height="250px" fill="url(#g)" />
                      </mask>
                    </defs>
                    <foreignObject width="100%" height="100%">
                      {ProfilePage.renderBackgroundStoryContent()}
                    </foreignObject>
                  </svg>
                  <div className='readmore'>
                    <a href='#' onClick={this.expandBackgroundStory}>Read in full</a>
                  </div>
                </div>
              )}
            </div>

            <div className='timeline'>
              <h2>Works</h2>
              <ol className='years'>
                <li className='year'>
                  <div className='number'>2018</div>
                  <ul className='entries'>
                    <li>
                      Working on React project to create financial advisor
                    </li>
                  </ul>
                </li>
                <li className='year'>
                  <div className='number'>2017</div>
                  <ul className='entries'>
                    <li>
                      Working on React project to create financial advisor

                      <div className='gallery'>
                        <a href='#' key='1' onClick={(e) => this.openLightbox(0, e)}><img src='/timeline/image1_thumb.jpg' /></a>
                        <a href='#' key='2' onClick={(e) => this.openLightbox(1, e)}><img src='/timeline/image2_thumb.jpg' /></a>
                        <a href='#' key='3' onClick={(e) => this.openLightbox(2, e)}><img src='/timeline/image3_thumb.jpg' /></a>
                        <Lightbox
                          currentImage={this.state.currentImage}
                          images={[{ src: '/timeline/image1.jpg' }, { src: '/timeline/image2.jpg' }, { src: '/timeline/image3.jpg' }]}
                          isOpen={this.state.lightboxIsOpen}
                          onClickNext={this.gotoNext}
                          onClickPrev={this.gotoPrevious}
                          onClose={this.closeLightbox}
                        />
                      </div>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </main>
        </div>
      </section>
    );
  }
}
