import { useTheme, useThemeUpdate } from './ThemeContext'

//in order to use a context inside of a function component you need to use the hook 'useContext'

export default function FunctionContextComponent() {
  const darkTheme = useTheme(); //now we can use darkTheme in any of our code that we want, we don't have to worry about complex nesting seen in ClassContextComponent, this simplifies the code drastically
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
    )
}
