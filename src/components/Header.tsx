import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <div>
        <h1>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
