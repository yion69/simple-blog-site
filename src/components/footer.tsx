import { AtSign, Github, Linkedin } from "lucide-react";

export default function Footer({ currentYear }: { currentYear: number}) {
    return (
        <div className="flex justify-center items-center w-full h-20 lg:h-16 px-4 bg-zinc-50 rounded-md border-2 border-zinc-300">
            <div className="flex flex-col lg:flex-row w-full h-fit">
                <div className="flex justify-start lg:justify-start items-center w-full lg:w-1/2 h-fit gap-1">
                    <h3 className="text-lg">Socials | </h3>
                    <ul className="grid grid-cols-4 gap-2">
                        <li>
                            <a href="https://github.com/yion69" rel="noopener" target="_blank" title="Github">
                                <Github size={22} className="hover:-translate-y-1 transition-all" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/thu-ta-naing-83b5222b0/" rel="noopener" target="_blank" title="Linkedin">
                                <Linkedin size={22} className="hover:-translate-y-1 transition-all" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:thutanaing.personal@gmail.com" title="Email">
                                <AtSign size={22} className="hover:-translate-y-1 transition-all" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-start lg:justify-end w-full lg:w-1/2">
                    <p className="">&copy; <span>{ currentYear }</span> Yion ‣ All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}