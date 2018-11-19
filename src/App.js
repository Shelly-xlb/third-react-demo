import React, { Component } from 'react';
import './App.css';
import Clock from './components/clock/Clock';
import Toggle from './components/toggle/Toggle';
import Popper from './components/popper/Popper';
import Greeting from './components/greeting/Greeting';
import LoginControl from './components/greeting/LoginControl';
import Mailbox from './components/mailbox/Mailbox';
import Page from './components/page/Page';
import NumberList from './components/list/NumberList';
import BlogList from './components/list/BlogList';

class App extends Component {
  render() {
    const messages = ['React', 'Re: React', 'Re:Re: React'];

    const numbers = [1, 2, 3, 4, 5];

    const posts = [
      {
        id: 1,
        title: 'Hello React',
        content: 'Welcome to learning React!'
      },
      {
        id: 2,
        title: 'Installation',
        content: 'You can install React from npm.'
      }
    ]

    return (
      <div className="App">
        <Clock date={ new Date() }/>
        <hr/>

        <Toggle/>
        <hr/>

        <Popper/>
        <hr/>

        <Greeting isLoggedIn={false}/>
        <hr/>

        <LoginControl/>
        <hr/>

        <Mailbox unreadMessages={messages}/>
        <hr/>

        <Page/>
        <hr/>

        <NumberList numbers={numbers}/>
        <hr/>

        <BlogList posts={posts}/>

      </div>
    );
  }
}


export default App;
