'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import FreeTrialButton from './FreeTrialButton';
import DropdownUser from './Header/DropdownUser';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { examModelActions } from '@/store/slices/examSlice';
import MegaMenu from './MegaMenu';

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const [showExamsMenu, setShowExamsMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const { examModels } = useSelector((state) => state.examModel);
  const dispatch = useDispatch();
  // Fetch exam models on component mount
  useEffect(() => {
    dispatch(examModelActions.fetchAllExamModelsSlice());
  }, [dispatch]);

   
  const examCategories = [
    {
      category: 'Banking',
      exams: ['IBPS PO', 'IBPS Clerk', 'SBI PO', 'SBI Clerk', 'RBI Assistant'],
    },
    {
      category: 'SSC & Railway',
      exams: ['SSC CGL', 'SSC CHSL', 'SSC CPO', 'RRB NTPC', 'RRB JE'],
    },
    {
      category: 'Engineering',
      exams: ['GATE', 'IES', 'PSU Exams'],
    },
    {
      category: 'UPSC',
      exams: ['UPSC Civil Services', 'UPSC NDA', 'UPSC CDS'],
    },
    {
      category: 'Teaching',
      exams: ['CTET', 'TET', 'DSSSB'],
    },
    {
      category: 'Defence & Police',
      exams: ['Indian Army', 'Indian Navy', 'CAPF', 'State Police'],
    },
    {
      category: 'State Exam',
      exams: ['UPPSC', 'BPSC', 'MPPSC', 'RPSC'],
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6 border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="block p-2 font-medium text-gray-900">
                  Exams List
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="block p-2 font-medium text-gray-900">
                  Test Series
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative z-50 w-full flex-none text-md font-semibold text-slate-900">
        <nav aria-label="Top" className="container mx-auto p-5 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Company Logo"
                  src="https://s3-cdnwhjr.whjr.online/website/desktop/logo_whjr.png?color=indigo&shade=600"
                  className="lg:h-16 sm:h-8"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex space-x-8 h-full">
                <div
                  className="relative flex items-center text-gray-700 hover:text-gray-900 cursor-pointer"
                  onMouseEnter={() => setShowExamsMenu(true)}
                  onMouseLeave={() => {
                    setShowExamsMenu(false);
                    setActiveCategory(null);
                  }}
                >
                  <span>Exams List</span>
                  <ChevronDownIcon className="ml-1 h-5 w-5" />

                  {/* Mega Menu */}
                  {showExamsMenu && (
                    <div className="absolute top-6 mt-5 left-0 w-[600px] bg-gray-100  shadow-lg rounded-lg z-10 flex">
                      {/* Category List */}
                      <div className="w-1/4 border-r pt-4 pb-4">
                        {examCategories.map((category) => (
                          <div
                            key={category.category}
                            className={`p-5 cursor-pointer ${
                              activeCategory === category.category ? 'font-bold bg-white border-gray-200' : ''
                            }`}
                            onMouseEnter={() => setActiveCategory(category.category)}
                          >
                            {category.category}
                          </div>
                        ))}
                      </div>

                      {/* Exam List */}
                      <div className="w-3/4">
                        {activeCategory &&
                          examCategories
                            .find((cat) => cat.category === activeCategory)
                            ?.exams.map((exam) => (
                              <div key={exam} className="px-5 py-3 text-sm hover:font-bold hover:bg-white hover:border-gray-200">
                                {exam}
                              </div>
                            ))}
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="relative flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                     <a href="#" className="text-gray-700 hover:text-gray-900">
                  Test Series
                </a>
                  </div>
               
              </div>
            </div>
            <MegaMenu/>
            <div className="ml-auto flex items-center">
              <div className="lg:justify-end">
                {session?.user ? (
                  <DropdownUser />
                ) : (
                  <FreeTrialButton btn1={'Login'} btn2={'Book a FREE Trial'} />
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
