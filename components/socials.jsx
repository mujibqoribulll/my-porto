

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'

const Socoials = (props) => {
    const { containerStyles, iconStyles } = props;
    const socials = [
        {
            icon: <FaGithub />,
            path: 'https://github.com/mujibqoribulll',
        },
        {
            icon: <FaLinkedin />,
            path: 'https://www.linkedin.com/in/qoribulmujib/',
        },
        {
            icon: <FaYoutube />,
            path: '/',
        },
        {
            icon: <FaTwitter />,
            path: '/',
        },
    ]

    return (
        <div className={containerStyles}>
            {
                socials.map((social, index) => (
                    <Link href={social?.path} key={index} className={iconStyles} target='_blank'>
                        {social?.icon}
                    </Link>
                ))
            }
        </div>
    )
}

export default Socoials
