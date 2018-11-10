/*import React, { Component } from 'react';
import './Landing.css';
import Details from './Details';


class Landing extends Component {
    render() {
      return (
        <div className="landing">
          
          <h2>Start turning your trash into treasures!</h2>
          <input type="text" placeholder="item to use"></input>
          <button type="submit" class="hack-search-btn">Search</button>
          <Details />
        </div>
      );
    }
  }
  
  export default Landing;*/

  import React, { Component } from 'react';
import Navbar from '../Header/Navbar';
import Details from './Details';
import Footer from '../Footer/Footer';
import './Landing.css';



class Landing extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Details />
				<Footer />
			</div>
		)
	}
}

export default Landing;
