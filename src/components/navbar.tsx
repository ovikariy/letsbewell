import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarProps } from 'reactstrap';
import { sections, urls } from '../modules/constants';
import logo from '../assets/images/logo.svg';
import githubLogo from '../assets/images/github.svg';
import iOSLogo from '../assets/images/iOS.svg';
import androidLogo from '../assets/images/android.png';

const NavBar = (props: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className='main-background navbar' fixed='top' dark expand="md">
      <NavbarBrand href="/" style={{ marginTop: '10px', marginLeft: '10px' }} >
        <img src={logo} className='logo' alt="BeWell App Logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} style={{ marginRight: '10px' }} />
      <Collapse isOpen={isOpen} navbar className='main-background' style={{ padding: '20px' }}>
        <Nav className="mr-auto" navbar onClick={toggle}>
          {sections.map((item) => <NavItem>
            <NavLink href={"#" + item.id}>{item.menuText}</NavLink>
          </NavItem>)
          }
        </Nav>
          {/* <a href='https://google.com' title='BeWell App Store iOS Link' rel='noreferrer noopener' target='_blank'><img src={iOSLogo} className='small-logo' alt='Apple App Store Logo' /></a> */}
          <a href={urls.GooglePlayStore} title='BeWell App Store Android Link' rel='noreferrer noopener' target='_blank'><img src={androidLogo} className='small-logo' alt='Android Play Store Logo' /></a>
          <a href={urls.GitHubAppRepo} title='BeWell App GitHub Code Repo Link' rel='noreferrer noopener' target='_blank'><img src={githubLogo} className='small-logo' alt='BeWell App GitHub Code Repo Logo' /></a>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;