/* 2. Create Module
import { total, extraction } from './2.create-module';
console.log(total(2, 5)); // 7
console.log(extraction(100, 29)); // 71
*/

/* 3. Default Module
import ceyhun, { total, extraction } from './3.default-module';
console.log(ceyhun(6)); // 36
*/

/* 3. Default Module - 2
import total_ceyhun, { extraction } from './3.default-module-2';
console.log(total_ceyhun(26, 4)); // 30
*/

/* As Keyword
import {total as add} from './4.as-keyword.js';
console.log(add(2, 7)); // 9
*/

/* Export Multiple Function
import * as multiple from './5.export-multiple-function';
console.log(multiple.total(5, 21)); // 26
console.log(multiple.extraction(77, 9)); // 68
console.log(multiple.default(7)); // 49
*/