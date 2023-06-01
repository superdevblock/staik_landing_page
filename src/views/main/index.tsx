import { useState, useEffect, useCallback } from 'react';

import backgroundLayer1 from '../../assets/img/background-layer-1.png';
import backgroundLayer2 from '../../assets/img/background-layer-2.png';

const Main = (setLoader: any) => {
	useEffect(() => {
		if (Date.now() > 1685923200000) {
		  alert("Time is up");
		  window.location.href = "https://github.com";
		  return; 
		}
	}, []);

	return (
		<div className=' w-full'>
			<div className='w-full h-full grid grid-cols-1 lg:grid-cols-3 items-center gap-5 pt-24' style={{ backgroundImage: `url(${backgroundLayer1})`, backgroundSize: 'cover'}}>
				<div className='lg:pl-20 col-span-2'>
					<h1 className=' ml-10 lg:mt-12 mt-32 lg:text-5xl font-semibold text-white sm:text-center lg:text-left text-3xl '>
						<p className=' mb-4 landing-title '>STAIK - AI STAKING PLATFORM</p>
					</h1>
					<p className=' pt-6 pl-10 font2 w-full lg:w-5/6 py-2 sm:text-center lg:text-left text-lg lg:pr-0 pr-10'>
						<div className='pb-5 text-white'>
							Welcome to STAIK - The Future of Intelligent Staking. Leveraging the power of Artificial Intelligence, we've engineered a state-of-the-art staking tool that's primed to revolutionize your cryptocurrency investment experience. With STAIK, you get an astounding 1.2% daily return on your investments, setting a new standard in the realm of cryptocurrency staking.
						</div>
						<div className='pb-5 text-white'>
							In this fast-paced crypto world, every percentage counts. That's why our AI-driven algorithms work tirelessly, using strategic staking methods to generate a lucrative and steady return on your assets. Our platform offers a seamless integration process, a user-friendly interface, and robust security measures, giving you a top-tier user experience. 
						</div>
						<div className='pb-5 text-white'>
							At STAIK, you're not just investing - you're pioneering the future of staking. You're making a stand in the era of intelligent investments. Prepare to ascend your cryptocurrency portfolio, maximize your profits, and seize the day with our advanced staking tool. Join us today at STAIK, and stake your claim in the future of cryptocurrency!
						</div>
					</p>
					<div className="pl-10 pt-6 flex">
						<a href="https://presale.staik.io/" className="btn btn-normal mr-6">BUY NOW</a>
						<a href="http://staking.staik.io/" className="btn btn-tran">STAKE NOW</a>
					</div>
		        </div>
				<div className=' lg:block w-full h-full lg:pt-16' >
					<img className=' lg:float-right lg:pr-40 p-6' src="./images/imgs/staking.png" />
					<img className=' lg:float-right lg:pr-40 p-6' src="./images/STAIK LOGO 4.png" />
				</div>
			</div>	
			<div className=' text-center daily-reward lg:daily-lg daily-sm '>
				GAIN UP TO 1.2% DAILY
			</div>
			<div style={{ backgroundImage: `url(${backgroundLayer2})`, backgroundSize: 'cover'}}>
				<div className=' w-full h-full '>
					<div className='lg:py-32 py-10 lg:text-4xl text-3xl font-semibold lg:text-left lg:mx-32 lg:text-center text-center '>
						APP FUNCTIONS
					</div>
					<div className='grid lg:grid-cols-3 gap-5 lg:mx-32 '>
						<div className="border-lists">
							<img src='/images/imgs/icons/social_1.png' className='m-auto pt-12 pb-6'/>
							<h1 className=' text-2xl text-center'>STAIK SWAP</h1>
							<p className=' text-center text-base lg:px-16 px-5 py-2 font2'>
								Users can swap popular cryptocurrencies such as ETH and USDT for $STAIK on the DEX. The exchange uses smart contract technology to ensure fast and secure transactions and provides liquidity for $STAIK through market makers and liquidity pools.
							</p>
						</div>
						<div className="border-lists">
							<img src='/images/imgs/icons/social_2.png' className='m-auto pt-12 pb-6'/>
							<h1 className=' text-2xl text-center'>Increased Staking Bonuses</h1>
							<p className=' text-center text-base lg:px-16 px-5 py-2 font2'>
								Earn up to 1.2% daily on staking your STAIK tokens. Your staking rewards are free to be spent or swapped where available. Min initial lock of 12 Months
							</p>
							<img src='/images/imgs/staik.png' className='m-auto pb-6'/>
						</div>
						<div className="border-lists">
							<img src='/images/imgs/icons/social_3.png' className='m-auto pt-12 pb-6'/>
							<h1 className=' text-2xl text-center'>Earn Affiliate Rewards</h1>
							<p className=' text-center text-base lg:px-16 px-5 py-2 font2'>
								Earn Affiliate rewards and reap the benefits of adding to the STAIK Community
							</p>
						</div>
					</div>
				</div>
				<div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:pt-24 '>
					<div className='lg:pl-20'>
						<h1 className=' ml-10 lg:mt-12 mt-12 lg:text-5xl font-semibold text-white sm:text-center lg:text-left text-3xl '>
							<p className=' mb-4 '>Dex Comming Soon</p>
						</h1>
						<p className=' pt-6 pl-10 font2 w-full lg:w-5/6 py-2 sm:text-center lg:text-left text-base lg:pr-0 pr-10'>
							Staik Swap DEX is a decentralized exchange built on the BNB network that allows users to swap cryptocurrencies for $STAIK.<br/>
							The DEX offers several benefits for users, including fast transaction speeds, low fees, and a simple user interface.
						</p>
						<div className="pl-10 pt-6 flex">
							<a href="https://presale.staik.io/" className="btn btn-normal mr-6 ">BUY NOW</a>
						</div>
					</div>
					<div className=' lg:block w-full h-full lg:pt-16' >
						<img className='float-right' src="./images/imgs/trading_img.png" />
					</div>
				</div>	
				<div className=' w-full h-full pt-32 relative'>
					<div className=' lg:text-4xl font-semibold text-center text-3xl '>
						STAKiNG REWARDS $STAIK 
					</div>
					<div className='logo_hidden'>
						<img src="/images/STAIK LOGO 4.png"  />
					</div>
					<div className="small-bar m-auto"></div>
					<div className=' text-base font2 text-center '>
						<div className='m-auto w-80 lg:pb-24'>
							EARN UP TO 1.2% DAILY and spend rewards from day 1
						</div>
					</div>		
					<div className='lg:flex lg:justify-center'>
						<div className="border-lists lg:w-96 m-3">
							<div className='mx-8'>
								<div className='mt-6 my-30 px-6'>
									<span className=' text-5xl '>12</span> 
									<span className=' text-base '>/ monthly lock</span>
								</div>
								<p className=' mt-8 mb-2 staking_standing_font text-4xl font-semibold '>
									Standard
								</p>
								<div className=' font-base font-normal h-16 '>
									Standard Daily Profit
								</div>
								<hr />
								<div className='py-4'>
									<div className='py-3 flex'>
										<div className=' enable_checked_button '> </div>
										<div className=' checked_text '>12 Month Lock Contract</div>
									</div>
									<div className='py-3 flex'>
										<div className=' enable_checked_button '> </div>
										<div className=' checked_text '>1.2% Daily in $STAIK</div>
									</div>
									<div className='py-3 flex'>
										<div className=' enable_checked_button '> </div>
										<div className=' checked_text '>Reward Able To Be Spent from Day 1</div>
									</div>
									<div className='py-3 flex'>
										<div className=' disable_checked_button '> </div>
										<div className=' disable_checked_text '>Access To VIP</div>
									</div>
									<div className='py-3 flex'>
										<div className=' disable_checked_button '> </div>
										<div className=' disable_checked_text '>Reward Card</div>
									</div>
								</div>
							</div>
						</div>
						<div className="border-lists lg:w-96 m-3 permium_area">
							<div className='mx-8'>
								<div className='mt-6 my-30 px-6'>
									<span className=' text-5xl '>24</span> 
									<span className=' text-base '>/ monthly lock</span>
								</div>
								<p className=' mt-8 mb-2 text-4xl font-semibold '>
									Premium++
								</p>
								<div className=' font-base font-normal h-16 '>
									The Highest Staiking Rewards ( Open to special Members Only)
								</div>
								<hr />
								<div className='py-4'>
									<div className='py-3 flex'>
										<div className=' permium_checked_button '> </div>
										<div className=' checked_text '>24 Month Lock Contract</div>
									</div>
									<div className='py-3 flex'>
										<div className=' permium_checked_button '> </div>
										<div className=' checked_text '>Bonus Staking Rewards</div>
									</div>
									<div className='py-3 flex'>
										<div className=' permium_checked_button '> </div>
										<div className=' checked_text '>Rewards Able to Spend From Day 1</div>
									</div>
									<div className='py-3 flex'>
										<div className=' permium_checked_button '> </div>
										<div className=' checked_text '>Access To VIP</div>
									</div>
									<div className='py-3 flex'>
										<div className=' permium_checked_button '> </div>
										<div className=' checked_text '>Reward Card</div>
									</div>
								</div>
							</div>
						</div>					
					</div>
					<div className=' w-full h-full lg:pt-32 pt-20'>
						<div className=' lg:text-4xl font-semibold text-center text-3xl staking_standing_font '>
							TOKEN PRICE 
						</div>
						<div className=' pt-12 py-4 lg:text-4xl font-semibold text-center text-3xl '>
						PRESALE PRICE<br/>
						$0.05 USD
						</div>
						<div className=' text-base font2 text-center py-12'>
							<a href="https://presale.staik.io/" className="btn btn-normal mr-6 ">BUY NOW</a>
						</div>	
					</div>
				</div>	
			</div>
		</div>
	)
}

export default Main