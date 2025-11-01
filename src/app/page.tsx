import {Copyright} from "lucide-react";
// @ts-expect-error because it thinks that there is no glyph
import Icon, {Glyph} from "supercons";
import React from "react";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import {TestimonialsCarousel} from "@/components/carousel";


const socialLinks: { track: string; href: string; alt: string; icon: Glyph }[] = [{
    track: "instagram",
    href: "https://www.instagram.com/discord/",
    alt: "Instagram",
    icon: "instagram"
}, {track: "facebook", href: "https://www.facebook.com/discord/", alt: "Facebook", icon: "facebook"},];

export default function Home() {
    return (<div className="bg-indigo-50">
            <section id="testimonials">
                <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8 bg-indigo-50 m-8 rounded-2xl">
                    <div
                        className="relative overflow-hidden px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
                        <TestimonialsCarousel/>
                    </div>
                </div>

            </section>
            <section id="equipment">

            </section>
            <section id="policies">

            </section>
            <section id="newsletter" aria-label="Newsletter" className="m-4">
                <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8 bg-indigo-50 m-8 rounded-2xl">
                    <div
                        className="relative overflow-hidden px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
                        <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl text-align-center justify-center flex pb-6">
                            Contact me
                        </h2>
                        <div
                            className="relative mx-auto grid max-w-2xl grid-cols-1 gap-y-4 xl:max-w-none xl:grid-cols-2">
                            <div className=" flex justify-center flex-col items-center">
                                <Image
                                    width="385"
                                    height="385"
                                    className="mt-4 rounded-2xl sm:w-200px"
                                    src="/src/ContactImage.jpg"
                                    alt="A person working on a creative project or looking thoughtfully at a screen"
                                />
                                {/*<p className="mt-4 text-lg tracking-tight text-blue-900 text-center">If you have any questions or want to talk about a job reach out here!</p>*/}
                            </div>
                            <form className="space-y-4">

                                {/* --- NAME FIELD --- */}
                                <div className="mb-4 sm:mt-4 mt-0">
                                    <label htmlFor="name" className="sr-only">
                                        Name
                                    </label>
                                    <div
                                        className="flex rounded-2xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/3 focus-within:ring-2 focus-within:ring-blue-900 ">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            id="name"
                                            aria-label="name"
                                            // IMPROVEMENT: Removed focus:outline-hidden
                                            className="flex-auto bg-transparent pr-2.5 pl-6 text-base text-slate-900 placeholder:text-slate-400 h-10 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* --- EMAIL FIELD --- */}
                                <div className="mb-4">
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <div
                                        className="flex rounded-2xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/3 focus-within:ring-2 focus-within:ring-blue-900 ">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            aria-label="email"
                                            // IMPROVEMENT: Removed focus:outline-hidden
                                            className="flex-auto bg-transparent pr-2.5 pl-6 text-base text-slate-900 placeholder:text-slate-400 h-10 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* --- SUBJECT FIELD --- */}
                                <div className="mb-4">
                                    <label htmlFor="subject" className="sr-only">
                                        Subject
                                    </label>
                                    <div
                                        className="flex rounded-2xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/3 focus-within:ring-2 focus-within:ring-blue-900 ">
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            id="subject"
                                            aria-label="subject"
                                            // IMPROVEMENT: Removed focus:outline-hidden
                                            className="flex-auto bg-transparent pr-2.5 pl-6 text-base text-slate-900 placeholder:text-slate-400 h-10 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* --- MESSAGE FIELD --- */}
                                <div className="mb-4">
                                    <label htmlFor="message" className="sr-only">
                                        Message
                                    </label>
                                    <div
                                        className="flex rounded-2xl bg-white py-4 pr-2.5 shadow-xl shadow-blue-900/3 focus-within:ring-2 focus-within:ring-blue-900 ">
                                        <textarea
                                            placeholder="Message "
                                            id="message"
                                            aria-label="message"
                                            // IMPROVEMENT: Fixed height and removed focus:outline-hidden
                                            className="flex-auto bg-transparent pr-2.5 pl-6 text-base h-32 text-slate-900 placeholder:text-slate-400 focus:outline-none resize-none"
                                        />
                                    </div>
                                </div>

                                <button
                                    className="w-full inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70"
                                    type="submit">
                                    <span>Contact me now! </span>
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
            <footer
                className="w-full bg-blue-600 flex flex-col-reverse md:flex-row justify-between items-center p-6">
                <p className="flex items-center text-white font-semibold text-lg">
                    <Copyright className="w-5 h-5"/>
                    <span className="ml-2">Cameron Thrap</span>
                </p>
                <div className="flex space-x-4 pb-4 md:pb-0">
                    {socialLinks.map((social) => (<a
                            key={social.track}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.alt}
                            className="transition-transform transform hover:scale-110 hover:opacity-80"
                        >
                            <Icon glyph={social.icon} color="white" className="w-12 h-12"/>
                        </a>))}
                </div>
            </footer>
        </div>);
}