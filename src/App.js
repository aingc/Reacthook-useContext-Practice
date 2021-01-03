import React from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext'

//1. ThemeProvider
//wraps all the logic for handling our state, updating our state, and pushing out those diff values to all of our children

export default function App() {
  return (
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
  )
}

/*
when using context, it's broken into 2 different sections
context provider ("ThemeContext.Provider") which is what you want to wrap all of the code that needs access to the information in the context and it has a single prop called 'value' which is going to be whatever your value of the context is
important: everything inside provider, all components, and children, and children, and so on, all have access to the variable in the 'value' prop in the context provider
important**: context is for passing down props essentially all the way down to any of the children without having to manually pass 'darkThemeProp={darkTheme}' in each first level child component of a provider parent component
*/