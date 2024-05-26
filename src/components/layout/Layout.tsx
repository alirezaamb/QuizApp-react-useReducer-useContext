import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ Children }: { Children: ReactNode }) => {
  return (
    <>
      <Header />
      <main> {Children}</main>
      <Footer />
    </>
  );
};

export default Layout;
