import React from 'react';
import './HackList.css';
import { connect } from 'react-redux';
import { fetchAllHacks, deleteHack, createHack } from '../../actions/hackActions';
import deleteImg from '../../assets/delete.png';

class HackList extends React.Component {


componentDidMount() {
    this.props.fetchAllHacks()
}

deleteClicked(id) {
    this.props.deleteHack(id)
}
//instead of deleting from dom, play with state and elements(not like jQuery)
    render() {
        return(
            <div>
                <ul>
                { 
                    this.props.hack.all.map((hack,index) => {
                    return <li className="results" key={hack._id}>
                     <span>{hack.item}<br /> </span>
                     <span>{hack.type}<br />  </span>
                     <span>{hack.description}<br />  </span>
                    <img src={deleteImg} onClick={this.deleteClicked.bind(this, hack._id)} alt="delete icon" />

                    </li>

                    })

                }

                </ul>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {hack: rootReducer.hack}
}
export default connect(mapStateToProps, {fetchAllHacks, deleteHack, createHack})(HackList);
