const videoData = [
  { title: "Lake Sunset", thumbnail: "./assets/lakesunset-thumbail.jpg", videoSrc: "./videos/Sunset.mp4" },
  { title: "River Forest", thumbnail: "./assets/riverForest-thumbnail.jpg", videoSrc: "./videos/Sunset.mp4" },
  { title: "Rain", thumbnail: "./assets/rain-thumbnail.jpg", videoSrc: "./videos/Sunset.mp4" },
  { title: "The Waterfall", thumbnail: "./assets/waterfall-thumbnail.jpg", videoSrc: "./videos/Sunset.mp4" },
  { title: "Snow", thumbnail: "./assets/snow-thumbnail.jpg", videoSrc: "./videos/Sunset.mp4" },
  { title: "Mountain Lake", thumbnail: "./assets/mountainLake-thumbnail.jpg", videoSrc: "./videos/Sunset.mp4" }
];

const container = document.getElementById("video-container");
const videoPlayer = document.getElementById("video-player");
const videoElement = document.getElementById("my-video");
const closeButton = document.getElementById("close-btn");

videoData.forEach(video => {
  const videoCard = document.createElement("div");
  videoCard.className = "relative w-full max-w-xs sm:max-w-sm bg-gray-500 rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105";
  videoCard.innerHTML = `
    <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-48 object-cover">
    <div class="absolute bottom-2 left-5">
      <p class="text-lg font-bold text-white">${video.title}</p>
    </div>
    <i class="ri-play-circle-fill absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl cursor-pointer"></i>
  `;

  videoCard.querySelector(".ri-play-circle-fill").addEventListener("click", () => openVideoPlayer(video.videoSrc));
  container.appendChild(videoCard);
});

function openVideoPlayer(src) {
  videoElement.src = src;
  videoPlayer.classList.remove("hidden");
  videoPlayer.classList.add("flex");
}

closeButton.addEventListener("click", () => {
  videoPlayer.classList.add("hidden");
  videoElement.pause();
  videoElement.src = "";
});