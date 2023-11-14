import React, {useEffect, useState} from 'react';

export const SearchBar = () => {

    const [isPaused, setIsPaused] = useState(false);


    useEffect(() => {
        const phrases = ["FIFA 2023", "Cyberpunk 2077", "Elex 2" ];
        let currentPhraseIndex = 0;
        let currentLetterIndex = 0;
        let isDeleting = false;

        function typePhrase() {

            if (isPaused) return; // Jeśli animacja jest wstrzymana, nie kontynuuj

            const searchInput = document.querySelector(".search-input") as HTMLInputElement | null;
            if (!searchInput) return;

            const currentPhrase = phrases[currentPhraseIndex];

            if (!isDeleting && currentLetterIndex <= currentPhrase.length) {
                searchInput.setAttribute("placeholder", currentPhrase.substring(0, currentLetterIndex));
                currentLetterIndex++;
                setTimeout(typePhrase, 100);
            } else if (!isDeleting && currentLetterIndex > currentPhrase.length) {
                isDeleting = true;
                setTimeout(typePhrase, 2000); // Czekaj 2 sekundy przed rozpoczęciem usuwania
            } else if (isDeleting && currentLetterIndex > 0) {
                currentLetterIndex--;
                searchInput.setAttribute("placeholder", currentPhrase.substring(0, currentLetterIndex));
                setTimeout(typePhrase, 100);
            } else if (isDeleting && currentLetterIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(typePhrase, 500); // Krótka przerwa przed rozpoczęciem pisania nowego wyrażenia
            }

        }


        // Ustaw początkowy tekst
        typePhrase();

    }, []);


    return(
        <>
            <div className="search-bar-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder=""
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                ></input>
                <i className="fas fa-search search-icon"></i>
            </div>
        </>
    );
}
