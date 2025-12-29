#!/usr/bin/env node

/**
 * Build Script for Prism Dashboard
 * Bundles all custom cards into a single prism-dashboard.js file
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const CUSTOM_COMPONENTS_DIR = path.join(__dirname, '..', 'custom-components');
const OUTPUT_FILE = path.join(DIST_DIR, 'prism-dashboard.js');

// Cards to bundle (order matters for dependencies)
const CARDS = [
  'prism-button.js',
  'prism-button-light.js',
  'prism-heat.js',
  'prism-heat-light.js',
  'prism-heat-small.js',
  'prism-heat-small-light.js',
  'prism-media.js',
  'prism-media-light.js',
  'prism-calendar.js',
  'prism-calendar-light.js',
  'prism-shutter.js',
  'prism-shutter-light.js',
  'prism-shutter-vertical.js',
  'prism-shutter-vertical-light.js',
  'prism-vacuum.js',
  'prism-vacuum-light.js',
  'prism-led.js',
  'prism-led-light.js',
  'prism-sidebar.js',
  'prism-sidebar-light.js',
  'prism-energy.js',
  'prism-energy-horizontal.js',
  'prism-3dprinter.js',
  'prism-bambu.js',
  'prism-creality.js',
];

// Get version from package.json or use default
let version = '1.0.0';
try {
  const pkg = require('../package.json');
  version = pkg.version || version;
} catch (e) {
  // No package.json, use default version
}

// Header for the bundled file
const HEADER = `/**
 * Prism Dashboard - Custom Cards Collection
 * https://github.com/BangerTech/Prism-Dashboard
 * 
 * Version: ${version}
 * Build Date: ${new Date().toISOString()}
 * 
 * This file contains all Prism custom cards bundled together.
 * Just add this single file as a resource in Lovelace:
 * /hacsfiles/Prism-Dashboard/prism-dashboard.js
 */

console.info(
  '%c PRISM-DASHBOARD %c v${version} ',
  'color: white; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
  'color: #667eea; background: #e8e8e8; font-weight: bold; padding: 4px 8px; border-radius: 0 4px 4px 0;'
);

`;

function build() {
  console.log('🔨 Building Prism Dashboard bundle...\n');
  
  let bundle = HEADER;
  let cardCount = 0;
  let skipped = [];
  
  for (const cardFile of CARDS) {
    const cardPath = path.join(CUSTOM_COMPONENTS_DIR, cardFile);
    
    if (!fs.existsSync(cardPath)) {
      skipped.push(cardFile);
      continue;
    }
    
    const content = fs.readFileSync(cardPath, 'utf8');
    
    // Add separator comment
    bundle += `\n// ============================================\n`;
    bundle += `// ${cardFile}\n`;
    bundle += `// ============================================\n\n`;
    bundle += content;
    bundle += '\n';
    
    cardCount++;
    console.log(`  ✅ Added: ${cardFile}`);
  }
  
  // Write the bundle
  fs.writeFileSync(OUTPUT_FILE, bundle);
  
  // Also copy to www/custom-components for manual installations
  const wwwOutput = path.join(__dirname, '..', 'www', 'custom-components', 'prism-dashboard.js');
  fs.writeFileSync(wwwOutput, bundle);
  
  console.log('\n' + '='.repeat(50));
  console.log(`✨ Bundle complete!`);
  console.log(`   Cards bundled: ${cardCount}`);
  console.log(`   Skipped: ${skipped.length > 0 ? skipped.join(', ') : 'none'}`);
  console.log(`   Output: ${OUTPUT_FILE}`);
  console.log(`   Size: ${(fs.statSync(OUTPUT_FILE).size / 1024).toFixed(2)} KB`);
  console.log('='.repeat(50));
}

build();
