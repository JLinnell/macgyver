import React, { Component } from 'react';
import './HackForm.css';
import { connect } from 'react-redux';
import { createHack } from '../../actions/hackActions';



class HackForm extends Component {
    handleChange(event) {
        const stateKey = event.currentTarget.attributes["name"].value; 
        this.setState({[stateKey]: event.currentTarget.value});
        console.log(event.currentTarget.attributes["name"].value);
        console.log(event.currentTarget.value);
        }

        handleSubmit(event) {
            event.preventDefault();
            const hackData = {
                item: this.state.item, 
                type: this.state.type,
                description: this.state.description, 
            };
            this.props.createHack(hackData);
        }
   
    render() {
        return(
            <div>
                <section className="row home">
                      <div className="createHack">
                          <form  className="createHack-form"  onSubmit={this.handleSubmit.bind(this)}>
                              <input type="text" name="item" onChange={this.handleChange.bind(this)} placeholder="What item(s) are you using?" />
                              <input type="text" name="type" onChange={this.handleChange.bind(this)} placeholder="What type of hack did you discover?" />
                              <textarea name="description" onChange={this.handleChange.bind(this)} placeholder="Share any tips and tricks!"></textarea>
                              <button type="submit" className="createhack-btn">Create</button>
                          </form>
                      </div>
                  </section>
       
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {hack: rootReducer.hack}
}
export default connect(mapStateToProps, {createHack})(HackForm);