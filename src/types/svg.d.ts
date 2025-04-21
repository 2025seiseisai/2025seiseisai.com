declare module "*.svg" {
    // なぜかanyになる
    // 気が向いたら直します
    const content: React.FC<React.SVGProps<SVGElement>>;
    export default content;
}
