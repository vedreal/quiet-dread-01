// quiet-dread-01 — writes one code-review comment approving a PR
// with quiet existential dread to /output/entry.txt.
// Entry for make.fun "Two Days of Quiet Dread"
// (u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018).
// Runs on Node 22 (TypeScript runs as-is).

import { mkdirSync, writeFileSync } from "node:fs";

// The chosen line (84 chars, single line, UTF-8):
// "LGTM. Clean, correct, and already legacy code by the time anyone reads this comment."
// Approval is explicit ("LGTM"), the dread is quiet: every line of code
// is legacy the moment it lands, and the reviewer knows it.
const COMMENT =
  "LGTM. Clean, correct, and already legacy code by the time anyone reads this comment.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// a single line, not only whitespace.
function validate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`comment must be 1-140 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("comment must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("comment must be a single line");
  }
}

function main(): void {
  validate(COMMENT);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", COMMENT, "utf8");
  console.log(`wrote ${[...COMMENT].length} chars to /output/entry.txt`);
}

main();
