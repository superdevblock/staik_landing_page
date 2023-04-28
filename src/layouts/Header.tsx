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
        <Link to="/" >About Us</Link>
        <Link to="/" >DEX</Link>		
    		<Link to="/" >The Cooker Staking Contract</Link>		
      </div>
      <div className='sm:float-right'>
        <a className='btn btn-normal'>
          BUY NOW
        </a>
      </div>
    </div>
  )
}

export default Header