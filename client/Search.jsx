import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo';
import Input from './Input';
import Navigator from './Navigator';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 80px;
  background-color: white;

  @font-face {
    font-family: 'Calibre-Medium';
    src: url("http://localhost:3004//fonts/CalibreWeb-Medium.woff2") format('woff2');
  }

  @font-face {
    font-family: 'Calibre-Regular';
    src: url("http://localhost:3004//fonts/CalibreWeb-Regular.woff2") format('woff2');
  }
`;

const LeftContainer = styled.div`
  flex: 1 1 50%;
  height: 100%;
  max-width: 50%;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.substring(13);
    this.setState({
      id,
    });
  }

  handleChange(e) {
    this.setState({
      id: e.target.value
    });
  }

  handleSubmit() {
    const { id } = this.state;
    window.location.assign(`/restaurants/${id}`);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <Header>
        <LeftContainer>
          <Logo />
          <Input
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleKeyPress={this.handleKeyPress} />
        </LeftContainer>
        <Navigator />
      </Header>
    );
  }
};

ReactDOM.render(<Search />, document.getElementById('search'));
