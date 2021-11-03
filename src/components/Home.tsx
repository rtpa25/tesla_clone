import Section from './Section'

function Home() {
    return (
        <div className="">
            <Section
                title="Model S"
                url="/images/model-s.jpg"
                leftButtonText="custom order"
                rightButtonText="existing inventory"
            />
            <Section
                title="Model x"
                url="/images/model-x.jpg"
                leftButtonText="custom order"
                rightButtonText="existing inventory"
            />
            <Section
                title="Model 3"
                url="/images/model-3.jpg"
                leftButtonText="custom order"
                rightButtonText="existing inventory"
            />
            <Section
                title="Model y"
                url="/images/model-y.jpg"
                leftButtonText="custom order"
                rightButtonText="existing inventory"
            />
            <Section
                title="Solar Panel"
                url="/images/solar-panel.jpg"
                leftButtonText="custom order"
                rightButtonText="existing inventory"
            />
            <Section
                title="Solar Roof"
                url="/images/solar-roof.jpg"
                leftButtonText="custom order"
                rightButtonText="existing inventory"
            />
            <Section
                title="Accessories"
                url="/images/accessories.jpg"
                leftButtonText="buy now" 
                rightButtonText=''            
            />
        </div>
    )
}

export default Home
