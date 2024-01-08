import React, { useState } from 'react';
import './Modal.css';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    codes: string[];
    addCode: (code: string) => void;
    removeCode: (index: number) => void;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, codes, addCode, removeCode }) => {
    const [newCode, setNewCode] = useState('');


    const handleAddCode = async () => {
        try {
            // Zakładając, że serwer przyjmuje kod rabatowy na tym endpoint
            const response = await axios.post('http://localhost:5000/api/discount-codes', {
                code: newCode
            });

            // Dodaj kod do listy (lub obsłuż odpowiedź serwera)
            addCode(newCode);
            setNewCode('');

            // Opcjonalnie: Obsługa odpowiedzi serwera
            console.log(response.data);
        } catch (error) {
            console.error('Wystąpił błąd przy wysyłaniu kodu:', error);
        }
    };


    if (!isOpen) return null;

    return (
        <div className="modal-background">
            <div className="modal-container">
                <span className="modal-close" onClick={onClose}>&times;</span>
                <div className="modal-actions">
                    <input
                        className="modal-input"
                        type="text"
                        value={newCode}
                        onChange={(e) => setNewCode(e.target.value)}
                        placeholder="Wprowadź kod rabatowy"
                    />
                    <button className="modal-button" onClick={handleAddCode}>Add</button>
                </div>
                <ul className="modal-code-list">
                    {codes.map((code, index) => (
                        <li key={index} className="modal-code-item">
                            {code}
                            <button className="modal-code-remove-btn" onClick={() => removeCode(index)}>Usuń</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

