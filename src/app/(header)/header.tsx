import Theme from "./theme.svg";
export function Header() {
    return (
        <header className={`flex h-20 items-center bg-white`}>
            <Theme className={`pl-5`} height="50%" />
        </header>
    );
}
