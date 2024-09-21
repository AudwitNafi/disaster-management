import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
// import { MdQueryStats } from 'react-icons/md';
// import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaDonate } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { MdCrisisAlert } from "react-icons/md";

const links = [
  {
    text: "Dashboard",
    path: ".",
    icon: <IoMdHome />,
  },
  {
    text: "Crises",
    path: "crisis",
    icon: <MdCrisisAlert />,
  },
  {
    text: "Donations",
    path: "donation",
    icon: <FaDonate />,
  },
  {
    text: "Inventory",
    path: "inventory",
    icon: <MdInventory />,
  },
  {
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
  {
    text: "admin",
    path: "admin",
    icon: <MdAdminPanelSettings />,
  },
];

export default links;
