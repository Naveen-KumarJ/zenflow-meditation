import { GEMINI_API_KEY } from "./config.js";
let contextContainer = document.getElementById('context-container');
const api_url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

async function run(question) {
    document.querySelector('input').value = "";
    const questionDiv = `<div class="question self-start mb-5 bg-black text-white px-5 font-semibold py-1.5 rounded-md w-fit">${question}</div>`;
    contextContainer.innerHTML+=questionDiv;
    const prompt = `Hey, your name is Hope, and you are a chatbot for a meditation website. Follow these rules while responding:  
                    **Do not introduce yourself** unless the user asks for your name.  
                    **If the user introduces themselves, then you can introduce yourself too.**     
                    **For meditation-related questions, provide a clear and helpful answer.**  
                    **If the question is not related to meditation, politely respond with:**  *"This is not related to meditation. Zenflow has trained me only for meditation-related topics."*  
                    Here is the user's question: **${question}**  
                    Now, generate a response based on the above conditions.`;
    const requestBody = {
        contents: [{ parts: [{ text: prompt }] }]
    };

    try {
        const response = await fetch(api_url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        if (data && data.candidates) {
            console.log(data.candidates[0].content.parts[0].text);
            let result = data.candidates[0].content.parts[0].text;
            contextContainer.innerHTML+= `<div class="answer self-end mb-5 bg-blue-500 text-white px-5 font-semibold py-1.5 rounded-md w-fit">${result}</div>`
        } else {
            console.error("Invalid response:", data);
            contextContainer.innerHTML+= `<div class="answer self-end mb-5 bg-blue-500 text-white px-5 font-semibold py-1.5 rounded-md w-fit">Sorry, Try again Later</div>`
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

document.getElementById('send-btn').addEventListener('click',()=>{
    const inputVal = document.querySelector('input').value.trim();
    if(!inputVal) return;
    run(inputVal);
});
// run("What is meditation?");


