import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Icon from "supercons";

export function TestimonialsCarousel() {
    return (
        <Carousel className="w-full max-w-400">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="h-400px bg-white border-0 rounded-lg">
                                <CardContent className="flex items-center h-400px justify-center p-6">
                                    <span className="text-4xl font-semibold h-400px">“We've used Cameron a couple of times for our video voiceovers, and both experiences have been excellent. Brilliant voice actor, great communication, and is very generous in ensuring he delivers exactly what we want. We can't recommend him enough, thank you Cameron!”
    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>

            <CarouselNext/>
        </Carousel>
    )
}
