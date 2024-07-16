// const chatbotToggler = document.querySelector(".chatbot-toggler");
// const closeBtn = document.querySelector(".close-btn");
// const chatbox = document.querySelector(".chatbox");
// const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector(".chat-input span");

// let userMessage = null; // Variable to store user's message
// // const API_KEY = "sk-proj-TyEs8Ddt0wDPPMLnXDB5T3BlbkFJJFNMmk4pua8yblRhyW5w"; // Paste your API key here
// const inputInitHeight = chatInput.scrollHeight;

// import intents from './intents1.json'; // Assuming intents.json contains your intents and responses

// const findResponse = (userMessage) => {
//     // Iterate through intents and find a match
//     for (const intent of intents) {
//         if (intent.input.includes(userMessage.toLowerCase())) {
//             // Return a random response from the matched intent
//             return intent.responses[Math.floor(Math.random() * intent.responses.length)];
//         }
//     }
//     // If no match is found, return a default response
//     return "Sorry, I didn't understand that.";
// }

// const generateResponse = (chatElement) => {
//     const messageElement = chatElement.querySelector("p");
//     messageElement.textContent = findResponse(userMessage);
// }


// // const createChatLi = (message, className) => {
// //     // Create a chat <li> element with passed message and className
// //     const chatLi = document.createElement("li");
// //     chatLi.classList.add("chat", `${className}`);
// //     let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
// //     chatLi.innerHTML = chatContent;
// //     chatLi.querySelector("p").textContent = message;
// //     return chatLi; // return chat <li> element
// // }

// // const generateResponse = (chatElement) => {
// //     const API_URL = "https://api.openai.com/v1/chat/completions";
// //     const messageElement = chatElement.querySelector("p");

// //     // Define the properties and message for the API request
// //     const requestOptions = {
// //         method: "POST",
// //         headers: {
// //             "Content-Type": "application/json",
// //             "Authorization": `Bearer ${API_KEY}`
// //         },
// //         body: JSON.stringify({
// //             model: "gpt-3.5-turbo",
// //             messages: [{role: "user", content: userMessage}],
// //         })
// //     }

// //     // Send POST request to API, get response and set the reponse as paragraph text
// //     fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
// //         messageElement.textContent = data.choices[0].message.content.trim();
// //     }).catch(() => {
// //         messageElement.classList.add("error");
// //         messageElement.textContent = "Oops! Something went wrong. Please try again.";
// //     }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
// // }

// const handleChat = () => {
//     userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
//     if(!userMessage) return;

//     // Clear the input textarea and set its height to default
//     chatInput.value = "";
//     chatInput.style.height = `${inputInitHeight}px`;

//     // Append the user's message to the chatbox
//     chatbox.appendChild(createChatLi(userMessage, "outgoing"));
//     chatbox.scrollTo(0, chatbox.scrollHeight);
    
//     setTimeout(() => {
//         // Display "Thinking..." message while waiting for the response
//         const incomingChatLi = createChatLi("Thinking...", "incoming");
//         chatbox.appendChild(incomingChatLi);
//         chatbox.scrollTo(0, chatbox.scrollHeight);
//         generateResponse(incomingChatLi);
//     }, 600);
// }

// chatInput.addEventListener("input", () => {
//     // Adjust the height of the input textarea based on its content
//     chatInput.style.height = `${inputInitHeight}px`;
//     chatInput.style.height = `${chatInput.scrollHeight}px`;
// });

// chatInput.addEventListener("keydown", (e) => {
//     // If Enter key is pressed without Shift key and the window 
//     // width is greater than 800px, handle the chat
//     if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
//         e.preventDefault();
//         handleChat();
//     }
// });

// sendChatBtn.addEventListener("click", handleChat);
// closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
// chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));




// const chatbotToggler = document.querySelector(".chatbot-toggler");
// const closeBtn = document.querySelector(".close-btn");
// const chatbox = document.querySelector(".chatbox");
// const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector(".chat-input span");

// let userMessage = null; // Variable to store user's message
// const intents = {}; // Object to store intents and responses
// const inputInitHeight = chatInput.scrollHeight;

// Function to load intents from JSON file
// const loadIntents = async () => {
//     const response = await fetch("./intents1.json");
//     const data = await response.json();
//     data.intents.forEach(intent => {
//         intents[intent.tag] = intent.responses;
//     });
// };

// Function to generate a random response from intents
// const generateResponse = () => {
//     const tags = Object.keys(intents);
//     const randomTag = tags[Math.floor(Math.random() * tags.length)];
//     const responses = intents[randomTag];
//     return responses[Math.floor(Math.random() * responses.length)];
// };

// const createChatLi = (message, className) => {
//     const chatLi = document.createElement("li");
//     chatLi.classList.add("chat", `${className}`);
//     let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
//     chatLi.innerHTML = chatContent;
//     chatLi.querySelector("p").textContent = message;
//     return chatLi;
// }

// const handleChat = () => {
//     userMessage = chatInput.value.trim();
//     if (!userMessage) return;

//     chatInput.value = "";
//     chatInput.style.height = `${inputInitHeight}px`;

//     chatbox.appendChild(createChatLi(userMessage, "outgoing"));
//     chatbox.scrollTo(0, chatbox.scrollHeight);

//     setTimeout(() => {
//         const incomingChatLi = createChatLi("Thinking...", "incoming");
//         chatbox.appendChild(incomingChatLi);
//         chatbox.scrollTo(0, chatbox.scrollHeight);
        
//         const response = generateResponse();
//         const responseChatLi = createChatLi(response, "incoming");
//         chatbox.appendChild(responseChatLi);
//         chatbox.scrollTo(0, chatbox.scrollHeight);
//     }, 600);
// }

const backendURL = 'http://your-backend-url'; // Replace 'http://your-backend-url' with your actual backend URL

// Function to send user message to the backend and receive response
const sendMessageToBackend = async (message) => {
    try {
        const response = await fetch(`${backendURL}/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error sending message to backend:', error);
    }
};

// Function to handle user input and send messages to backend
const handleChat = async () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    try {
        const responseData = await sendMessageToBackend(userMessage);

        setTimeout(() => {
            const incomingChatLi = createChatLi("Thinking...", "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);

            const responseChatLi = createChatLi(responseData.message, "incoming");
            chatbox.appendChild(responseChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
    } catch (error) {
        console.error('Error handling chat:', error);
    }
};

// Event listeners remain the same



chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

// Load intents when the page is loaded
window.addEventListener("DOMContentLoaded", loadIntents);
