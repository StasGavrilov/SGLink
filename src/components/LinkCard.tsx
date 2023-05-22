import Image from 'next/image'

interface ILinkCard {
    title: string
    href: string
    image?: string
}

export default function LinkCard({ title, href, image }: ILinkCard) {
    return (
        <a
            className="flex item-center p-1 rounded-md hover:scale-105 transition-all w-full mb-3 bg-gray-600 max-w-3xl"
            href={href}
        >
            <div className="flex text-center w-full">
                {image && (
                    <Image
                        alt={title}
                        src={image}
                        width={40}
                        height={40}
                        className="rounded-sm"
                    />
                )}

                <h2 className="flex justify-center items-center -ml-10 w-full">{title}</h2>
            </div>
        </a>
    )
}
