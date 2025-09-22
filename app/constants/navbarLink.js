import { GrContact, GrLanguage } from "react-icons/gr";
import { MdOutlineContactSupport, MdOutlineSearch } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const navlink_1 = [
  {
    icon: <GrLanguage />,
    title: "EN",
    path: "#",
  },
  {
    icon: <MdOutlineSearch />,
    title: "Search",
    path: "#",
  },
  {
    icon: <IoMdNotificationsOutline />,
    title: "Notifications",
    path: "#",
  },
  {
    icon: <MdOutlineContactSupport />,
    title: "Support",
    path: "#",
  },
  {
    icon: <GrContact />,
    title: "Contact Us",
    path: "/contact",
  },
];

const navLink_2 = [
  {
    title: "Prices",
  },
  {
    title: "Book",
    icon: <IoIosArrowDown />,
  },
  {
    title: "Schedules",
  },
  {
    title: "Tracking",
  },
  {
    title: "Manage",
    icon: <IoIosArrowDown />,
  },
  {
    title: "Services",
    icon: <IoIosArrowDown />,
  },
  {
    title: "Company",
    icon: <IoIosArrowDown />,
  },
];

// {

// <IoIosArrowDown />
// }

export { navlink_1, navLink_2 };
