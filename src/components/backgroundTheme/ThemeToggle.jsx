import React from 'react'
import { useDispatch } from 'react-redux'
import { setDarkTheme, setLightTheme } from '../../features/theme/themeSlice';

function ThemeToggle() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(setLightTheme())}>Light Theme</button>
        <button onClick={() => dispatch(setDarkTheme())}>Dark Theme</button>
    </div>
  )
}

export default ThemeToggle