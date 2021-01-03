import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()


//5. These are 2 custom hooks which gives us easy access to these different values: useTheme theme value, and useThemeUpdate theme update value
//custom hook, with this we never have to worry about accessing this ThemeContext outside of this one single file
export function useTheme() {
  return useContext(ThemeContext);
}
//same as above but for ThemeUpdate
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

//this takes the place of <ThemeContext.Provider> in ./App
export function ThemeProvider({ children }) {
  //2. handles creating state
  const [darkTheme, setDarkTheme] = useState(true);

  //3. handles updating state
  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  //4. then persisting both diff values ({darkTheme} and {toggleTheme}) down into our children
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

/*
Clean way to handle context because this is a repeatable pattern
essentially any context you create, with this, you can create a basic template for the context
then inside of your components, all you need to do is use your custom hooks that you created for using the theme
(useTheme) or using the theme update function (useThemeUpdate)
then when you need to provide the theme you just one simple theme provide class (ThemeProvider)
Don't have to worry about complexity of how react does context internally, all of that is taken care of in
this single ThemeContext class

Go through 1 - 5 comments for the path
*/