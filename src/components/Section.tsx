import styled from 'styled-components'

interface types {
    title: string
    url: string
    leftButtonText: string
    rightButtonText: string
}

const Section: React.FC<types> = ({url, title, leftButtonText, rightButtonText=''}) => {
    return (
        <Wrap
            bgImage={url}
            className="w-screen h-screen bg-center bg-no-repeat bg-cover"
        >
            <ItemText className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-semibold">{title}</h1>
                <p className="text-3xl font-light">
                    Order Online for Touchless Delivery
                </p>
            </ItemText>
            <ButtonGroup className="flex flex-col items-center justify-between mb-40">
                <Buttons className="flex justify-center">
                    <LeftButton>{leftButtonText}</LeftButton>
                    {rightButtonText !== '' && (
                        <RightButton>{rightButtonText}</RightButton>
                    )}
                </Buttons>
                <DownArrow
                    className="animate-bounce"
                    src="/images/down-arrow.svg"
                />
            </ButtonGroup>
        </Wrap>
    )
}
interface Props {
    bgImage: string
}

const Wrap = styled.div<Props>`
    background-image: ${(props) => `url(${props.bgImage})`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ItemText = styled.div`
    padding-top: 15vh;
`
const ButtonGroup = styled.div``
const Buttons = styled.div`
    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 2rem;
    }
`

const LeftButton = styled.button`
    background-color: rgba(23, 26, 32, 0.8);
    height: 4rem;
    width: 25.6rem;
    color: white;
    border-radius: 10rem;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 1.4rem;
    margin: 0 5rem;
    transition: all 0.6s;
    &:hover {
        transform: translateY(-0.5rem);
    }
    @media (max-width: 768px) {
        margin-bottom: 2rem;
    }
`

const RightButton = styled(LeftButton)`
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
`
const DownArrow = styled.img`
    margin-top: 2rem;
    height: 4rem;
    width: 4rem;
    margin-bottom: -5rem;
    cursor: pointer;
    display: inline;
    overflow: hidden;
`

export default Section
