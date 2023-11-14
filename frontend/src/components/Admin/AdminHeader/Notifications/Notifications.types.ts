import React from "react";

export interface NotificationsTypes {
    isNotificationsOpen: boolean;
    toggleNotifications: () => void;
    setNotificationsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}