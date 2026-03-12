const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/yellow-300/g, 'purple-400');
  content = content.replace(/yellow-400/g, 'purple-500');
  content = content.replace(/yellow-500/g, 'purple-600');
  content = content.replace(/yellow-600/g, 'purple-700');
  content = content.replace(/250,204,21/g, '168,85,247');
  content = content.replace(/253,224,71/g, '192,132,252');
  content = content.replace(/234,179,8/g, '147,51,234');
  content = content.replace(/from-yellow-400 to-yellow-500 text-black/g, 'from-purple-500 to-purple-600 text-white');
  content = content.replace(/text-black font-black/g, 'text-white font-black');
  fs.writeFileSync(filePath, content, 'utf8');
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir('./components');
replaceInFile('./App.tsx');
console.log('Done');
