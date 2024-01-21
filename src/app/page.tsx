import Image from 'next/image'

import data from '../../data.json'
import LinkCard from '@/components/LinkCard'
import GetIcons from '@/components/GetIcons'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full mt-16 px-8">
      <Image
        alt={data.name}
        src={data.avatar}
        width={104}
        height={104}
        className="rounded-full"
      />

      <h1 className="font-bold mt-4 text-xl">{data.name}</h1>
      <h2 className="font-bold mt-4 mb-32 text-sm">{data.description}</h2>

      <GetIcons />

      {data.naughty.map(link => <LinkCard key={link.href} {...link} />)}
      {/* {data.links.map(link => <LinkCard key={link.href} {...link} />)} */}

      <div className="mt-32 font-bold text-xl">SGLink❤</div>
    </div>
  )
}