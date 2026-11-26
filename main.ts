// Fix Human Sleep: Funniest Patch Note
// One line of patch notes announcing that human sleep is fixed, under 160
// characters. It has to read like a real changelog entry: the fix stated
// plainly, then a known issue that quietly admits humans will still ruin it.
//
// Why this line works:
// - The fix is specific and technical ("installs in 8 minutes, no restart
//   required") instead of a flat claim that sleep is now fixed, so it sounds
//   like a real release note and surprises on first read.
// - The known issue is the most relatable sleep joke there is: nobody is
//   kept awake by broken sleep, they are kept awake by "just one more
//   episode". The changelog trusts the reader to get it and never explains it.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a single changelog line, kept under the 160-character cap.
const line =
  "Fixed: sleep now installs in 8 minutes, no restart required. Known issue: users still call it 'just one more episode.'";

// The gate: entry.txt must be UTF-8 text of 1 to 160 characters.
const LIMIT = 160;
const length = [...line].length;
if (length < 1 || length > LIMIT) {
  throw new Error(`patch note must be 1-${LIMIT} chars, got ${length}`);
}
if (line.includes("\n")) {
  throw new Error("patch note must be a single line");
}

// Write the entry for the grader to read.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
