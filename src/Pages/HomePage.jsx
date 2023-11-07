import TopDonar from "../Components/TopDonar/TopDonar"
import Banner from "../Components/Banner/Banner"
import ItemsContainer from "../Components/CarITems/ItemsContainer"
import FeatureFood from "../Components/FeatureFoodSection/FeatureFood"
import DonationForm from "../Components/DonationForm.jsx/DonationForm"
import ContactSection from "../Components/ContactSection/ContactSection"

const HomePage = () => {
   
  return (
    <div >
     <Banner></Banner>
     <ItemsContainer></ItemsContainer>
     <FeatureFood></FeatureFood>
     <TopDonar></TopDonar>
     <DonationForm></DonationForm>
     <ContactSection></ContactSection>
    </div>
  )
}

export default HomePage
