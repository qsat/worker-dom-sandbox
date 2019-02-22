import React from 'react';
import styled from 'styled-components';
import { item, container } from './index.css';

const NavContainer: React.FunctionComponent<any> = ({children}) => (
  <div className={container}>{children}</div>
)

const NavItem: React.FunctionComponent<any> = ({children}) => (
  <a 
    href="#"
    className={item}>
    {children}
  </a>
)

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return <NavContainer>
    <NavItem>aaa</NavItem>
    <NavItem>bb</NavItem>
    <NavItem>cc</NavItem>
  </NavContainer>
}

export default SimpleBottomNavigation
