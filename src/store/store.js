import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import examItemReducer from "./slices/examItemSlice";
import testimonialReducer from "./slices/testimonialSlice";
import testSeriesReducer from './slices/testSeriesSlice';
import classModelReducer from "./slices/classModelSlice";
import subjectModelReducer from "./slices/subjectModelSlice";
import topicModelReducer from "./slices/topicModelSlice";
import subTopicReducer from "./slices/subTopicSlice";
import questionModelReducer from "./slices/questionSlice";
import examModelReducer from "./slices/examSlice";
import testAttemptModelReducer from "./slices/testAttemptSlice";



const store = configureStore({
  reducer: {
    auth: authReducer,
    examItemModel: examItemReducer,
    testimonial:testimonialReducer,
    testSeries: testSeriesReducer,
    classModel:classModelReducer,
    subjectModel:subjectModelReducer,
    topicModel:topicModelReducer,
    subTopicModel:subTopicReducer,
    questionModel:questionModelReducer,
    examModel : examModelReducer,
    testAttempt : testAttemptModelReducer
  },
});

export default store;
