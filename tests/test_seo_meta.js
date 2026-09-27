/**
 * Unit Test for Step 7.10: Open Graph, Twitter Cards, and Audiobook JSON-LD
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('--- Running test_seo_meta.js ---');

const indexPath = path.join(__dirname, '../index.html');
const readerPath = path.join(__dirname, '../reader.html');

const indexHtml = fs.readFileSync(indexPath, 'utf-8');
const readerHtml = fs.readFileSync(readerPath, 'utf-8');

function verifySocialMeta(html, filename) {
  assert(html.includes('property="og:title"'), `${filename} should have og:title`);
  assert(html.includes('property="og:description"'), `${filename} should have og:description`);
  assert(html.includes('property="og:image"'), `${filename} should have og:image`);
  assert(html.includes('name="twitter:card"'), `${filename} should have twitter:card`);
  assert(html.includes('name="twitter:title"'), `${filename} should have twitter:title`);
  assert(html.includes('name="twitter:description"'), `${filename} should have twitter:description`);
}

function verifyJsonLd(html, filename) {
  const jsonLdMatch = html.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert(jsonLdMatch, `${filename} should have a script tag with type="application/ld+json"`);
  
  let data;
  try {
    data = JSON.parse(jsonLdMatch[1].trim());
  } catch (err) {
    assert.fail(`Invalid JSON-LD in ${filename}: ${err.message}`);
  }

  assert.strictEqual(data['@context'], 'https://schema.org', `${filename} @context must be https://schema.org`);
  assert.strictEqual(data['@type'], 'Audiobook', `${filename} @type must be Audiobook`);
  assert(data.name.includes('AI Agents in Depth'), `${filename} name should contain AI Agents in Depth`);
  assert(data.author && data.author.name === 'Bojie Li', `${filename} author should be Bojie Li`);
}

// Test Case 1: Social Open Graph & Twitter Cards
verifySocialMeta(indexHtml, 'index.html');
verifySocialMeta(readerHtml, 'reader.html');

// Test Case 2: Schema.org Audiobook Structured Data
verifyJsonLd(indexHtml, 'index.html');
verifyJsonLd(readerHtml, 'reader.html');

console.log('✅ test_seo_meta.js passed all assertions!');
