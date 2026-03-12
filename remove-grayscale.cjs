const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/grayscale group-hover:grayscale-0 /g, '');
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

walkDir('./components');
console.log('Done');
