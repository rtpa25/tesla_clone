import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { useState } from 'react'
const Zoom = require('react-reveal/Zoom')

const Header = () => {
    const [sideBarVisibility, setsideBarVisibility] = useState(false)

    return (
        <Container className="fixed">
            <a href="/">
                <img src="/images/logo.svg" alt="tesla" />
            </a>
            <LeftMenu className="flex">
                <a href="/">Model S</a>

                <a href="/">Model X</a>

                <a href="/">Model 3</a>

                <a href="/">Model y</a>
            </LeftMenu>
            <RightMenu className="flex items-center">
                <a href="/">Shop</a>
                <a href="/">Tesla Account</a>
                <CustomMenu
                    onClick={() => {
                        setsideBarVisibility(true)
                    }}
                />
            </RightMenu>
            {sideBarVisibility && (
                    <BurgerNavMenu className="font-semibold bg-gray-50">
                        <CustomClose
                            onClick={() => {
                                setsideBarVisibility(false)
                            }}
                        />
                        <ul className="p-10">
                            <li>
                                <a href="/">Existing Inventory</a>
                            </li>
                            <li>
                                <a href="/">Used Inventory</a>
                            </li>
                            <li>
                                <a href="/">Trade in</a>
                            </li>
                            <li>
                                <a href="/">CyberTruck</a>
                            </li>
                            <li>
                                <a href="/">Roadster</a>
                            </li>
                            <li>
                                <a href="/">Roadster</a>
                            </li>
                            <li>
                                <a href="/">Roadster</a>
                            </li>
                            <li>
                                <a href="/">Roadster</a>
                            </li>
                        </ul>
                    </BurgerNavMenu>
            )}
        </Container>
    )
}

const BurgerNavMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    width: 30rem;

    ul {
        li {
            margin: 2rem;
            padding: 1.5rem 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
    }
`
const CustomClose = styled(CloseIcon)`
    transform: scale(1.8);
    position: fixed;
    top: 0;
    right: 0;
    margin: 2rem;
    cursor: pointer;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 6rem;
    padding: 0 2rem;
    width: 100%;
    z-index: 1;
`

const LeftMenu = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    a {
        font-weight: 400;
        text-transform: uppercase;
        padding: 0 2rem;
        flex-wrap: nowrap;
    }
    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    a {
        font-weight: 400;
        text-transform: uppercase;
        padding: 0 2rem;
        margin-right: 1rem;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    transform: scale(1.6);
`

export default Header
