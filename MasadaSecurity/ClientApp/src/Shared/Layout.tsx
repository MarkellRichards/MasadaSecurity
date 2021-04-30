import React, { useState } from 'react';
import MobileNav from './MobileNav';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
