import { Hamburger } from "./hamburger";
import NoSsr from "./no-ssr";
import Theme from "./theme.svg";

export function Header() {
    return (
        <header className={`flex h-16 items-center bg-white`}>
            <Theme className={`mr-auto h-1/2 pl-5`} />
            <NoSsr>
                <Hamburger />
            </NoSsr>
        </header>
    );
}
