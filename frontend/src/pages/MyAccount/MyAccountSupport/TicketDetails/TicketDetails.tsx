import "./TicketDetails.css";
import React, {useState} from "react";

import {TicketDetailsTypes} from "./TicketDetails.types";

export const TicketDetails: React.FC<TicketDetailsTypes> = ({setIsOpen, isOpen, toggleModal}) => {



    return (
        <div className="ticket-wrapper">
            <div className="ticket-container">
                <i onClick={toggleModal} className="close-ticket fa-solid fa-xmark"></i>
                <div className="ticket-details-wrapper">
                    <p className="ticket-details-info">TICKET DETAILS <span>#318989</span></p>
                    <p className="ticket-details-date"><i className="fa-regular fa-calendar"></i> 11.11.2023</p>
                    <p className="ticket-details-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                        provident!</p>
                </div>
                <div className="content-scroll">
                    <div className="ticket-content-wrapper">
                        <p className="ticket-content-username">John Doe <span>11.11.2023</span></p>
                        <p className="ticket-content-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci ducimus eos magni tempore. Cum eligendi est fugiat ratione recusandae soluta!</p>
                    </div>
                    <div className="ticket-content-wrapper-admin">
                        <p className="admin-user ticket-content-username">ADMIN <span>11.11.2023</span></p>
                        <p className="admin-user-text ticket-content-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis consequatur distinctio, harum quasi reprehenderit sapiente similique? Ad alias aliquid, animi architecto blanditiis commodi corporis dignissimos dolorem dolorum ducimus ea eligendi facere fugit id illo in ipsam iusto laudantium necessitatibus non officia quam quos, saepe tempora unde ut voluptates voluptatibus.</p>
                    </div>
                </div>
                <div className="form-support-reply">
                    <form className="support-reply">
                        <textarea
                            name="support-reply"
                            placeholder="Write your massange here..."
                        >
                        </textarea>
                        <button className="support-btn">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    );
};