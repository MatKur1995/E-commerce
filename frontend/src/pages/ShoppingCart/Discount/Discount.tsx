import React, { useState } from 'react';
import axios from 'axios';

type MyComponentProps = {
  calculateTotalSum: () => number;
  // inne propsy
};
export const Discount:React.FC<MyComponentProps> = ({ calculateTotalSum })  => {


  const [coupon, setCoupon] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon(event.target.value);
  };
  const handleCheckDiscount = async () => {
    try {
      const data = {
        coupon: coupon,
      };

      const response = await axios.post('http://localhost:5000/discount-codes/check', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error during the Axios POST request:', error);
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
            value={coupon}
          onChange={handleInputChange}/>
          <button onClick={handleCheckDiscount} className="discount-btn">APPLY</button>
        </form>
      </div>
    </>
  )
}