document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("contactVideo");
    const playBtn = document.getElementById("playBtn");
    const playIcon = document.getElementById("playIcon");
    const pauseIcon = document.getElementById("pauseIcon");
    const muteBtn = document.getElementById("muteBtn");
    const muteIcon = document.getElementById("muteIcon");
    const unmuteIcon = document.getElementById("unmuteIcon");
    const seekBar = document.getElementById("seekBar");

    // 1. Play / Pause Logic
    function togglePlay() {
    if (video.paused) {
        video.play();
        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("block");
        pauseIcon.classList.add("block");
    } else {
        video.pause();
        pauseIcon.classList.add("hidden");
        playIcon.classList.remove("block");
        playIcon.classList.add("block");
    }
    }
    playBtn.addEventListener("click", togglePlay);
    video.addEventListener("click", togglePlay); // Allows clicking directly on the video window

    // 2. Mute / Unmute Logic
    muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    if (video.muted) {
        unmuteIcon.classList.add("hidden");
        muteIcon.classList.remove("hidden");
    } else {
        muteIcon.classList.add("hidden");
        unmuteIcon.classList.remove("hidden");
    }
    });

    // 3. Link Video Progress to Seek Bar Track
    video.addEventListener("timeupdate", () => {
    if (!isNaN(video.duration)) {
        const value = (video.currentTime / video.duration) * 100;
        seekBar.value = value;
    }
    });

    // 4. Update Video Position When User Drags the Range Seek Bar
    seekBar.addEventListener("input", () => {
    const time = (seekBar.value / 100) * video.duration;
    video.currentTime = time;
    });
});