import React from 'react';
import './Home.css';
import Footer from '../Footer/Footer.js'

const BackgroundImagePage = () => {
  return (
		<>
			<div className='bg' />
			<div>
				<h1 className='text'>Customer Relationship Management</h1>
				<p className='para-container'>
					Improve your business process with essential CRM
				</p>
			</div>
      <div>
        <h2>About Us</h2>
        <p>We are team of developers at GA who developed this solution for businesses to manage and monitor all resources at a single pool and improve productivity with our solution.</p>
      </div>
			<Footer />
      </>
	);
};
export default BackgroundImagePage;
