import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarProps } from 'reactstrap';
import { sections } from '../modules/constants';
import logo from '../assets/images/logo.svg';
import githubLogo from '../assets/images/github.svg';
import iOSLogo from '../assets/images/iOS.svg';
import androidLogo from '../assets/images/android.png';

const NavBar = (props: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar style={{ height: 60 }} className='main-background' fixed='top' dark expand="md">
      <NavbarBrand href="/">
        <img src={logo} className='small-logo' alt="BeWell App Logo" />
        <span className='h1'>BE WELL</span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className='main-background'>
        <Nav className="mr-auto" navbar onClick={toggle}>
          {sections.map((item) => <NavItem>
            <NavLink href={"#" + item.id}>{item.menuText}</NavLink>
          </NavItem>)
          }
        </Nav>
        <a href='https://google.com'><img src={iOSLogo} className='small-logo' alt="Apple App Store Link" /></a>
        <a href='https://google.com'><img src={androidLogo} className='small-logo' alt="Android Play Store Link" /></a>
        <a href='https://google.com'><img src={githubLogo} className='small-logo' alt="GitHub Link" /></a>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;