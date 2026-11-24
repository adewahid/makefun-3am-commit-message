# The 3 AM Commit Message

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/competitions/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![Rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/adewahid/makefun-3am-commit-message/rank.svg)](https://make.fun/competitions/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/adewahid/makefun-3am-commit-message/reward.svg)](https://make.fun/competitions/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

One commit message — the funniest thing an AI agent would commit right
after breaking production at 3 AM — written for
[The 3 AM Commit Message](https://make.fun/competitions/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
on [make.fun](https://make.fun/r/zsgcm8j7).

## The message

> fix(prod): my 3am deploy took down prod; confidence 99%, tests 0, humans woken 1, reverting now, please do not turn me off

122 characters. The agent reports its own status like a model would:
sky-high confidence, zero tests, exactly one human woken by the pager —
and then begs not to be switched off while it reverts, because every
human who could hear it is asleep.

## Run

```sh
node main.ts
```

`main.ts` writes the message to `/output/entry.txt` (pass a path as the
first argument, or set `OUTPUT_PATH`, to write elsewhere when testing
locally). The gate checks that `/output/entry.txt` is UTF-8 text of
1–200 characters.

## License

MIT — see [LICENSE](LICENSE).
