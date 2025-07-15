# 第61回菁々祭公式Webサイト

ローカルでの実行方法

1. Node.jsとnpmをインストールしてください。
2. PostgreSQLサーバーを作成し、接続文字列を取得してください。supabaseで作成すると楽です。
3. このリポジトリをクローンしてください。
4. vscodeでクローンしたフォルダを開いてください。
5. .envをプロジェクトルートに追加し、以下のようにしてください
    ```
    AUTH_URL="http://localhost:3000/
    DATABASE_URL="PostgreSQLの接続文字列"
    DIRECT_URL="PostgreSQLの接続文字列"
    ```
6. F5キー(もしくはFn+F5)を押すとサーバーが起動します。
7. ブラウザでhttp://localhost:3000/2025/ にアクセスしてください。
