const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace Tailwind classes
  content = content.replace(/purple-700/g, '__PURPLE_950__');
  content = content.replace(/purple-600/g, '__PURPLE_900__');
  content = content.replace(/purple-500/g, '__PURPLE_800__');
  content = content.replace(/purple-400/g, '__PURPLE_700__');
  
  content = content.replace(/__PURPLE_950__/g, 'purple-950');
  content = content.replace(/__PURPLE_900__/g, 'purple-900');
  content = content.replace(/__PURPLE_800__/g, 'purple-800');
  content = content.replace(/__PURPLE_700__/g, 'purple-700');

  // Replace RGB values (used in rgba)
  // 168,85,247 (purple-500) -> 107,33,168 (purple-800)
  content = content.replace(/168,85,247/g, '107,33,168');
  
  // 192,132,252 (purple-400) -> 126,34,206 (purple-700)
  content = content.replace(/192,132,252/g, '126,34,206');
  
  // 147,51,234 (purple-600) -> 88,28,135 (purple-900)
  content = content.replace(/147,51,234/g, '88,28,135');

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
