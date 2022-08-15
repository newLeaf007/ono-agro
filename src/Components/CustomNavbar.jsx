import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Tooltip,
} from "reactstrap";
import { NavLink as ReactLink } from "react-router-dom";
import onoLogo from './images/onoagro.png';

function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [makhanatooltipOpen, setMakhanaTooltipOpen] = useState(false);
  const [maizetooltipOpen, setMaizeTooltipOpen] = useState(false);

  const [blackCardemomtooltipOpen, setBlackCardemonTooltipOpen] =
    useState(false);
  const [wheattooltipOpen, setWheatTooltipOpen] = useState(false);
  const [flextooltipOpen, setflexTooltipOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" expand="md">
        <NavbarBrand tag={ReactLink} to="/">
          <img
            alt="logo"
            src={onoLogo}
            style={{
              height: 50,
              width: 150,
            }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/about-us">About Us</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink tag={ReactLink} to ="/contact">Contact Us</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem id="MakhannaTooltip" tag={ReactLink} to="/makhana">Makhana</DropdownItem>
                <Tooltip
                  isOpen={makhanatooltipOpen}
                  placement="auto"
                  target="MakhannaTooltip"
                  toggle={() => {
                    setMakhanaTooltipOpen(!makhanatooltipOpen);
                  }}
                >
                  All about getting healthy with nuts
                </Tooltip>
                <DropdownItem id="MaizeTooltip" tag={ReactLink} to="/maize">Maize</DropdownItem>
                <Tooltip
                  isOpen={maizetooltipOpen}
                  placement="auto"
                  target="MaizeTooltip"
                  toggle={() => {
                    setMaizeTooltipOpen(!maizetooltipOpen);
                  }}
                >
                  Get Healthy Cereals
                </Tooltip>
                <DropdownItem id="BlackCardemonTooltip" tag={ReactLink} to="/BlackCardomon">
                  Black Cardemon
                </DropdownItem>
                <Tooltip
                  isOpen={blackCardemomtooltipOpen}
                  placement="auto"
                  target="BlackCardemonTooltip"
                  toggle={() => {
                    setBlackCardemonTooltipOpen(!blackCardemomtooltipOpen);
                  }}
                >
                  Explore our collection of fully designed components
                </Tooltip>
                <DropdownItem id="WheatTooltip" tag={ReactLink} to="/Wheat">Wheat</DropdownItem>
                <Tooltip
                  isOpen={wheattooltipOpen}
                  placement="auto"
                  target="WheatTooltip"
                  toggle={() => {
                    setWheatTooltipOpen(!wheattooltipOpen);
                  }}
                >
                  Know closely your everyday food
                </Tooltip>
                <DropdownItem id="FlexSeesTooltip" tag={ReactLink} to="/flax">Flex Seed</DropdownItem>
                <Tooltip
                  isOpen={flextooltipOpen}
                  placement="auto"
                  target="FlexSeesTooltip"
                  toggle={() => {
                    setflexTooltipOpen(!flextooltipOpen);
                  }}
                >
                  Make it your everyday diet
                </Tooltip>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Call Us +91 842-087-9449</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
