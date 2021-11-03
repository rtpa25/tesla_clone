import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
    return (
        <Container className="fixed">
            <a href="/">
                <img src="/images/logo.svg" alt="tesla" />
            </a>
            <LeftMenu className="flex">
                <a href="#">Model S</a>

                <a href="#">Model X</a>

                <a href="#">Model 3</a>

                <a href="#">Model y</a>
            </LeftMenu>
            <RightMenu className="flex items-center">
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu />
            </RightMenu>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 6rem;
    padding: 0 2rem;
    width: 100%;
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
`

export default Header
