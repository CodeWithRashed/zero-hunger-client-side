import AccessoriesSection from "../Components/AccessoriesSection/AccessoriesSection"
import Banner from "../Components/Banner/Banner"
import ItemsContainer from "../Components/CarITems/ItemsContainer"
import FeatureFood from "../Components/FeatureFoodSection/FeatureFood"

const HomePage = () => {
   
  return (
    <div >
     <Banner></Banner>
     <ItemsContainer></ItemsContainer>
     <FeatureFood></FeatureFood>
     <AccessoriesSection></AccessoriesSection>
    </div>
  )
}

export default HomePage
