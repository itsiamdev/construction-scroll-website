const video = document.querySelector('#build-video');
const progressBar = document.querySelector('#progress-bar');
const videoTime = document.querySelector('#video-time');
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
  if (!duration) return;
  const section = document.querySelector('.video-section');
  const sectionTop = section.offsetTop;
  const scrollableDistance = section.offsetHeight - window.innerHeight;
  const progress = Math.min(1, Math.max(0, (window.scrollY - sectionTop) / scrollableDistance));
  targetTime = progress * duration;
  progressBar.style.width = `${progress * 100}%`;
  videoTime.textContent = formatTime(targetTime);
  if (!frameRequest) frameRequest = requestAnimationFrame(syncVideo);
};

const syncVideo = () => { video.currentTime = targetTime; frameRequest = null; };

video.addEventListener('loadedmetadata', () => { duration = video.duration; updateVideoFromScroll(); });
window.addEventListener('scroll', updateVideoFromScroll, { passive: true });
window.addEventListener('resize', updateVideoFromScroll);

const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.12 });
revealItems.forEach((item) => observer.observe(item));