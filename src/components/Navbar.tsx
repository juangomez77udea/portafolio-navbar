import React from 'react'
import { FaFirefoxBrowser, FaRegCalendarAlt, FaCalculator, FaFolderOpen } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { BiLogoVisualStudio } from "react-icons/bi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const Navbar = () => {
      const icons = [
            { icon: <FaFirefoxBrowser className="text-orange-500" />, label: "Pitch" },
            { icon: <FaRegCalendarAlt className="text-blue-400" />, label: "Calendar" },
            { icon: <IoSettingsSharp className="text-gray-400" />, label: "Settings" },
            { icon: <FaCalculator className="text-green-500" />, label: "Calculator" },
            { icon: <FaFolderOpen className="text-yellow-500" />, label: "Files" },
            { icon: <BiLogoVisualStudio className="text-blue-500" />, label: "VS Code" },
            { icon: <HiOutlineSquares2X2 className="text-white" />, label: "Menu" },
      ];

      return (
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
                  <nav className="flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                        {icons.map((item, index) => (
                              <div
                                    key={index}
                                    className="group relative p-3 transition-all duration-200 hover:bg-white/10 rounded-xl cursor-pointer hover:-translate-y-1"
                              >
                                    <div className="text-3xl">
                                          {item.icon}
                                    </div>

                                    
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                          {item.label}
                                    </span>
                              </div>
                        ))}
                  </nav>
            </div>
      );
}

export default Navbar