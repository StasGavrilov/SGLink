import Image from 'next/image'

import img from '../../public/images/profile.jpg'
import data from '../../data.json'

interface ILinkCard {
    title: string
    href: string
    image?: string
}

export default function LinkCard({ title, href, image }: ILinkCard) {
    return (
        <a
            className="flex item-center p-1 rounded-md hover:scale-105 transition-all w-full border border-gray-300 mb-3"
            href={href}
        >
            <div className="flex text-center">
                <Image
                    alt={title}
                    src={img}
                    width={40}
                    height={40}
                    className="rounded-sm"
                />

                <h2>{title}</h2>
                {/* <p>{image}</p> */}
            </div>
        </a>
    )
}
