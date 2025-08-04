import styles from "./back.module.scss";
import Back from "./back.svg";
import BackSmartphone from "./sp_back.svg";

export default function Background() {
    return (
        <div
            // eslint-disable-next-line better-tailwindcss/no-unregistered-classes
            className="background pointer-events-none fixed z-[-998244353] flex h-[100dvh] w-full justify-center
                overflow-hidden opacity-[72%]"
        >
            <Back
                width={undefined}
                height={undefined}
                className={`${styles.back_pc} h-[100dvh] w-[calc(100dvh*887/519)] shrink-0`}
            />
            <BackSmartphone
                width={undefined}
                height={undefined}
                className={`${styles.back_mobile} h-[100dvh] w-[calc(100dvh*315/422)] shrink-0`}
            />
        </div>
    );
}
