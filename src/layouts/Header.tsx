import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-main'>
      <Link className='logo-area flex' to="/">  
        <img src="/images/main-logo.png" className='' alt="" />  
		    <label>staik.io</label>
      </Link>
      <div className='category lg:category_list lg:relative absolute lg:pt-0 pt-12'>
        <Link to="#" >About Us</Link>
        <Link to="#" >DEX</Link>		
    		<a href="https://testnet.bscscan.com/address/0x87e8206BD8Ad60E5dE7894B5FF0044e51e75c246" >The Cooker Staking Contract</a>		
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