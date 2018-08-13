import React, { Component } from 'react';
import githubLogo from '../icons/github.svg';
import Icon from './Icon';
import '../styles/GithubLogo.css';

const githubUrl = 'https://github.com/lnestor/huey';

class GithubLogo extends Component {
  state = { opacity: 0.60 };

  handleMouseEnter = (event) => this.setState({opacity: 0.75});
  handleMouseLeave = (event) => this.setState({opacity: 0.60});

  render() {
    return (
      <a href={githubUrl}>
        <Icon className={'github-logo'} image={githubLogo} alt={'Github Repository'} />
      </a>
    );
  }
}

export default GithubLogo;
