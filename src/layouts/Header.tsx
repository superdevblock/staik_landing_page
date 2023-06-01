import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-main'>
      <Link className='logo-area flex' to="/">  
        <img src="/images/STAIK LOGO 4.png" className='' alt="" />  
		    <label>staik.io</label>
      </Link>
      <div className='category lg:category_list lg:relative absolute lg:pt-0 pt-12'>
        <Link to="#" >About Us</Link>
        <Link to="#" >DEX</Link>		
    		<a href="https://bscscan.com/address/0x977405CeB99fE83e615BFf163F677D14134a3a79" target='_new' >The Cooker Staking Contract</a>		
      </div>
      <div className='sm:float-right'>
        <a href="https://presale.staik.io/" className='btn btn-normal'>
          BUY NOW
        </a>
      </div>
    </div>
  )
}

export default Header