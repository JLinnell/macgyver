import React, { Component } from 'react';
import './Landing.css';


class Details extends Component {
    render() {
      return (
        <div className="steps-container">
          <h2>How it works</h2>
                                <div class="col-3">
                                    <div class="cont thinkToss">
                                        <p class="cont-title"><b>Think Before You Toss</b></p>
                                        <p class="cont-description">Description goes here</p>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="cont waysReuse">
                                        <p class="cont-title"><b>Discover Ways to Reuse</b></p>
                                        <p class="cont-description">Description goes here</p>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="cont saveShare">
                                        <p class="cont-title"><b>Save and Share Hacks</b></p>
                                        <p class="cont-description">Description goes here</p>
                                    </div>
          </div>
        </div>
      );
    }
  }
  
  export default Details;