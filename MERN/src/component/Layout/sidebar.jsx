import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSidebar = () => {
    setIsSidebarClosed((prev) => !prev);
    setOpenSubMenus({});
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div
      className={`relative h-screen bg-gray-900 text-gray-200 ${
        isSidebarClosed ? "w-16" : "w-64"
      } transition-all duration-300 fixed`}
    >
      <ul className="list-none p-4 space-y-4 relative">
        <li className="flex justify-between items-center">
          <span
            className={`font-bold ${
              isSidebarClosed ? "hidden" : "block"
            } transition-all`}
          >
            Coding2Go
          </span>
          <button
            onClick={toggleSidebar}
            className="p-2 bg-gray-800 rounded-md hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 ${
                isSidebarClosed ? "rotate-180" : "rotate-0"
              } transition-transform`}
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
            </svg>
          </button>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Z" />
            </svg>
            <span className={`${isSidebarClosed ? "hidden" : "block"}`}>
              Home
            </span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="M520-600v-240h320v240H520Z" />
            </svg>
            <span className={`${isSidebarClosed ? "hidden" : "block"}`}>
              Dashboard
            </span>
          </a>
        </li>

        <li>
          <button
            onClick={() => toggleSubMenu("create")}
            className="flex items-center justify-between w-full gap-4 p-2 rounded-md hover:bg-gray-800"
          >
            <span className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 -960 960 960"
                fill="#fff"
              >
                <path d="M200-200h57l391-391-57-57-391 391v57Z" />
              </svg>
              <span className={`${isSidebarClosed ? "hidden" : "block"}`}>
                Create
              </span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 ${
                openSubMenus.create ? "rotate-180" : "rotate-0"
              } transition-transform`}
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </button>
          <ul
            className={`${
              openSubMenus.create ? "max-h-40" : "max-h-0"
            } overflow-hidden transition-max-height`}
          >
            <li className="ml-8">
              <a href="#" className="block py-2 hover:text-gray-400">
                Folder
              </a>
            </li>
            <li className="ml-8">
              <a href="#" className="block py-2 hover:text-gray-400">
                Document
              </a>
            </li>
            <li className="ml-8">
              <a href="#" className="block py-2 hover:text-gray-400">
                Project
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 -960 960 960"
              fill="#fff"
            >
              <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Z" />
            </svg>
            <span className={`${isSidebarClosed ? "hidden" : "block"}`}>
              Calendar
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
