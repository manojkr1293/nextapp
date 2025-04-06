import { examItemModelActions } from "@/store/slices/examItemSlice";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ExamCategoryItems = ({examid}) =>{
  console.log('examidd:', examid);
  const { examItemModels }  = useSelector((state)=>state.examItemModel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(examItemModelActions.fetchexamItemOnExamIdSlice(examid));
  }, [dispatch, examid]);

  return(
    <>
    <div className="w-full bg-gradient-to-t from-slate-200 pb-20 pt-5">
    <div className="mx-auto max-w-7xl   ">
    <div className="grid grid-cols-4 gap-4">
    {examItemModels.map((examItems) => (
                    
        <div key={examItems.id} className="bg-white rounded-md shadow-md border py-3 px-5">
        <div className="text-[20px] font-medium">
     
        <Link href={`/exam/${examItems.id}`}>
              {examItems.name}
            </Link>
          </div>
      </div>
      ))}
    </div>
    </div>
    </div>
    </>
  )
}

export default ExamCategoryItems;