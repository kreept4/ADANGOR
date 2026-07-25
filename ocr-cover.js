const Tesseract = require('tesseract.js');
const path = require('path');

const imgPath = path.join(__dirname, 'public', 'images', 'zach-book.png');

Tesseract.recognize(imgPath, 'eng', {
  logger: (m) => {
    if (m.status === 'recognizing text') {
      process.stdout.write(`\rOCR progress: ${(m.progress * 100).toFixed(0)}%`);
    }
  },
})
  .then(({ data: { text } }) => {
    console.log('\n\n--- RAW OCR OUTPUT ---\n');
    console.log(text);
    require('fs').writeFileSync('cover-ocr-output.txt', text, 'utf8');
    console.log('\n\nSaved to cover-ocr-output.txt');
  })
  .catch((err) => {
    console.error('OCR failed:', err.message);
  });