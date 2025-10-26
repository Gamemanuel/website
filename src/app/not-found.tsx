"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button, buttonVariants } from "@/components/ui/button"
import {
    ChevronLeft,
    TriangleAlert
} from "lucide-react"

export default function NotFound() {
    const router = useRouter()
    return (
        <div className="bg-gradient-to-tr from-indigo-950 via-indigo-900 to-purple-700 w-full h-full absolute top-0 left-0 font-inter">
            <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center px-6 py-12 bg-[oklch(63.7% 0.237 25.331)]">
                <div className="mx-auto flex max-w-sm flex-col items-center text-center">
                    <p className="rounded-full bg-blue-50 p-3 text-sm font-medium dark:bg-gray-800 ">
                        <TriangleAlert className="size-6 " />
                    </p>
                    <h1 className="mt-3 text-3xl font-semibold text-white md:text-3xl">
                        Page not found
                    </h1>
                    <p className="mt-4 text-gray-400">
                        The page you are looking for seems to have vanished
                    </p>

                    <div className="mt-6 flex justify-center gap-x-3">
                        <Button
                            onClick={() => router.back()}
                            className={buttonVariants({ variant: "secondary" })}
                        >
                            <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                            <span>Go back</span>
                        </Button>

                        <Link href="/" className={buttonVariants({ variant: "default" })}>
                            Take me home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}