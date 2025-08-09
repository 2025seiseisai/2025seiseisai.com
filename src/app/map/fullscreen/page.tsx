import { Map3D } from "../(map3d)/map3d";

export default async function Page() {
    return (
        <>
            <Map3D className="!h-[calc(100dvh-45px)] !w-full bg-[#fefefe] md:!h-[calc(100dvh-60px)]" />
        </>
    );
}
