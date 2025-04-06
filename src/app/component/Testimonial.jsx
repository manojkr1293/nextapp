import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FaQuoteLeft } from "react-icons/fa";
import { useSelector } from "react-redux"
const Testimonial = () =>{

  const testimonials = useSelector((state)=>state.testimonial.testimonials);
  
  return (
    <>
      
      <div className="w-full pt-8">
      <h2 className="text-center text-4xl text-orange-400 py-2 font-bold">Students ❤️ Physics Wallah</h2>
    <div className="mx-auto max-w-7xl py-5">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
      {testimonials.map((testimonial, index) => (
          <CarouselItem key={testimonial.id} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3" >
            <div className="">
              <Card>
                <CardContent className="items-center justify-center  p-5">
                <FaQuoteLeft className="text-3xl text-slate-200"/>
                  <p className="text-md text-justify py-4 font-semibold text-gray-700">{testimonial.review}</p>
                <p className="text-3xl text-center py-1 font-medium">{testimonial.studentName}</p>
                <p className="text-center text-sm font-medium">{testimonial.exam} || {testimonial.rank}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </div>
    </>
  )
}
export default Testimonial;
