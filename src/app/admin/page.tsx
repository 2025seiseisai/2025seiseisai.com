import { auth } from "@/auth";
import { SignInGuide, Content, Header } from "./client";

export default async function Admin() {
    const user = (await auth())?.user;
    return (
        <>
            <Header role={user?.role} />
            {user === undefined || !user.role ? <SignInGuide /> : <Content role={user.role} />}
        </>
    );
}
