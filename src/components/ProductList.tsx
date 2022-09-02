import React, { FC } from 'react'
import { FOOT_TEXT, PAGE_ONE_TITLE } from '../constants/appLabel'
import './style.css';

const ProductList: FC = () => {
  return (
    <>
        <div className="content-box">
            <div className="content-box__top-items">
                <div className="content-box__column">
                    <div className="right-item">
                        <h2 className="page-title">
                            {PAGE_ONE_TITLE}
                        </h2>
                    </div>
                    <div className="left-items">
                        <button className="right-btn">ADD</button>
                        <button className="left-btn">MASS DELETE</button>
                    </div>
                </div>
            </div>
            <div className="content-box__bottom-items">
                <div className="custom-card">
                    <div className="check-box__item">
                        <input type="checkbox" />
                    </div>
                    <div className="item-description">
                        <span>JVC200123</span>
                        <span>AcmeDISC</span>
                        <span>1.00 $</span>
                        <span>Size: 700 MB</span>
                    </div>
                </div>
                <div className="custom-card">
                    <div className="check-box__item">
                        <input type="checkbox" />
                    </div>
                    <div className="item-description">
                        <span>JVC200123</span>
                        <span>AcmeDISC</span>
                        <span>1.00 $</span>
                        <span>Size: 700 MB</span>
                    </div>
                </div>

                <div className="custom-card">
                    <div className="check-box__item">
                        <input type="checkbox" />
                    </div>
                    <div className="item-description">
                        <span>JVC200123</span>
                        <span>AcmeDISC</span>
                        <span>1.00 $</span>
                        <span>Size: 700 MB</span>
                    </div>
                </div>

                <div className="custom-card">
                    <div className="check-box__item">
                        <input type="checkbox" />
                    </div>
                    <div className="item-description">
                        <span>JVC200123</span>
                        <span>AcmeDISC</span>
                        <span>1.00 $</span>
                        <span>Size: 700 MB</span>
                    </div>
                </div>

                <div className="custom-card">
                    <div className="check-box__item">
                        <input type="checkbox" />
                    </div>
                    <div className="item-description">
                        <span>JVC200123</span>
                        <span>AcmeDISC</span>
                        <span>1.00 $</span>
                        <span>Size: 700 MB</span>
                    </div>
                </div>

                <div className="custom-card">
                    <div className="check-box__item">
                        <input type="checkbox" />
                    </div>
                    <div className="item-description">
                        <span>JVC200123</span>
                        <span>AcmeDISC</span>
                        <span>1.00 $</span>
                        <span>Size: 700 MB</span>
                    </div>
                </div>

                <div className="custom-card">
                    <div className="check-box__item">
                        <input type="checkbox" />
                    </div>
                    <div className="item-description">
                        <span>JVC200123</span>
                        <span>AcmeDISC</span>
                        <span>1.00 $</span>
                        <span>Size: 700 MB</span>
                    </div>
                </div>

                <div className="custom-card">
                    <div className="check-box__item">
                        <input type="checkbox" />
                    </div>
                    <div className="item-description">
                        <span>JVC200123</span>
                        <span>AcmeDISC</span>
                        <span>1.00 $</span>
                        <span>Size: 700 MB</span>
                    </div>
                </div>
            </div>
            <div className="content-box__foot-items">
                <div className="footer-item">
                    <span>{FOOT_TEXT}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductList