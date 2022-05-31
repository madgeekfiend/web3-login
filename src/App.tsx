
import React from 'react';
import './App.css';

class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  logIn = () => {
    this.state = { isLoggedIn: true}
  }

  render = () => (
    <div className="App">
      <h1>Welcome to the Thunder Dome!</h1>
      <p>All your bases belong to us. Give me your wallet.</p>
      <div className="Status">
        <h2>{this.props.loggedInText}</h2>
      </div>
    </div>
  );
}

export default App;
