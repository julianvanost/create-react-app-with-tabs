import React, { Component, PropTypes } from 'react';
import SimpleTab from 'react-simple-tab';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
window.React = require('react');

class App extends Component {
  render() {
     const tabs = [
      { title: 'Home', content: (<TabContent>Content 1</TabContent>) },
      { title: 'Examples', content: (<TabContent>Content 2</TabContent>) },
      { title: 'Contact', content: (<TabContent>Content 3</TabContent>) }
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

const Styles = {
  tabContent: {
    border: 'solid 2px #ebeced',
    padding: '15px',
  },
  app: {
    tabStyle: {
      fontSize: '20px',
    },
    labelListStyle: {
      margin: '2px',
      padding: 0,
      bottom: '-2px',
      position: 'relative',
    },
    tabContentStyle: {
      padding: '5px 8px 0px 8px',
    },
    activeTabContentStyle: {
      borderWidth: '1px 1px 4px 1px',
      margin: '-4px -1px 0px -1px',
      borderColor: '#c9c9c9 #c9c9c9 #ff6c60 #c9c9c9 ' ,
      borderStyle: 'solid',
      borderRadius: '5px 5px 0px 0px',
      zIndex: 1,
      background: 'white',
    }
  }
};

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
