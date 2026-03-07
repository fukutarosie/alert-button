// 1. Get the elements from our HTML
const myButton = document.getElementById('startSpeechBtn');
const myDisplay = document.getElementById('transcript-result');

// 2. Setup the Speech Recognition API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognizer = new SpeechRecognition();

// This variable will hold our finished sentences
let finalSentence = "";

// 3. Basic Settings
recognizer.lang = 'en-US';        
recognizer.continuous = true;     
recognizer.interimResults = true; 

// 4. What happens when we click the button
myButton.onclick = function() {
    if (myButton.innerText === "Start Speech Detection" || myButton.innerText === "Mulai Deteksi Suara") {
        // Reset the sentence for a new recording
        finalSentence = ""; 
        recognizer.start();
        myButton.innerText = "Stop and Process AI";
        myButton.style.backgroundColor = "red";
    } else {
        recognizer.stop();
        myButton.innerText = "Start Speech Detection";
        myButton.style.backgroundColor = "#4A90E2";

        // Send to OpenAI only if we actually said something
        if (finalSentence.trim() !== "") {
            sendToAI(finalSentence);
        }
    }
};

// 5. What happens when the computer hears a sound
recognizer.onresult = function(event) {
    let temporarySentence = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
        let result = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
            finalSentence = finalSentence + result + ". ";
        } else {
            temporarySentence = result;
        }
    }

    // Live update on screen
    myDisplay.innerHTML = "<b>" + finalSentence + "</b> <i>" + temporarySentence + "</i>";
};

// 6. Function to talk to your router.js
async function sendToAI(textInput) {
    // Show a loading state
    myDisplay.innerHTML = "<b>" + textInput + "</b><br><br><i style='color: #666;'>Connecting to GPT-4o...</i>";
    
    try {
        const response = await fetch('/api/router', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: textInput })
        });

        const data = await response.json();

        if (data.improved) {
            // Success! Show both versions
            myDisplay.innerHTML = `
                <div style="text-align: left;">
                    <p><strong>Original:</strong> ${data.original}</p>
                    <hr>
                    <p style="color: #2c5282;"><strong>AI Professional Version:</strong> ${data.improved}</p>
                </div>
            `;
        }
    } catch (error) {
        console.error("Connection error:", error);}}