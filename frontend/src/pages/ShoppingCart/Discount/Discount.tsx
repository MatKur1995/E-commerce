import React, { useState } from 'react';
import axios from 'axios';
import {DiscountProps} from "../../../types/discountCodes.types";

export const Discount: React.FC<DiscountProps> = ({ calculateTotalSum, onApplyDiscount }) => {


  const [coupon, setCoupon] = useState('')
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const applyDiscount = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const data = { discountCode };
      const response = await axios.post('http://localhost:5000/discount-codes/check', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.data && response.data.discountPercentage !== undefined) {
        onApplyDiscount(response.data.discountPercentage);
        alert('Discount applied: ' + response.data.discountPercentage + '%');
      } else {
        alert('Invalid discount code!');
        onApplyDiscount(0);
      }
    } catch (error) {
      console.error('Error applying discount code:', error);
      alert('There was an error processing your discount code.');
      onApplyDiscount(0);
    }
  };

  return (
    <>
      <div className="discount-container">
        <p className="discount-p">Discount Coupon</p>
        <form>
          <input
            type="text"
            className="discount-input"
            placeholder="Your code here"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}/>
          <button onClick={applyDiscount} className="discount-btn">APPLY</button>
        </form>
      </div>
    </>
  )
}