import React from "react";
import { Link } from "react-router-dom";

const TopBar = ({
  pageTitle,
  btnOne = null,
  btnTwo = null,
  btnThree = null,
  cancelBtn = null,
  fn,
}: any) => {
  return (
    <>
      <div className="content-box__top-items">
        <div className="content-box__column">
          <div className="right-item">
            <h2 className="page-title">{pageTitle}</h2>
          </div>
          <div className="left-items">
            {btnOne !== null ? (
              <Link to="/add-product">
                <button>ADD</button>
              </Link>
            ) : (
              <button className="right-btn" onClick={fn}>
                {btnThree}
              </button>
            )}
            {cancelBtn === null ? (
              <button id="delete-product-btn" onClick={fn}>
                MASS DELETE
              </button>
            ) : (
              <Link to="/product-list">{cancelBtn}</Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
