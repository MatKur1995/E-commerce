import React from 'react';


export const Discount = () => {
  return (
    <>
      <div className="discount-container">
        <p className="discount-p">Discount Coupon</p>
        <form>
          <input type="text" className="discount-input" placeholder="Your code here" />
          <button className="discount-btn">APPLY</button>
        </form>
      </div>
    </>
  )
}