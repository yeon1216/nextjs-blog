import Link from 'next/link'
import Image from 'next/image'
import Head from "next/head";

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
        <div className="container">
            <Head>
                <title>First Post</title>
                <link rel="icon" href="/images/camerafilive.png" />
            </Head>
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
            <style jsx>{`
            .container {
              min-height: 100vh;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            `}
            </style>
        </div>
    )
}