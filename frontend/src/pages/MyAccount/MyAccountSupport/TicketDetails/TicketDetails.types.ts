import React, {Dispatch, SetStateAction} from "react";

export interface TicketDetailsTypes {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    toggleModal: () => void;
}