import React from 'react'
import Modal from '../components/Modal'
import { primaryColors, backgroundColors } from './data'
import PrimaryColor from './PrimaryColor'
import BackgroundColor from './BackgroundColor'
import './theme.css'

const Theme = () => {
  return (
    <Modal className="theme-modal">
        <h3>Customise Your Theme</h3>
        <small>Change your primary and background color to your preference</small>
        <div className="theme-primary-wrapper">
            <h5>Primary Color</h5>
            <div className="theme-primary-colors">
            {
                primaryColors.map((pColor)=><PrimaryColor key={pColor.className} className={pColor.className}/>)
            }    
            </div>
        </div>
        <div className="theme-background-wrapper">
            <h5>Background Color</h5>
            <div className="theme-background-colors">
                {
                    backgroundColors.map((bColor)=> <BackgroundColor key={bColor.className} className={bColor.className}/>)
                }
            </div>
        </div>
    </Modal>
  )
}

export default Theme;
