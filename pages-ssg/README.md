# pages-ssg

Next.jsの`/pages`を使ってのfirebase hostingとの組合せを実験したもの．できれば`/app`を使いたかったけれどできないので．

## 動作検証

必要
- pnpm
- firebase-tools

```sh
pnpm i
firebase login # ブラウザが開いてOAuthの画面に行くので認可する．詳しくはヘルプを参照
firebase hosting
```

http://localhost:5000/contest/1 に行くと動作が確認できる．2や3に行くとまた別の表示になるはず．

:bulb: 初回は次のようなエラーが出るので指示にしたがってfirebaseのプロジェクトを作成します．あるいは既存のプロジェクトに連携させます．
>Error: No currently active project.
>To run this command, you need to specify a project. You have two options:
>- Run this command with --project <alias_or_project_id>.
>- Set an active project by running firebase use --add, then rerun this command.
>To list all the Firebase projects to which you have access, run firebase projects:list.
>To learn about active projects for the CLI, visit https://firebase.google.com/docs/cli#project_aliases

