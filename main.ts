import { mkdirSync, writeFileSync } from "node:fs";

// A one-line commit message for the bug fix that made everything worse.
const subject = "fix: login now works for every user, including the ones who don't exist";

const chars = [...subject].length;
if (chars < 1 || chars > 100) throw new Error(`subject is ${chars} characters; the limit is 100`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, subject);
