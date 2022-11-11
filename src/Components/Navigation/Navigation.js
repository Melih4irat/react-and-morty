import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaRandom, FaStar, FaUserAlt } from "react-icons/fa";

export default function Navigation() {
  return (
    <Navbar>
      <NavList>
        <NavItem>
          <StyledNavLink to="/">
            <FaHome />
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/">
            <FaRandom />
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/">
            <FaStar />
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/">
            <FaUserAlt />
          </StyledNavLink>
        </NavItem>
      </NavList>
    </Navbar>
  );
}

const Navbar = styled.nav`
  width: 100vw;
  height: 80px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;
const NavList = styled.ul`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const NavItem = styled.li`
  list-style-type: none;
  background-color: blue;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.17);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  :hover {
    background: rgba(240, 240, 240, 0.25);
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 22px;

  :hover {
    color: blue;
  }
`;
