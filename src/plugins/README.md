# Pluginsディレクトリで忘れてはいけないこと

初回アクセス時やリロード時には、SSR処理とCSR処理がどちらも動作する。
plugins と created（beforeCreate）が 2 回走る点に注意。

>認証系は middleware や plugins に記述することが多いかもしれませんが、middleware の場合は内部ナビゲーション遷移時は CSR 側でしか呼ばれないため、どちらの処理も書いておく必要があります。 plugins の場合は、内部ナビゲーション遷移時は呼ばれないので注意が必要。
**plugins の場合は、内部ナビゲーション遷移時は呼ばれないので注意が必要**