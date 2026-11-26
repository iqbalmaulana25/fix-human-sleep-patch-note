// Fix Human Sleep: Funniest Patch Note
// One line of patch notes announcing that human sleep is fixed, under 160
// characters. It has to read like a real changelog entry — the fix stated
// plainly, then a known issue that quietly admits humans will still ruin it.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Fixed: humans now fall asleep in under 8 minutes. Known issue: they still call it 'just one more episode.'";

const limit = 160;
if ([...line].length > limit) {
  throw new Error(`patch note too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
