'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { examModelActions } from "@/store/slices/examSlice";

const MegaMenu = () => {
  
  const { examModels } = useSelector((state) => state.examModel);
  const { examItemModels } = useSelector((state) => state.examItemModel); // Assuming examItemModels comes from state
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  // Fetch exam models on component mount
  useEffect(() => {
    dispatch(examModelActions.fetchAllExamModelsSlice());
  }, [dispatch]);

  // Group exam items by category (like SSC, Banking, etc.)
  const categorizedExamItems = examModels?.reduce((acc, category) => {
    acc[category.name] = examItemModels.filter(
      (examItem) => examItem.category === category.name
    );
    return acc;
  }, {});

  return (
    <div className="relative">
      {/* Menu Trigger */}
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        View Exams
      </button>

      {/* Mega Menu Container */}
      {menuOpen && (
        <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-6 grid grid-cols-4 gap-4 w-[800px] z-50">
          {categorizedExamItems &&
            Object.keys(categorizedExamItems).map((category) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-700 mb-2">
                  {category}
                </h3>
                {categorizedExamItems[category].map((examItem) => (
                  <div key={examItem.id}>
                    <Link
                      href={`/exam/${examItem.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {examItem.name}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
