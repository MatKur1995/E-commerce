import "./UsersReview.css"
import React from "react";
import {UserReviewTypes} from "./UserReview.types";
import useravatar from "../UsersComments/istockphoto-1337144146-612x612.jpg";


export const UsersReview: React.FC<UserReviewTypes> = ({activeReviews}) => {


    return (
        <>
            {activeReviews && (
                <div className="test">
                    <div className="rating">
                        <p className="p-rating">4,0</p>
                        <div className="rating-stars">
                            <i className="fill-star fa-solid fa-star"></i>
                            <i className="fill-star fa-solid fa-star"></i>
                            <i className="fill-star fa-solid fa-star"></i>
                            <i className="fill-star fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <p className="u-rating">32 Reviews</p>
                    </div>
                    <div className="user-rate">
                        <div className="wrapper-rating">
                            <p>YOUR RATING</p>
                            <div className="user-stars">
                                <i className="user-star fa-solid fa-star"></i>
                                <i className="user-star fa-solid fa-star"></i>
                                <i className="user-star fa-solid fa-star"></i>
                                <i className="user-star fa-solid fa-star"></i>
                                <i className="user-star fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div className="comment-form">
                            <div className="form-img">
                                <img src={useravatar} alt=""/>
                            </div>
                            <form className="form-comment">
                            <textarea
                                name="rate-comment"
                                placeholder="Add your rate comment">
                            </textarea>
                                <button className="rate-button">Post rate</button>
                            </form>
                        </div>
                    </div>
                    <div className="comments-container">
                        <p className="comments-title">USER RATES</p>
                    </div>
                    <div className="rating-comments">
                        <div className="rating-comments-wraper">
                            <div className="rating-avatar-wrapper">
                                <img src={useravatar} alt=""/>
                            </div>
                            <div className="user-rate-comments comments">
                                <div className="comments-username-time">
                                    <p className="comment-username">John Doe</p>
                                    <p className="comment-time">31.10.2023</p>
                                </div>
                                <div className="comment-res">
                                    <p className="comment-respon">
                                        <i className="user-star-comment fa-solid fa-star"></i>
                                        <i className="user-star-comment fa-solid fa-star"></i>
                                        <i className="user-star-comment fa-solid fa-star"></i>
                                        <i className="user-star-comment fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </p>
                                </div>
                                <div className="comments-content">
                                    <p className="comments-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Accusantium aliquid animi beatae expedita minus nam necessitatibus non officiis
                                        quia ut.</p>
                                </div>
                                <div className="comments-actions">
                                    <button className="comment-reply"><i className="fa-solid fa-reply"></i> Reply
                                    </button>
                                    <button className="comment-reply"><i
                                        className="fa-regular fa-pen-to-square"></i> Edit
                                    </button>
                                    <button className="comment-reply"><i className="fa-solid fa-xmark"></i> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}