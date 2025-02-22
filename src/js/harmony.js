import { MUSIC_API_KEY } from "./config.js";
async function fetchMusic(query) {
    const response = await fetch(`https://freesound.org/apiv2/search/text/?query=${query}&token=${MUSIC_API_KEY}`);
    const data = await response.json();
    return data.results;
}

async function loadMusic(query) {
    const musicContainer = document.getElementById("music-container");
    musicContainer.innerHTML = "<p class='text-gray-800 text-center uppercase col-span-full'>Loading music...</p>";
    const sounds = await fetchMusic(query);
    
    musicContainer.innerHTML = sounds.length ? "" : "<p class='text-red-500 col-span-full text-center'>No sounds found.</p>";
    
    for (let sound of sounds.slice(0, 6)) { 
        const soundResponse = await fetch(`https://freesound.org/apiv2/sounds/${sound.id}/?token=${MUSIC_API_KEY}`);
        const soundData = await soundResponse.json();
        
        const card = document.createElement("div");
        card.className = "bg-gray-50 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition duration-300 flex flex-col items-center text-center";
        card.innerHTML = `
            <h3 class="text-lg font-semibold text-gray-800">${sound.name}</h3>
            <audio src="${soundData.previews["preview-hq-mp3"]}" class="mt-2 w-full" controls></audio>
        `;
        musicContainer.appendChild(card);
    }
}

document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".category-btn").forEach(b => {
            b.classList.remove('bg-white', 'text-black', 'shadow-lg');
            b.classList.add('bg-gray-800', 'text-white');
        });

        btn.classList.remove('bg-gray-800', 'text-white');
        btn.classList.add('bg-white', 'text-black', 'shadow-lg');
        
        loadMusic(btn.dataset.query);
    });
});
