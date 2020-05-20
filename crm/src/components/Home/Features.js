import React from 'react'; //npm install --save mdbreact
import {
	MDBCarousel,
	MDBCarouselCaption,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBView,
	MDBMask,
	MDBContainer,
} from 'mdbreact';
import profit from '../../Images/profit.jpg';
import business from '../../Images/businessman-3105871_1920.jpg';
import customer from '../../Images/customers.jpg';
import innovation from '../../Images/innovation-2057546_1920.jpg';
import marketing from '../../Images/marketing.jpg';
import collaboration from '../../Images/collaboration.jpg';
// import sales from '../../Images/sales.jpg';
import './Home.css';

const Features = () => {
	return (
		<MDBContainer>
			<h1 className='home-container'>Our Product Features</h1>
			{/* <p className='para-container'>
				Improve your business process with essential CRM
			</p> */}
			<MDBCarousel
				activeItem={1}
				length={4}
				showControls={true}
				showIndicators={true}
				className='z-depth-1'>
				<MDBCarouselInner>
					<MDBCarouselItem itemId='1'>
						<MDBView>
							<img className='d-block w-100' src={customer} alt='First slide' />
							<MDBMask overlay='black-light' />
						</MDBView>
						<MDBCarouselCaption>
							<h3 className='h3-responsive'>
								Customer Relationship Management
							</h3>
							<p className='text-list'>
								CRM helps to build a better customer relationship
							</p>
						</MDBCarouselCaption>
					</MDBCarouselItem>
					<MDBCarouselItem itemId='2'>
						<MDBView>
							<img
								className='d-block w-100'
								src={marketing}
								alt='Second slide'
							/>
							<MDBMask overlay='black-strong' />
						</MDBView>
						<MDBCarouselCaption>
							<h3 className='h3-responsive'>
								Better customer Knowledge,segmentation and customer retention
							</h3>
							<p className='text-list'>
								CRM allows you to segment data into different categories making
								it easy to create focused lists which helps to analyse sales
								process and lead pool.
							</p>
						</MDBCarouselCaption>
					</MDBCarouselItem>
					<MDBCarouselItem itemId='3'>
						<MDBView>
							<img
								className='d-block w-100'
								src={collaboration}
								alt='Third slide'
							/>
							<MDBMask overlay='black-slight' />
						</MDBView>
						<MDBCarouselCaption>
							<h3 className='h3-responsive'>Effective team collaboration</h3>
							<p className='text-list'>
								CRM helps you to manage all resources at a single pool resulting
								into effective team collaboration and better customer service.
							</p>
						</MDBCarouselCaption>
					</MDBCarouselItem>
					<MDBCarouselItem itemId='4'>
						<MDBView>
							<img className='d-block w-100' src={profit} alt='Third slide' />
							<MDBMask overlay='black-slight' />
						</MDBView>
						<MDBCarouselCaption>
							<h3 className='h3-responsive'>Sales growth</h3>
							<p className='text-list'>
								CRM helps you to monitor and improve your sales.
							</p>
						</MDBCarouselCaption>
					</MDBCarouselItem>
				</MDBCarouselInner>
			</MDBCarousel>
		</MDBContainer>
	);
};

export default Features;
