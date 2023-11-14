import "./UsersComments.css"
import React from "react";
import {UserCommentsTypes} from "./UserComments.types";

import useravatar from "./istockphoto-1337144146-612x612.jpg"


export const UsersComments: React.FC<UserCommentsTypes> = ({activeComment}) => {


    return (
        <>
            {activeComment && (
                <div className="comments-wrapper">
                    <div className="comment-form">
                        <div className="form-img">
                            <img src={useravatar} alt=""/>
                        </div>
                        <form className="form-comment">
                            <textarea name="comment" placeholder="Add a comment..."></textarea>
                            <button className="send-comment">Comment</button>
                        </form>
                    </div>
                    <div className="comments-container">
                        <p className="comments-title">COMMENTS</p>
                    </div>
                    <div className="comments">
                        <div className="comments-username-time">
                            <div className="user-avatar-wrapper">
                                <img src={useravatar} alt=""/>
                            </div>
                            <div>
                                <div className="user-time-name-wrapper">
                                    <p className="comment-username">John Doe</p>
                                    <p className="comment-time">31.10.2023</p>
                                </div>
                                <div className="comments-content">
                                    <p className="comments-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Accusantium
                                        aliquid animi beatae expedita minus nam necessitatibus non officiis quia ut.</p>
                                </div>
                                <div className="comments-actions">
                                    <button className="comment-reply"><i className="fa-solid fa-reply"></i> Reply</button>
                                    <button className="comment-reply"><i className="fa-regular fa-pen-to-square"></i> Edit
                                    </button>
                                    <button className="comment-reply"><i className="fa-solid fa-xmark"></i> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="comments-reply">
                            <div className="user-reply-wrapper">
                                <img src={useravatar} alt=""/>
                            </div>
                            <div>
                                <div className="comments-username-time">
                                    <p className="reply-username-admin comment-username">Admin</p>
                                    <p className="comment-time">31.10.2023</p>
                                </div>

                                <div className="comment-res">
                                    <p className="comment-respon"><i className="fa-solid fa-reply"></i> Responding to John
                                        Doe</p>
                                </div>
                                <div className="comments-content">
                                    <p className="comments-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Accusantium
                                        aliquid animi beatae expedita minus nam necessitatibus non officiis quia ut.</p>
                                </div>
                                <div className="comments-actions">
                                    <button className="comment-reply"><i className="fa-solid fa-reply"></i> Reply</button>
                                    <button className="comment-reply"><i className="fa-regular fa-pen-to-square"></i> Edit
                                    </button>
                                    <button className="comment-reply"><i className="fa-solid fa-xmark"></i> Delete
                                    </button>
                                </div>
                            </div>
                            </div>
                        <div className="comments-reply">
                            <div className="user-reply-wrapper">
                                <img src={useravatar} alt=""/>
                            </div>
                            <div>
                                <div className="comments-username-time">
                                    <p className="reply-username-admin comment-username">Admin</p>
                                    <p className="comment-time">31.10.2023</p>
                                </div>

                                <div className="comment-res">
                                    <p className="comment-respon"><i className="fa-solid fa-reply"></i> Responding to John
                                        Doe</p>
                                </div>
                                <div className="comments-content">
                                    <p className="comments-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Accusantium
                                        aliquid animi beatae expedita minus nam necessitatibus non officiis quia ut.</p>
                                </div>
                                <div className="comments-actions">
                                    <button className="comment-reply"><i className="fa-solid fa-reply"></i> Reply</button>
                                    <button className="comment-reply"><i className="fa-regular fa-pen-to-square"></i> Edit
                                    </button>
                                    <button className="comment-reply"><i className="fa-solid fa-xmark"></i> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="comments-reply">
                            <div className="user-reply-wrapper">
                                <img src={useravatar} alt=""/>
                            </div>
                            <div>
                                <div className="comments-username-time">
                                    <p className="reply-username-admin comment-username">Admin</p>
                                    <p className="comment-time">31.10.2023</p>
                                </div>

                                <div className="comment-res">
                                    <p className="comment-respon"><i className="fa-solid fa-reply"></i> Responding to John
                                        Doe</p>
                                </div>
                                <div className="comments-content">
                                    <p className="comments-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Accusantium
                                        aliquid animi beatae expedita minus nam necessitatibus non officiis quia ut.</p>
                                </div>
                                <div className="comments-actions">
                                    <button className="comment-reply"><i className="fa-solid fa-reply"></i> Reply</button>
                                    <button className="comment-reply"><i className="fa-regular fa-pen-to-square"></i> Edit
                                    </button>
                                    <button className="comment-reply"><i className="fa-solid fa-xmark"></i> Delete
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="comments">
                        <div className="comments-username-time">
                            <div className="user-avatar-wrapper">
                                <img src={useravatar} alt=""/>
                            </div>
                            <div>
                                <div className="user-time-name-wrapper">
                                    <p className="comment-username">John Doe</p>
                                    <p className="comment-time">31.10.2023</p>
                                </div>
                                <div className="comments-content">
                                    <p className="comments-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Accusantium
                                        aliquid animi beatae expedita minus nam necessitatibus non officiis quia ut.</p>
                                </div>
                                <div className="comments-actions">
                                    <button className="comment-reply"><i className="fa-solid fa-reply"></i> Reply</button>
                                    <button className="comment-reply"><i className="fa-regular fa-pen-to-square"></i> Edit
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
};