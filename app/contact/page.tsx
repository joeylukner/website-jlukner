import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <Link href={"/"}><button>Home</button></Link>
            <Image 
            src="/headshot.JPG"
            alt="headshot"
            width={250}
            height={250}/>
        </div>
    );
}