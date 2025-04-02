import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  testimonials: [
    { id: 1, studentName: "Test Kr", rank: 'AIR 99', exam: 'NEET', review:'My name is Sushant Padha. I secured an AIR 52 in JEE Advanced 2024. I started my preparation with Physics Wallah in 11th grade by joining the Arjuna batch. In 12th grade, I joined the Lakshya batch and completed my entire preparation with Physics Wallah. PW teachers and their guidance played a very important role in achieving my goal. Once I started my preparation, I never looked back.' },
    { id: 2, studentName: "Test Kr", rank: 'AIR 99', exam: 'NEET',review:'My name is Sushant Padha. I secured an AIR 52 in JEE Advanced 2024. I started my preparation with Physics Wallah in 11th grade by joining the Arjuna batch. In 12th grade, I joined the Lakshya batch and completed my entire preparation with Physics Wallah. PW teachers and their guidance played a very important role in achieving my goal. Once I started my preparation, I never looked back.'   },
    { id: 3, studentName: "Test Kr", rank: 'AIR 99', exam: 'NEET',review:'My name is Sushant Padha. I secured an AIR 52 in JEE Advanced 2024. I started my preparation with Physics Wallah in 11th grade by joining the Arjuna batch. In 12th grade, I joined the Lakshya batch and completed my entire preparation with Physics Wallah. PW teachers and their guidance played a very important role in achieving my goal. Once I started my preparation, I never looked back.'   },
    { id: 4, studentName: "Test Kr", rank: 'AIR 99', exam: 'NEET',review:'My name is Sushant Padha. I secured an AIR 52 in JEE Advanced 2024. I started my preparation with Physics Wallah in 11th grade by joining the Arjuna batch. In 12th grade, I joined the Lakshya batch and completed my entire preparation with Physics Wallah. PW teachers and their guidance played a very important role in achieving my goal. Once I started my preparation, I never looked back.'    },
    { id: 5, studentName: "Test Kr", rank: 'AIR 99', exam: 'NEET',review:'My name is Sushant Padha. I secured an AIR 52 in JEE Advanced 2024. I started my preparation with Physics Wallah in 11th grade by joining the Arjuna batch. In 12th grade, I joined the Lakshya batch and completed my entire preparation with Physics Wallah. PW teachers and their guidance played a very important role in achieving my goal. Once I started my preparation, I never looked back.'    },
    { id: 6, studentName: "Test Kr", rank: 'AIR 99', exam: 'NEET',review:'My name is Sushant Padha. I secured an AIR 52 in JEE Advanced 2024. I started my preparation with Physics Wallah in 11th grade by joining the Arjuna batch. In 12th grade, I joined the Lakshya batch and completed my entire preparation with Physics Wallah. PW teachers and their guidance played a very important role in achieving my goal. Once I started my preparation, I never looked back.'    },
    { id: 7, studentName: "Test Kr", rank: 'AIR 99', exam: 'NEET',review:'My name is Sushant Padha. I secured an AIR 52 in JEE Advanced 2024. I started my preparation with Physics Wallah in 11th grade by joining the Arjuna batch. In 12th grade, I joined the Lakshya batch and completed my entire preparation with Physics Wallah. PW teachers and their guidance played a very important role in achieving my goal. Once I started my preparation, I never looked back.'    },
    { id: 8, studentName: "Test Kr", rank: 'AIR 99', exam: 'NEET',review:'My name is Sushant Padha. I secured an AIR 52 in JEE Advanced 2024. I started my preparation with Physics Wallah in 11th grade by joining the Arjuna batch. In 12th grade, I joined the Lakshya batch and completed my entire preparation with Physics Wallah. PW teachers and their guidance played a very important role in achieving my goal. Once I started my preparation, I never looked back.'},
    { id: 9, studentName: "Test Kr", rank: 'AIR 99', exam: 'NEET',review:'My name is Sushant Padha. I secured an AIR 52 in JEE Advanced 2024. I started my preparation with Physics Wallah in 11th grade by joining the Arjuna batch. In 12th grade, I joined the Lakshya batch and completed my entire preparation with Physics Wallah. PW teachers and their guidance played a very important role in achieving my goal. Once I started my preparation, I never looked back.' },
  ],
};

const testimonialSlice = createSlice({
  name:"testimonial",
  initialState,
  reducers:{
    setTestimonials:(state, action) =>{
      state.testimonials = action.payload
    }
  }
})

export const {setTestimonials} = testimonialSlice.actions;
export default testimonialSlice.reducer;