import Link from 'next/link'
import Image from 'next/image'

const ImageComponent = () => (
    <Image
        src="/images/camerafilive.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="CameraFiLive"
    />
)

export default function FirstPost() {
    return (
        <>
        <h1>
            First Post
        </h1>
        <h2>
            {/*no page reload*/}
            <Link href="/">
                <a>Back to home</a>
            </Link>

            {/*page reload*/}
            {/*<a href={"/"}>back</a>*/}
        </h2>
            <Image
                src="/images/camerafilive.png"
                height={144}
                width={144} />
            <ImageComponent/>
        </>
    )
}