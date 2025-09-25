import { GrContact, GrLanguage } from "react-icons/gr";
import { MdOutlineContactSupport, MdOutlineSearch } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const navlink_1 = [
  // {
  //   icon: <GrLanguage />,
  //   title: "EN",
  //   path: "#",
  // },
  // {
  //   icon: <MdOutlineSearch />,
  //   title: "Search",
  //   path: "#",
  // },
  // {
  //   icon: <IoMdNotificationsOutline />,
  //   title: "Notifications",
  //   path: "#",
  // },
  // {
  //   icon: <MdOutlineContactSupport />,
  //   title: "Support",
  //   path: "#",
  // },
  {
    icon: <GrContact />,
    title: "Contact Us",
    path: "/contact",
  },
];

const navLink_2 = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
    //icon: <IoIosArrowDown />,
  },
  {
    title: "ESD Services",
    path: "/esd",
    // icon: <IoIosArrowDown />,
  },
  {
    title: "Products",
    path: "/products",
  },
  // {
  //   title: "Industries Served",
  //   icon: <IoIosArrowDown />,
  // },
  {
    title: "Services",
    path: "/service",
    // icon: <IoIosArrowDown />,
  },
  {
    title: "Company",
    path: "/company",
    // icon: <IoIosArrowDown />,
  },
];

// {

// <IoIosArrowDown />
// }

export { navlink_1, navLink_2 };
