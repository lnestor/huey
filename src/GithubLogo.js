import React, { Component } from 'react';
import githubLogo from './github-logo.svg';
import './GithubLogo.css';

const githubUrl = 'https://github.com/lnestor/huey';

class GithubLogo extends Component {
  state = { opacity: 0.60 };

  handleMouseEnter = (event) => this.setState({opacity: 0.75});
  handleMouseLeave = (event) => this.setState({opacity: 0.60});

  render() {
    return (
      <div className={'github-logo'} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <a href={githubUrl}>
          <img style={{opacity: this.state.opacity}} src={githubLogo} width={64} height={64} alt={'Github Repository'} />
        </a>
      </div>
    );
  }
}

export default GithubLogo;
