import "./MyAccountSupport.css";
import {MyAccountNav} from "../MyAccountNav/MyAccountNav";
import {TicketDetails} from "./TicketDetails/TicketDetails";
import React, {useState} from "react";
import {CurrentURL} from "../../../components/CurrentURL/CurrentURL";


export const MyAccountSupport = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);


    const toggleModal = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <>
            <CurrentURL/>
            <div className="my-account-support">
                <div className="wrapper-1200">
                    <MyAccountNav/>
                </div>
                <div className="support-container">
                    <p className="support-title">Support Tickets</p>
                    <div onClick={toggleModal} className="single-ticket">
                        <p className="single-ticket-id">TICKET ID <span>#1234132</span></p>
                        <p className="single-ticket-id">DATE <span>08/11/2023</span></p>
                        <p className="subject-ticket single-ticket-id">SUBJECT <span>Lorem ipsum dolor sit amet..</span>
                        </p>
                        <p className="status-ticket-open single-ticket-id">STATUS <span className="single-ticket-status-open">OPEN</span>
                        </p>
                    </div>
                    <div onClick={toggleModal} className="single-ticket">
                        <p className="single-ticket-id">TICKET ID <span>#1234132</span></p>
                        <p className="single-ticket-id">DATE <span>08/11/2023</span></p>
                        <p className="subject-ticket single-ticket-id">SUBJECT <span>Lorem ipsum dolor sit amet..</span>
                        </p>
                        <p className="status-ticket single-ticket-id">STATUS <span
                            className="single-ticket-status-closed">CLOSED</span></p>
                    </div>
                    {isOpen && (
                        <TicketDetails isOpen={isOpen} setIsOpen={setIsOpen} toggleModal={toggleModal}/>
                    )}
                </div>
            </div>
        </>
    );
};