import DistinguishesFanvestors from 'layouts/fanvestors/DistinguishesFanvestors'
import Banner from 'layouts/fanvestors/Banner'
import FanvestorSection from 'layouts/fanvestors/FanvestorSection'
import FanvestorBenefits from 'layouts/fanvestors/FanvestorBenefits'
import FanvestorIncomePackages from 'layouts/fanvestors/FanvestorIncomePackages'
import BecomeFanvestor from './BecomeFanvestor'
const Fanvestors = () => {
  return (
    <>
      <Banner />
      <FanvestorSection />
      <FanvestorBenefits />
      <DistinguishesFanvestors />
      <FanvestorIncomePackages />
      <BecomeFanvestor />
    </>
  )
}

export default Fanvestors
