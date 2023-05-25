import Facebook from "../../public/Icons/Facebook"
import Instagram from "../../public/Icons/Instagram"
import Tiktok from "../../public/Icons/Tiktok"
import Twitter from "../../public/Icons/Twitter"
import Youtube from "../../public/Icons/Youtube"

import data from '../../data.json'

export default function GetIcons() {
    return (
        <div className="flex gap-2 -mt-28 mb-10">
            {data.socials.map(social => {
                if (social.href.includes('facebook')) {
                    return (
                        <a href={social.href} target="_blank">
                            <Facebook />
                        </a>
                    )
                }
                if (social.href.includes('instagram')) {
                    return (
                        <a href={social.href} target="_blank">
                            <Instagram />
                        </a>
                    )
                }
                if (social.href.includes('tiktok')) {
                    return (
                        <a href={social.href} target="_blank">
                            <Tiktok />
                        </a>
                    )
                }
                if (social.href.includes('youtube')) {
                    return (
                        <a href={social.href} target="_blank">
                            <Youtube />
                        </a>
                    )
                }
                if (social.href.includes('twitter')) {
                    return (
                        <a href={social.href} target="_blank">
                            <Twitter />
                        </a>
                    )
                }
            })}
        </div>
    )
}
