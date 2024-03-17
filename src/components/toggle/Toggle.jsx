import './toggle.css'
import sun from '../../images/sun.svg'
import moon from '../../images/moon.svg'
import { useContext } from 'react'
import { ThemeContext } from '../../context'

const Toggle = () => {
  const theme= useContext(ThemeContext)
  const handleClick=()=>{
    theme.dispatch({type: "TOGGLE"})
  }
  return (
    <div className='t'>
        <img src={sun} alt="" className="t-icon" />
        <img src={moon} alt="" className="t-icon" />
        <button className="t-button" onClick={handleClick} style={{left: theme.state.darkMode? "0px" : "25px"}}></button>
    </div>
  )
}

export default Toggle