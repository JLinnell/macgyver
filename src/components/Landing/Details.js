import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Landing.css';


class Details extends Component {
    render() {
      return (
        <div>
        <div className="steps-container">
          {/* <h2>How it works</h2> */}
                                <div className="col-3">
                                    <div className="cont thinkToss">
                                        <p className="cont-title"><b>Think Before You Toss</b></p>
                                        <p className="cont-description">Have you ever thrown something away only to find that it was the secret ingredient to an awesome lifehack? With Macgyver, you can easily see the true value of an item before you decide to keep it or not. </p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="cont waysReuse">
                                        <p className="cont-title"><b>Discover Ways to Reuse</b></p>
                                        <p className="cont-description">See your personal belongings through new lenses and explore all of the hidden uses a common item may possess.</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="cont saveShare">
                                        <p className="cont-title"><b>Save and Share Hacks</b></p>
                                        <p className="cont-description">Have Macgyver be your personal go to anytime you get the inkling to make something out of "nothing" by searching and saving hacks to your profile.</p>
                       </div>            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Details;