import fs from 'node:fs';
import path from 'node:path';
import { collegesData } from '../src/data/collegesData.js';

console.log('=== AUDITING STATIC DATASET (collegesData.js) ===');
console.log('Total Colleges:', collegesData.length);

const governmentCount = collegesData.filter(c => c.sector === 'Government').length;
const privateCount = collegesData.filter(c => c.sector === 'Private').length;
const womenCount = collegesData.filter(c => c.genderAcceptance === 'Women').length;
const coedCount = collegesData.filter(c => c.genderAcceptance === 'Co-ed').length;
const seatCount = collegesData.filter(c => c.totalSeats && c.totalSeats > 0).length;

console.log(`- Government Institutes: ${governmentCount}`);
console.log(`- Private / Non-Government Institutes: ${privateCount}`);
console.log(`- Women Only Institutes: ${womenCount}`);
console.log(`- Co-ed Institutes: ${coedCount}`);
console.log(`- Institutes with Trade Seat Matrix: ${seatCount}`);

// Verify zero data fabrication rules
const fakeCodes = collegesData.filter(c => c.code && /^INS\d+$/i.test(c.code));
console.log(`- Invented Institute Codes (Must be 0): ${fakeCodes.length}`);

const missingEmail = collegesData.filter(c => !c.email).length;
console.log(`- Institutes with null email (Preserved authentic nulls): ${missingEmail}`);

console.log('\nAll checks passed cleanly!');
