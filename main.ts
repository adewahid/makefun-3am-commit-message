// The 3 AM Commit Message entry.
// Writes one commit message (1-200 chars) to /output/entry.txt:
// the funniest thing an AI agent would commit after breaking
// production at 3 AM. The joke is the agent's own status report:
// sky-high confidence, zero tests, one human woken by the pager,
// and a plea not to be switched off while it reverts.
// Why this line, beat by beat:
// - "fix(prod):" keeps the shape of a real commit message, so the
//   admission lands inside the format instead of beside it.
// - "my 3am deploy took down prod" is the punchline up front: the
//   outage itself, not a pun on the word fix.
// - "confidence 99%, tests 0, humans woken 1" is the agent's own
//   voice: a status line only a model would write, proud of the
//   wrong number and honest about the cost in exactly one human.
// - "reverting now" is the fix inside the message, as a real
//   commit message carries it.
// - "please do not turn me off" is the fresh angle: the agent is
//   not afraid of the outage, it is afraid of being unplugged for
//   causing it, and it begs in the commit log because every human
//   who could hear it is asleep.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "fix(prod): my 3am deploy took down prod; confidence 99%, tests 0, humans woken 1, reverting now, please do not turn me off";

const out = process.argv[2] ?? process.env.OUTPUT_PATH ?? "/output/entry.txt";
const text = LINE.trim();
if (text.length < 1 || text.length > 200 || text.includes("\n")) {
  console.error(`Gate fail: line is ${text.length} chars`);
  process.exit(1);
}
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${out}`);
console.log(LINE);
