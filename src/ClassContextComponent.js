import React, { Component } from 'react'
import { ThemeContext } from './App'
//its important to import ThemeContext from parent ./App and important that it is exported in ./App

export default class ClassContextComponent extends Component {
  render() {
    return (
      //Consumer portion of theme context, which is a func we need to pass here and that func has the value 'darkTheme' from the provider and what we return from the func is what's rendered
      //in our case is a single div here that gets theme styles and then has the word "Class Theme"
      <ThemeContext.Consumer>
        {darkTheme => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>
        }}
      </ThemeContext.Consumer>
    )
  }

  themeStyles(dark) {
    return {
      backgroundColor: dark ? '#333' : '#CCC',
      color: dark ? '#CCC' : '#333',
      padding: '2rem',
      margin: '2rem'
    }
  }
}
