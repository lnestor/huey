import React, { Component } from 'react';
import Zoom from '@material-ui/core/Zoom';
import logo from './github-logo.svg';
import './Menu.css';

class Menu extends Component {
  state = { menuActive: false };

  handleMenuOpener = (event) => this.setState(state => ({menuActive: !state.menuActive}));

  render() {
    return (
      <div>
        <div className={'menu-opener'} onClick={this.handleMenuOpener}>
          <img src={logo} width={64} height={64} alt={'Github Repository'} />
        </div>

        <Zoom in={this.state.menuActive}>
          <div className={'menu-1'}>
            <img src={logo} width={64} height={64} alt={'Github Repository'} />
          </div>
        </Zoom>

        <Zoom in={this.state.menuActive} style={{transitionDelay: this.state.menuActive ? 100 : 0 }}>
          <div className={'menu-2'}>
            <img src={logo} width={64} height={64} alt={'Github Repository'} />
          </div>
        </Zoom>

        <Zoom in={this.state.menuActive} style={{transitionDelay: this.state.menuActive ? 200 : 0 }}>
          <div className={'menu-3'}>
            <img src={logo} width={64} height={64} alt={'Github Repository'} />
          </div>
        </Zoom>
      </div>
    );
  }

}

export default Menu;
