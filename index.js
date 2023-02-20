function openVideo() {
    var videoUrl = "https://www.youtube.com/embed/1dPGjgTX-kI";
    var iframe = document.createElement("iframe");
    iframe.setAttribute("autoplay", "1");
    iframe.src = videoUrl;
    var videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = "";
    videoContainer.appendChild(iframe);
    videoContainer.style.display = "block";
}
function closeVideo() {
    var videoContainer = document.getElementById("video-container");
    videoContainer.style.display = "none";
}