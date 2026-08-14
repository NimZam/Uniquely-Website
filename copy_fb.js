const fs = require('fs');
const src = 'C:/Users/nimsa/.gemini/antigravity-ide/brain/d7852091-a3f3-4047-954f-e514a5cb3958/facebook_3d_icon_1786198995445.png';
const dest1 = 'd:/new uniquely/public/facebook_3d.png';
const dest2 = 'C:/Users/nimsa/.gemini/antigravity-ide/scratch/next-immersive-website/public/facebook_3d.png';

try {
  fs.copyFileSync(src, dest1);
  console.log('Copied to dest1');
} catch (e) {
  console.error('Error dest1:', e);
}

try {
  fs.copyFileSync(src, dest2);
  console.log('Copied to dest2');
} catch (e) {
  console.error('Error dest2:', e);
}
