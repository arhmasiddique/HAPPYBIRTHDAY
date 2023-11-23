const birthdayWish = document.getElementById("birthday-wish");
        const letter = [
          "  Happy birthday"," to the one who makes my heart skip a beat, even from miles away! On your special day"
        , 
          "I wish you all the joy, love, and laughter the universe has to offer",
          " Though we may be separated by distance know that my love for you knows no bounds",
        
          " May this day be as bright and beautiful as your soul. ",
          "I want you to feel the embrace of my love surrounding you like a gentle morning breeze"
        ,"Though we're miles apart, our hearts beat in harmony,and every beat echoes a promise of enduring love.",
          "In the tapestry of life, you're the most vibrant thread,",
          "weaving beauty into every moment we've shared.",
          "Your presence, even from a distance, is a constant source of inspiration and warmth.",
          "As you blow out the candles, may each flicker carry a whispered wish of mine to your heart.",
          ""];
    
        function displayWords() {
          letter.forEach((letter, index) => {
            setTimeout(() => {
              birthdayWish.innerHTML += `<p>${letter}</p>`;
            }, index * 800); // Adjust the speed by changing the milliseconds
          });
        }
    
        // Call the function when the page loads
        window.onload = displayWords;