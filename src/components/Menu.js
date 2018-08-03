import React, { Component } from 'react';
import logo from '../icons/github-logo.svg';
import '../styles/Menu.css';

class Menu extends Component {
  handleClick = (mode) => this.props.handleModeSelect(mode);

  render() {
    return (
      <div>
        <div className={'menu-opener'} onClick={() => this.handleClick('solid')}>
          <img src={logo} width={64} height={64} alt={'Github Repository'} />
        </div>

        <div className={'menu-1'} onClick={() => this.handleClick('wave')}>
          <img src={logo} width={64} height={64} alt={'Github Repository'} />
        </div>

        <div className={'menu-2'} onClick={() => this.handleClick('off')}>
          <img src={logo} width={64} height={64} alt={'Github Repository'} />
        </div>
      </div>
    );
  }

}

export default Menu;
