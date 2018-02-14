import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faLongArrowRight from '@fortawesome/fontawesome-pro-regular/faLongArrowRight';
import faRocket from '@fortawesome/fontawesome-pro-light/faRocket';
import faPencilAlt from '@fortawesome/fontawesome-pro-light/faPencilAlt';


export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className={'container-fluid page-index'}>
          <header>
            <div className={'welcome'}>Welcome,</div>
            <h1>This is a website of <em>Panu Tangchalermkul</em></h1>
          </header>

          <section className={'professions'}>
            <p>Some people may know me as</p>
            <ul>
              <li><em>Python Developer</em> I've started learning it to create a website using Django framework. At that time, Django had just released version 0.96 and that was 10 years ago. Time flies.</li>
              <li><em>Fullstack Web Developer</em> Because you can't just write Python to create a complete website, I have to be able to write HTML, CSS and Javascript myself. </li>
            </ul>
            <div className={'link-fullprofile'}>
              <Link to="/page-2/">See Full Profile</Link><FontAwesomeIcon icon={faLongArrowRight} />
            </div>
          </section>

          <section className={'projects'}>
            <h2><FontAwesomeIcon icon={faRocket} /> PROJECTS</h2>
            <p>I always have ideas to do something</p>
            <div className={'row'}>
              <div className={'col-md-4'}>
                <div className={'project-box'}>
                  <Link><h3>Developer's Notebook</h3></Link>
                  <p>sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Quam diu etiam furor iste tuus nos eludet?</p>
                </div>
              </div>
            </div>
          </section>

          <section className={'writings'}>
            <h2><FontAwesomeIcon icon={faPencilAlt} /> WRITINGS</h2>
            <ul>
              {posts
                .filter(post => post.node.frontmatter.templateKey === "blog-post")
                .map(({ node: post }) => (
                  <li key={post.id}>
                    <div className={'category'}>Javascript</div>
                    <Link to={post.frontmatter.path}>
                      <h3>{post.frontmatter.title}</h3>
                    </Link>
                    <p dangerouslySetInnerHTML={{ __html: post.frontmatter.description }} />
                    <hr/>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
