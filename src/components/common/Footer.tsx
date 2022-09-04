import React from 'react'
import { FOOT_TEXT } from '../../constants/appLabel'

const Footer: React.FC = () => {
  return (
    <>
        <div className="content-box__foot-items">
            <div className="footer-item">
                <span>{FOOT_TEXT}</span>
            </div>
        </div>
    </>
  )
}

export default Footer