
export default function LandingPage() {
    return (
        <div className="bg-[var(--nintendo-red)] w-screen h-screen">
            <section
                id="testimonials"
                aria-label="What our customers are saying"
                className="bg-slate-50 py-20 sm:py-32"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl md:text-center">
                        <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                            Loved by businesses worldwide.
                        </h2>
                        <p className="mt-4 text-lg tracking-tight text-slate-700">
                            Our software is so simple that people can’t help but fall in love with
                            it. Simplicity is easy when you just skip tons of mission-critical
                            features.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
                    >
                        <li>
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                <li>
                                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                        <svg
                                            aria-hidden="true"
                                            width={105}
                                            height={78}
                                            className="absolute top-6 left-6 fill-slate-100"
                                        >
                                            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                                        </svg>
                                        <blockquote className="relative">
                                            <p className="text-lg tracking-tight text-slate-900">
                                                TaxPal is so easy to use I can’t help but wonder if it’s
                                                really doing the things the government expects me to do.
                                            </p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">
                                                    Sheryl Berge
                                                </div>
                                                <div className="mt-1 text-sm text-slate-500">
                                                    CEO at Lynch LLC
                                                </div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={56}
                                                    height={56}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-14 w-14 object-cover"
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&w=64&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&w=128&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&w=128&q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li>
                                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                        <svg
                                            aria-hidden="true"
                                            width={105}
                                            height={78}
                                            className="absolute top-6 left-6 fill-slate-100"
                                        >
                                            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                                        </svg>
                                        <blockquote className="relative">
                                            <p className="text-lg tracking-tight text-slate-900">
                                                I’m trying to get a hold of someone in support, I’m in a lot
                                                of trouble right now and they are saying it has something to
                                                do with my books. Please get back to me right away.
                                            </p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">
                                                    Amy Hahn
                                                </div>
                                                <div className="mt-1 text-sm text-slate-500">
                                                    Director at Velocity Industries
                                                </div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={56}
                                                    height={56}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-14 w-14 object-cover"
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&w=64&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&w=128&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&w=128&q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                <li>
                                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                        <svg
                                            aria-hidden="true"
                                            width={105}
                                            height={78}
                                            className="absolute top-6 left-6 fill-slate-100"
                                        >
                                            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                                        </svg>
                                        <blockquote className="relative">
                                            <p className="text-lg tracking-tight text-slate-900">
                                                The best part about TaxPal is every time I pay my employees,
                                                my bank balance doesn’t go down like it used to. Looking
                                                forward to spending this extra cash when I figure out why my
                                                card is being declined.
                                            </p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">
                                                    Leland Kiehn
                                                </div>
                                                <div className="mt-1 text-sm text-slate-500">
                                                    Founder of Kiehn and Sons
                                                </div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={56}
                                                    height={56}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-14 w-14 object-cover"
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&w=64&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&w=128&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&w=128&q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li>
                                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                        <svg
                                            aria-hidden="true"
                                            width={105}
                                            height={78}
                                            className="absolute top-6 left-6 fill-slate-100"
                                        >
                                            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                                        </svg>
                                        <blockquote className="relative">
                                            <p className="text-lg tracking-tight text-slate-900">
                                                There are so many things I had to do with my old software that
                                                I just don’t do at all with TaxPal. Suspicious but I can’t say
                                                I don’t love it.
                                            </p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">
                                                    Erin Powlowski
                                                </div>
                                                <div className="mt-1 text-sm text-slate-500">
                                                    COO at Armstrong Inc
                                                </div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={56}
                                                    height={56}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-14 w-14 object-cover"
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.c72e5a40.png&w=64&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.c72e5a40.png&w=128&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.c72e5a40.png&w=128&q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                <li>
                                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                        <svg
                                            aria-hidden="true"
                                            width={105}
                                            height={78}
                                            className="absolute top-6 left-6 fill-slate-100"
                                        >
                                            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                                        </svg>
                                        <blockquote className="relative">
                                            <p className="text-lg tracking-tight text-slate-900">
                                                I used to have to remit tax to the EU and with TaxPal I
                                                somehow don’t have to do that anymore. Nervous to travel there
                                                now though.
                                            </p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">
                                                    Peter Renolds
                                                </div>
                                                <div className="mt-1 text-sm text-slate-500">
                                                    Founder of West Inc
                                                </div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={56}
                                                    height={56}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-14 w-14 object-cover"
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.eaa9ef6f.png&w=64&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.eaa9ef6f.png&w=128&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.eaa9ef6f.png&w=128&q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li>
                                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                        <svg
                                            aria-hidden="true"
                                            width={105}
                                            height={78}
                                            className="absolute top-6 left-6 fill-slate-100"
                                        >
                                            <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                                        </svg>
                                        <blockquote className="relative">
                                            <p className="text-lg tracking-tight text-slate-900">
                                                This is the fourth email I’ve sent to your support team. I am
                                                literally being held in jail for tax fraud. Please answer your
                                                damn emails, this is important.
                                            </p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">
                                                    Amy Hahn
                                                </div>
                                                <div className="mt-1 text-sm text-slate-500">
                                                    Director at Velocity Industries
                                                </div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={56}
                                                    height={56}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-14 w-14 object-cover"
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&w=64&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&w=128&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&w=128&q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="py-8 sm:py-10 lg:py-16">
                <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 text-center">
                    <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
                        Some kind words from early customers...
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-600">
                        I worked with a small group of early access customers to make sure all of
                        the content in the book was exactly what they needed. Hears what they had
                        to say about the finished product.
                    </p>
                </div>
                <div className="group mt-16" data-expanded="">
                    <ul
                        role="list"
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
                    >
                        <li className="lg:hidden">
                            <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
                                <blockquote>
                                    <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                                        Mira’s teaching style is second to none. Everything was easy to
                                        follow every step of the way.
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 flex items-center">
                                    <div className="overflow-hidden rounded-full bg-slate-50">
                                        <img
                                            alt=""
                                            loading="lazy"
                                            width={48}
                                            height={48}
                                            decoding="async"
                                            data-nimg={1}
                                            className="h-12 w-12 object-cover"
                                            style={{ color: "transparent" }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.04d4fbac.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.04d4fbac.png&w=96&q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.04d4fbac.png&w=96&q=75"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-base/6 font-medium tracking-tight text-slate-900">
                                            Antonio Littel
                                        </div>
                                        <div className="mt-1 text-sm text-slate-600">
                                            Frontend Developer
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li className="lg:hidden">
                            <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
                                <blockquote>
                                    <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                                        I run an ecommerce store selling rare vintage gummy bears and
                                        could never find a good gummy bear icon. Now I can design my own
                                        in minutes.
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 flex items-center">
                                    <div className="overflow-hidden rounded-full bg-slate-50">
                                        <img
                                            alt=""
                                            loading="lazy"
                                            width={48}
                                            height={48}
                                            decoding="async"
                                            data-nimg={1}
                                            className="h-12 w-12 object-cover"
                                            style={{ color: "transparent" }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-7.74b6c9eb.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-7.74b6c9eb.png&w=96&q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-7.74b6c9eb.png&w=96&q=75"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-base/6 font-medium tracking-tight text-slate-900">
                                            Cameron Considine
                                        </div>
                                        <div className="mt-1 text-sm text-slate-600">Entrepreneur</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li className="lg:hidden">
                            <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
                                <blockquote>
                                    <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                                        I couldn’t believe how fast Mira moved in Figma compared to my own
                                        workflow. I’m designing icons more accurately in half the time
                                        with the shortcuts I learned from her videos.
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 flex items-center">
                                    <div className="overflow-hidden rounded-full bg-slate-50">
                                        <img
                                            alt=""
                                            loading="lazy"
                                            width={48}
                                            height={48}
                                            decoding="async"
                                            data-nimg={1}
                                            className="h-12 w-12 object-cover"
                                            style={{ color: "transparent" }}
                                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.9d5329f1.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.9d5329f1.png&w=96&q=75 2x"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.9d5329f1.png&w=96&q=75"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-base/6 font-medium tracking-tight text-slate-900">
                                            Steven Hackett
                                        </div>
                                        <div className="mt-1 text-sm text-slate-600">
                                            Bootcamp Instructor
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li className="hidden group-data-expanded:list-item lg:list-item">
                            <ul role="list">
                                <li className="hidden lg:list-item">
                                    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
                                        <blockquote>
                                            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                                                Mira’s teaching style is second to none. Everything was easy
                                                to follow every step of the way.
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center">
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={48}
                                                    height={48}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-12 w-12 object-cover"
                                                    style={{ color: "transparent" }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.04d4fbac.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.04d4fbac.png&w=96&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.04d4fbac.png&w=96&q=75"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base/6 font-medium tracking-tight text-slate-900">
                                                    Antonio Littel
                                                </div>
                                                <div className="mt-1 text-sm text-slate-600">
                                                    Frontend Developer
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="lg:mt-8">
                                    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
                                        <blockquote>
                                            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                                                Even though I was excited to learn, I was pessimistic that I
                                                wouldn’t actually ever get good enough to design my own icons.
                                                I was wrong — this book is all I needed.
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center">
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={48}
                                                    height={48}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-12 w-12 object-cover"
                                                    style={{ color: "transparent" }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.60373f01.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.60373f01.png&w=96&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.60373f01.png&w=96&q=75"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base/6 font-medium tracking-tight text-slate-900">
                                                    Lynn Nolan
                                                </div>
                                                <div className="mt-1 text-sm text-slate-600">
                                                    Growth Marketer
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="mt-8">
                                    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
                                        <blockquote>
                                            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                                                I’ve been employed as a professional icon designer for years
                                                and still learned tons of new tricks that have made my work
                                                even better
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center">
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={48}
                                                    height={48}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-12 w-12 object-cover"
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-9.0887821b.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-9.0887821b.png&w=96&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-9.0887821b.png&w=96&q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base/6 font-medium tracking-tight text-slate-900">
                                                    Krista Prosacco
                                                </div>
                                                <div className="mt-1 text-sm text-slate-600">
                                                    Professional Designer
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                        <li className="hidden group-data-expanded:list-item lg:list-item">
                            <ul role="list">
                                <li className="hidden lg:list-item">
                                    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
                                        <blockquote>
                                            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                                                I run an ecommerce store selling rare vintage gummy bears and
                                                could never find a good gummy bear icon. Now I can design my
                                                own in minutes.
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center">
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={48}
                                                    height={48}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-12 w-12 object-cover"
                                                    style={{ color: "transparent" }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-7.74b6c9eb.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-7.74b6c9eb.png&w=96&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-7.74b6c9eb.png&w=96&q=75"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base/6 font-medium tracking-tight text-slate-900">
                                                    Cameron Considine
                                                </div>
                                                <div className="mt-1 text-sm text-slate-600">
                                                    Entrepreneur
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="lg:mt-8">
                                    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
                                        <blockquote>
                                            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                                                The complete package is worth it for the weekly teardown
                                                videos alone. I’ve learned so much watching Mira take apart
                                                other icons and recreate them from scratch.
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center">
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={48}
                                                    height={48}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-12 w-12 object-cover"
                                                    style={{ color: "transparent" }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-11.6af33989.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-11.6af33989.png&w=96&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-11.6af33989.png&w=96&q=75"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base/6 font-medium tracking-tight text-slate-900">
                                                    Regina Wisoky
                                                </div>
                                                <div className="mt-1 text-sm text-slate-600">
                                                    Design Student
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="mt-8">
                                    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
                                        <blockquote>
                                            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                                                I didn’t expect to find a lot of value in the community but
                                                now I’m in there for at least an hour every day picking up
                                                tips from other designers.
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center">
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={48}
                                                    height={48}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-12 w-12 object-cover"
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-8.a41e6511.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-8.a41e6511.png&w=96&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-8.a41e6511.png&w=96&q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base/6 font-medium tracking-tight text-slate-900">
                                                    Vernon Cummerata
                                                </div>
                                                <div className="mt-1 text-sm text-slate-600">UI Engineer</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                        <li className="hidden group-data-expanded:list-item lg:list-item">
                            <ul role="list">
                                <li className="hidden lg:list-item">
                                    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
                                        <blockquote>
                                            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                                                I couldn’t believe how fast Mira moved in Figma compared to my
                                                own workflow. I’m designing icons more accurately in half the
                                                time with the shortcuts I learned from her videos.
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center">
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={48}
                                                    height={48}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-12 w-12 object-cover"
                                                    style={{ color: "transparent" }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.9d5329f1.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.9d5329f1.png&w=96&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.9d5329f1.png&w=96&q=75"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base/6 font-medium tracking-tight text-slate-900">
                                                    Steven Hackett
                                                </div>
                                                <div className="mt-1 text-sm text-slate-600">
                                                    Bootcamp Instructor
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="lg:mt-8">
                                    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
                                        <blockquote>
                                            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                                                I never thought I would enjoy designing icons but using the
                                                ideas in this book, it’s become a great way for me to relax
                                                while still being creative.
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center">
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={48}
                                                    height={48}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-12 w-12 object-cover"
                                                    style={{ color: "transparent" }}
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-10.8ffba813.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-10.8ffba813.png&w=96&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-10.8ffba813.png&w=96&q=75"
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base/6 font-medium tracking-tight text-slate-900">
                                                    Carla Schoen
                                                </div>
                                                <div className="mt-1 text-sm text-slate-600">
                                                    Startup Founder
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                                <li className="mt-8">
                                    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
                                        <blockquote>
                                            <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                                                All I can say is wow — this is easily the best icon design
                                                resource I’ve ever encountered.
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-6 flex items-center">
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={48}
                                                    height={48}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    className="h-12 w-12 object-cover"
                                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-6.b8de0302.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-6.b8de0302.png&w=96&q=75 2x"
                                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-6.b8de0302.png&w=96&q=75"
                                                    style={{ color: "transparent" }}
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-base/6 font-medium tracking-tight text-slate-900">
                                                    Leah Kiehn
                                                </div>
                                                <div className="mt-1 text-sm text-slate-600">
                                                    Creative Director
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="overflow-hidden py-32">
                <div className="px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-7xl">
                        <div>
                            <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                                What everyone is saying
                            </h2>
                            <h3 className="mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
                                Trusted by professionals.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="[&::-webkit-scrollbar]:hidden mt-16 flex snap-x snap-mandatory gap-8 overflow-x-auto overscroll-x-contain scroll-smooth px-(--scroll-padding) [--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] [scrollbar-width:none] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]">
                    <div
                        className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
                        style={{ opacity: 1 }}
                    >
                        <img
                            alt=""
                            className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
                            src="/testimonials/tina-yards.jpg"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
                        />
                        <figure className="relative p-10">
                            <blockquote>
                                <p className="relative text-xl/7 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              “
            </span>
                                    Thanks to Radiant, we’re finding new leads that we never would have
                                    found with legal methods.
                                    <span aria-hidden="true" className="absolute">
              ”
            </span>
                                </p>
                            </blockquote>
                            <figcaption className="mt-6 border-t border-white/20 pt-6">
                                <p className="text-sm/6 font-medium text-white">Tina Yards</p>
                                <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              VP of Sales, Protocol
            </span>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
                        style={{ opacity: "0.5" }}
                    >
                        <img
                            alt=""
                            className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
                            src="/testimonials/conor-neville.jpg"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
                        />
                        <figure className="relative p-10">
                            <blockquote>
                                <p className="relative text-xl/7 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              “
            </span>
                                    Radiant made undercutting all of our competitors an absolute breeze.
                                    <span aria-hidden="true" className="absolute">
              ”
            </span>
                                </p>
                            </blockquote>
                            <figcaption className="mt-6 border-t border-white/20 pt-6">
                                <p className="text-sm/6 font-medium text-white">Conor Neville</p>
                                <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              Head of Customer Success, TaxPal
            </span>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
                        style={{ opacity: "0.5" }}
                    >
                        <img
                            alt=""
                            className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
                            src="/testimonials/amy-chase.jpg"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
                        />
                        <figure className="relative p-10">
                            <blockquote>
                                <p className="relative text-xl/7 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              “
            </span>
                                    We closed a deal in literally a few minutes because we knew their
                                    exact budget.
                                    <span aria-hidden="true" className="absolute">
              ”
            </span>
                                </p>
                            </blockquote>
                            <figcaption className="mt-6 border-t border-white/20 pt-6">
                                <p className="text-sm/6 font-medium text-white">Amy Chase</p>
                                <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              Head of GTM, Pocket
            </span>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
                        style={{ opacity: "0.5" }}
                    >
                        <img
                            alt=""
                            className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
                            src="/testimonials/veronica-winton.jpg"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
                        />
                        <figure className="relative p-10">
                            <blockquote>
                                <p className="relative text-xl/7 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              “
            </span>
                                    We’ve managed to put two of our main competitors out of business in
                                    6 months.
                                    <span aria-hidden="true" className="absolute">
              ”
            </span>
                                </p>
                            </blockquote>
                            <figcaption className="mt-6 border-t border-white/20 pt-6">
                                <p className="text-sm/6 font-medium text-white">Veronica Winton</p>
                                <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              CSO, Planeteria
            </span>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
                        style={{ opacity: "0.5" }}
                    >
                        <img
                            alt=""
                            className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
                            src="/testimonials/dillon-lenora.jpg"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
                        />
                        <figure className="relative p-10">
                            <blockquote>
                                <p className="relative text-xl/7 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              “
            </span>
                                    I was able to replace 80% of my team with RadiantAI bots.
                                    <span aria-hidden="true" className="absolute">
              ”
            </span>
                                </p>
                            </blockquote>
                            <figcaption className="mt-6 border-t border-white/20 pt-6">
                                <p className="text-sm/6 font-medium text-white">Dillon Lenora</p>
                                <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              VP of Sales, Detax
            </span>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
                        style={{ opacity: "0.5" }}
                    >
                        <img
                            alt=""
                            className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
                            src="/testimonials/harriet-arron.jpg"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
                        />
                        <figure className="relative p-10">
                            <blockquote>
                                <p className="relative text-xl/7 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              “
            </span>
                                    I’ve smashed all my targets without having to speak to a lead in
                                    months.
                                    <span aria-hidden="true" className="absolute">
              ”
            </span>
                                </p>
                            </blockquote>
                            <figcaption className="mt-6 border-t border-white/20 pt-6">
                                <p className="text-sm/6 font-medium text-white">Harriet Arron</p>
                                <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              Account Manager, Commit
            </span>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="w-2xl shrink-0 sm:w-216" />
                </div>
                <div className="mt-16 px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-7xl">
                        <div className="flex justify-between">
                            <div>
                                <p className="max-w-sm text-sm/6 text-gray-600">
                                    Join the best sellers in the business and start using Radiant to hit
                                    your targets today.
                                </p>
                                <div className="mt-2">
                                    <a
                                        className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
                                        data-headlessui-state=""
                                        href="#"
                                    >
                                        Get started
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            data-slot="icon"
                                            className="size-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="hidden sm:flex sm:gap-2">
                                <button
                                    aria-label="Scroll to testimonial from Tina Yards"
                                    className="size-2.5 rounded-full border border-transparent bg-gray-300 transition data-active:bg-gray-400 data-hover:bg-gray-400 forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4"
                                    type="button"
                                    data-headlessui-state=""
                                    data-active="true"
                                />
                                <button
                                    aria-label="Scroll to testimonial from Conor Neville"
                                    className="size-2.5 rounded-full border border-transparent bg-gray-300 transition data-active:bg-gray-400 data-hover:bg-gray-400 forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4"
                                    type="button"
                                    data-headlessui-state=""
                                />
                                <button
                                    aria-label="Scroll to testimonial from Amy Chase"
                                    className="size-2.5 rounded-full border border-transparent bg-gray-300 transition data-active:bg-gray-400 data-hover:bg-gray-400 forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4"
                                    type="button"
                                    data-headlessui-state=""
                                />
                                <button
                                    aria-label="Scroll to testimonial from Veronica Winton"
                                    className="size-2.5 rounded-full border border-transparent bg-gray-300 transition data-active:bg-gray-400 data-hover:bg-gray-400 forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4"
                                    type="button"
                                    data-headlessui-state=""
                                />
                                <button
                                    aria-label="Scroll to testimonial from Dillon Lenora"
                                    className="size-2.5 rounded-full border border-transparent bg-gray-300 transition data-active:bg-gray-400 data-hover:bg-gray-400 forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4"
                                    type="button"
                                    data-headlessui-state=""
                                />
                                <button
                                    aria-label="Scroll to testimonial from Harriet Arron"
                                    className="size-2.5 rounded-full border border-transparent bg-gray-300 transition data-active:bg-gray-400 data-hover:bg-gray-400 forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4"
                                    type="button"
                                    data-headlessui-state=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}