const keyframesMap: Record<string, string> = {
  "fade-in": `@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
  "blurred-fade-in": `@keyframes blurred-fade-in {
  0% { opacity: 0; filter: blur(10px); }
  100% { opacity: 1; filter: blur(0); }
}`,
  "zoom-in": `@keyframes zoom-in {
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}`,
  "zoom-out": `@keyframes zoom-out {
  from { transform: scale(1.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}`,
  "slide-in-top": `@keyframes slide-in-top {
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
  "slide-in-bottom": `@keyframes slide-in-bottom {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}`,
  "slide-in-left": `@keyframes slide-in-left {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
  "slide-in-right": `@keyframes slide-in-right {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`,
  bounce: `@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`,
  pulse: `@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}`,
  shake: `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-10px); }
  40%, 80% { transform: translateX(10px); }
}`,
  tada: `@keyframes tada {
  0% { transform: scale(1); }
  10%, 20% { transform: scale(0.9) rotate(-3deg); }
  30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
  40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
  100% { transform: scale(1) rotate(0); }
}`,
  jelly: `@keyframes jelly {
  0%, 100% { transform: scale(1, 1); }
  25% { transform: scale(1.2, 0.8); }
  50% { transform: scale(0.8, 1.2); }
  75% { transform: scale(1.1, 0.9); }
}`,
  "flip-horizontal": `@keyframes flip-horizontal {
  0% { transform: perspective(400px) rotateY(0); }
  100% { transform: perspective(400px) rotateY(360deg); }
}`,
  swing: `@keyframes swing {
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}`,
  wobble: `@keyframes wobble {
  0% { transform: translateX(0%); }
  15% { transform: translateX(-25%) rotate(-5deg); }
  30% { transform: translateX(20%) rotate(3deg); }
  45% { transform: translateX(-15%) rotate(-3deg); }
  60% { transform: translateX(10%) rotate(2deg); }
  75% { transform: translateX(-5%) rotate(-1deg); }
  100% { transform: translateX(0%); }
}`,
  "rotate-360": `@keyframes rotate-360 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`,
  blink: `@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}`,
  "bounce-fade-in": `@keyframes bounce-fade-in {
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
}`,
  "contract-horizontally": `@keyframes contract-horizontally {
  from { transform: scaleX(1); }
  to { transform: scaleX(0); }
}`,
  "contract-vertically": `@keyframes contract-vertically {
  from { transform: scaleY(1); }
  to { transform: scaleY(0); }
}`,
  "expand-horizontally": `@keyframes expand-horizontally {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}`,
  "expand-vertically": `@keyframes expand-vertically {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}`,
  dancing: `@keyframes dancing {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(-5deg); }
  75% { transform: translateY(10px) rotate(5deg); }
}`,
  "fade-in-left": `@keyframes fade-in-left {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}`,
  "fade-in-right": `@keyframes fade-in-right {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}`,
  "fade-in-up": `@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}`,
  "fade-in-down": `@keyframes fade-in-down {
  from { opacity: 0; transform: translateY(-50px); }
  to { opacity: 1; transform: translateY(0); }
}`,
  "fade-out": `@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}`,
  "fade-out-down": `@keyframes fade-out-down {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(50px); }
}`,
  "fade-out-left": `@keyframes fade-out-left {
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(-50px); }
}`,
  "fade-out-right": `@keyframes fade-out-right {
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(50px); }
}`,
  "fade-out-up": `@keyframes fade-out-up {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-50px); }
}`,
};
export default keyframesMap;
