import React, { Component } from 'react';
import Icon from './Icon';
import solid from '../icons/solid.svg';
import wave from '../icons/up-arrow.svg';
import power from '../icons/minus.svg';
import '../styles/Menu.css';

class Menu extends Component {
  handleClick = (mode) => this.props.handleModeSelect(mode);

  render() {
    return (
      <div>
        <div onClick={() => this.handleClick('solid')}>
          <Icon image={solid} className={'menu-opener'} />
        </div>

        <div onClick={() => this.handleClick('wave')}>
          <Icon image={wave} className={'menu-1'} />
        </div>

        <div onClick={() => this.handleClick('off')}>
          <Icon image={power} className={'menu-2'} />
        </div>
      </div>
    );
  }

}

export default Menu;
