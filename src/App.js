import React, { Component, PropTypes } from 'react';
import SimpleTab from 'react-simple-tab';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Styles from './styles';
window.React = require('react');

class App extends Component {
  render() {
     const tabs = [
      { title: 'Home', content: (<TabContent>Content 1</TabContent>) },
      { title: 'About', content: (<TabContent>Content 2</TabContent>) },
      { title: 'Contact', content: (<TabContent>Content 3</TabContent>) },
      { title: 'Projects', content: (<TabContent>Content 4</TabContent>) }
    ].map(tab => {
      return Object.assign({}, tab, {
        style: Styles.app.tabContentStyle,
        activeStyle: Styles.app.activeTabContentStyle
      });
    });

    return (
      <SimpleTab
        tabs={tabs}
        style={Styles.app.tabStyle}
        labelListStyle={Styles.app.labelListStyle} />
    );
  }
}

class TabContent extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <div style={Styles.tabContent}>
        {this.props.children}
      </div>
    </div>

    );
  }
}


// render(<App />, document.getElementById('app'));
export default App;
