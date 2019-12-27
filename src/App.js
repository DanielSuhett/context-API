import React from 'react';
import './css/App.css';
import ThemedButton from "./components/ThemedButton";
import light from './components/themes/light';
import dark from './components/themes/dark';
import Context from './components/Context';

const Toolbar = (props) => {
  return (
    <ThemedButton onClick={props.changeTheme} >
      Change Theme
    </ThemedButton>
  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: light
    }
  }

  toggleTheme = () => {
    this.state.theme === light
      ? this.setState({ theme: dark })
      : this.setState({ theme: light })
  }

  render() {
    return (
      <div>
        <Context.Provider value={this.state.theme}>
          <div style={{ backgroundColor: this.state.theme.background }}>
            <h1 className="container" style={{ color: this.state.theme.color }}>{this.state.theme.title}</h1>
            <Toolbar changeTheme={this.toggleTheme} />
          </div>
        </Context.Provider>
          <p className="subtitle">Tap icon to magic</p>

      </div>
    )
  }
}

