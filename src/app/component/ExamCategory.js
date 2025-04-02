import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { examModelActions } from "@/store/slices/examSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExamCategoryItems from "./ExamCategoryItems";

const ExamCategory = () => {
  const dispatch = useDispatch();
  const { examModels } = useSelector((state) => state.examModel);

  const [selectedExam, setSelectedExam] = useState(null);

  // Fetch exam models on component mount
  useEffect(() => {
    dispatch(examModelActions.fetchAllExamModelsSlice());
  }, [dispatch]);

  // Update selectedExam when examModels changes
  useEffect(() => {
    if (examModels && examModels.length > 0) {
      setSelectedExam(examModels[0].id);
    }
  }, [examModels]);

  return (
    <>
      <div className="w-full pt-8">
        <h2 className="text-center text-4xl text-orange-400 py-2 font-bold">
          Exam Categories
        </h2>
        <div className="mx-auto max-w-7xl py-5">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {examModels &&
                examModels.map((exams) => (
                  <CarouselItem
                    key={exams.id}
                    className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                  >
                    <Card>
                      <CardContent className="flex items-center justify-center p-2">
                        <button
                          onClick={() => setSelectedExam(exams.id)}
                          className="text-xl w-full font-medium focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                          {exams.name}
                        </button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      {selectedExam && <ExamCategoryItems examid={selectedExam} />}
    </>
  );
};

export default ExamCategory;
