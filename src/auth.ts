import crypto from "crypto";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                const pwHash: { [username: string]: string } = {
                    Admin: "b99c1fba9f527d942f6d276f78d9a730191e831da77e7b76a50b7d5a697ebaf0",
                };
                if (typeof credentials.username !== "string" || typeof credentials.password !== "string") {
                    return null;
                }
                const { username, password } = credentials;
                if (
                    !(username in pwHash) ||
                    crypto
                        .createHash("sha256")
                        .update(password + process.env.SALT1)
                        .digest("hex") !== pwHash[username]
                ) {
                    return null;
                }
                console.log("successfully signed in.");
                return { role: username, registered: [] };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.registered = user.registered;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.role = token.role;
                session.user.registered = token.registered;
            }
            return session;
        },
    },
    secret: process.env.AUTH_SECRET,
});
