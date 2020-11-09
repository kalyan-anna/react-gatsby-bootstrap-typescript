import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'gatsby';
import { Logo } from 'components/ui-kit';

export const Header = () => (
  <header className="shadow" style={{ height: '70px' }}>
    <div className="container d-flex flex-row h-100">
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <Logo />
        <strong
          className={`text-white text-primary font-weight-bold pl-3 ${styles.title}`}
        >
          Rego Shop
        </strong>
      </Link>
    </div>
  </header>
);
