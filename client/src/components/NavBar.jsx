import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import './static/NavBar.css'


export const NavBarContainer = styled.nav``;

export const NavList = styled.ul``;

export const NavItem = styled.li``;

const StyledLink = styled(Link)``

const NavBar = () => {
    return ( 
    //     <NavBarContainer>
    //         <NavList>
    //             <NavItem>
    //                 <StyledLink to="/">Home</StyledLink>
    //             </NavItem>
    //             <NavItem>
    //                 <StyledLink to="/triptable">Results</StyledLink>
    //             </NavItem>
    //         </NavList>
    //     </NavBarContainer>
    // );

    <ul>
        <NavBarContainer>
            <NavList>
                <li>
                    <img src="/src/components/static/emit_logo.jpg" alt="Emit logo" className="logo"/>
                </li>
                <li className="header-page-name">
                    <NavItem>
                        <StyledLink to="/">Home</StyledLink>
                    </NavItem>
                </li>
                <li className="header-page-name">
                    <NavItem>
                        <StyledLink to="/triptable">Results</StyledLink>
                    </NavItem>
                </li>
            </NavList>
        </NavBarContainer>
    </ul>
    )
}

export default NavBar