import React from 'react';
import { withRouter } from 'react-router-dom';

import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import './GoHome.css';


class GoHome extends React.Component {
    navigateToHome = () => { 
        //console.log(this.props.history.push('/'));
        const { history } = this.props;
        history.push('/');
    };

    render() {
        const { location } = this.props;
        const whiteBtn = location.pathname === '/';
        //console.log('wb',whiteBtn);
        return (
            <button
                className={`go-home-btn ${
                    whiteBtn ? 'white-bkg' : 'gradient-bkg'
                }`}
                onClick={this.navigateToHome}
            >
                <img
                    className='home-icon'
                    src={whiteBtn ? homeIconBlack : homeIconWhite}
                    alt='home-icon'
                />
            </button>
        );
    }
}

export default withRouter(GoHome);
