import Image from "next/image";

export default function Projects() {
    return (
        <div>
            <Image 
            src="/headshot.JPG"
            alt="headshot"
            width={250}
            height={250}/>
        </div>
    );
}