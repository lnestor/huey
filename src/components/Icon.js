import React, { Component } from 'react';

class Icon extends Component {
  state = { opacity: 0.60 };

  handleMouseEnter = (event) => this.setState({opacity: 0.75});
  handleMouseExit = (event) => this.setState({opacity: 0.60});

  render() {
    return(
      <div className={this.props.className} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit}>
        <img style={{opacity: this.state.opacity}} src={this.props.image} width={64} height={64} alt={this.props.alt} />
      </div>
    );
  }
}

export default Icon;
