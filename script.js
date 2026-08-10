const video = document.querySelector('#build-video');
const progressBar = document.querySelector('#progress-bar');
const videoTime = document.querySelector('#video-time');
const videoSection = document.querySelector('.video-section');
const revealItems = document.querySelectorAll('.reveal');
let duration = 0;
let targetTime = 0;
let frameRequest;

const formatTime = (seconds) => {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const hours = String(Math.floor(safeSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((safeSeconds % 3600) / 60)).padStart(2, '0');
  const remainder = String(safeSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${remainder}`;
};

const updateVideoFromScroll = () => {
  if (!videoSection) return;
  if (!duration && Number.isFinite(video.duration)) duration = video.duration;

  const sectionTop = videoSection.getBoundingClientRect().top + window.scrollY;
  const scrollableDistance = Math.max(1, videoSection.offsetHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, (window.scrollY - sectionTop) / scrollableDistance));
  targetTime = progress * duration;
  progressBar.style.width = `${progress * 100}%`;
  videoTime.textContent = formatTime(targetTime);
  if (duration && video.readyState >= 1 && !frameRequest) frameRequest = requestAnimationFrame(syncVideo);
};

const syncVideo = () => {
  if (video.readyState >= 1 && Number.isFinite(targetTime)) video.currentTime = targetTime;
  frameRequest = null;
};

const setVideoDuration = () => {
  if (Number.isFinite(video.duration)) {
    duration = video.duration;
    updateVideoFromScroll();
  }
};

video.addEventListener('loadedmetadata', setVideoDuration);
video.addEventListener('durationchange', setVideoDuration);
window.addEventListener('scroll', updateVideoFromScroll, { passive: true });
window.addEventListener('resize', updateVideoFromScroll);
updateVideoFromScroll();

const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.12 });
revealItems.forEach((item) => observer.observe(item));