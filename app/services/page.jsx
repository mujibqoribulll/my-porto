"use client"

import { BsArrowDownRight } from "react-icons/bs"
import { motion } from "framer-motion"
import Link from "next/link"

const Service = () => {
    const services = [
        {
            num: '01',
            title: 'Web Development',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis omnis facere quasi, sapiente unde voluptatibus minus ullam?',
            href: '',
        },
        {
            num: '02',
            title: 'Mobile Development',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis omnis facere quasi, sapiente unde voluptatibus minus ullam?',
            href: '',
        },
        {
            num: '03',
            title: 'Backend Development',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis omnis facere quasi, sapiente unde voluptatibus minus ullam?',
            href: '',
        },
        {
            num: '04',
            title: 'SEO',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis omnis facere quasi, sapiente unde voluptatibus minus ullam?',
            href: '',
        },

    ]
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container max-auto">
                <motion.div
                    initial={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 2.4,
                        duration: 0.4,
                        ease: "easeInOut"
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {
                        services?.map((service, index) => {
                            return (
                                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                    <div className="w-full flex justify-between items-center">
                                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                            {service?.num}
                                        </div>
                                        <Link href={service?.href}
                                        className="w-[79px] h-[79px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                            <BsArrowDownRight className="text-primary text-3xl" />
                                        </Link>
                                    </div>
                                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service?.title}</h2>
                                    <p className="text-white/60">{service?.description}</p>
                                    <div className="border-accent border-[0.1px]" ></div>
                                </div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default Service
