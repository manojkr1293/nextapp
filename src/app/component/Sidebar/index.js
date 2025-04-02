"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import ClickOutside from "../ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";

const menuGroups = [
  {
    name: "MENU",
    menuItems: [
      {
        label: "Dashboard",
        route: "/admindashboard",
      },
      {
        label: "Exam Category",
        route: "#",
        children: [{ label: "Create", route: "/exams/add" },{ label: "List", route: "/exams" },{ label: "Import & Export", route: "/exams/bulkupload" }],
      },
      {
        label: "Exam Items",
        route: "#",
        children: [{ label: "Create", route: "/examitems/add" },{ label: "List", route: "/examitems" },{ label: "Import & Export", route: "/examitems/bulkupload" }],
      },
      {
        label: "Test Series",
        route: "#",
        children: [{ label: "Create", route: "/testseries/add" },{ label: "List", route: "/testseries" }],
      },
      {
        label: "Classes",
        route: "#",
        children: [{ label: "Create", route: "/classes/add" },{ label: "List", route: "/classes" } ,{ label: "Import & Export", route: "/classes/bulkupload" }],
      },
      {
        label: "Subjects",
        route: "#",
        children: [{ label: "Create", route: "/subjects/add" },{ label: "List", route: "/subjects" } ,{ label: "Import & Export", route: "/subjects/bulkupload" }],
      },
      {
        label: "Topics",
        route: "#",
        children: [{ label: "Create", route: "/topics/add" },{ label: "List", route: "/topics" } ,{ label: "Import & Export", route: "/topics/bulkupload" }],
      },
      {
        label: "Subtopics",
        route: "#",
        children: [{ label: "Create", route: "/subtopics/add" },{ label: "List", route: "/subtopics" } ,{ label: "Import & Export", route: "/subtopics/bulkupload" }],
      },
      {
        label: "Questions",
        route: "#",
        children: [{ label: "Create", route: "/questions/add" },{ label: "List", route: "/questions" },{ label: "Import & Export", route: "/questions/bulkupload" }],
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-gray-800 duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* SIDEBAR HEADER */}
        <div className="flex items-center justify-between gap-2 px-6 py-8 lg:py-8">
          <Link href="/">
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* SIDEBAR HEADER */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* Sidebar Menu */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-gray-500">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* Sidebar Menu */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
