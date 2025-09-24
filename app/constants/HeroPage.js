import { LineChart, Monitor, TreePine, Workflow } from "lucide-react";
import { HiMiniCpuChip } from "react-icons/hi2";
import { GiCircuitry } from "react-icons/gi";
import { GoRocket } from "react-icons/go";
import { FaHandHoldingMedical } from "react-icons/fa6";

const insights = [
  {
    id: 1,
    //title:
    // "Rethinking trade routes: how global supply chains are being rewired",
    //date: "18 Aug 2025",
    //tag: "Resilience",
    img: "/home/e1.jpg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    // title:
    //   "When reliability is the name of the game: Building supply chain strength in Asia-Pacific",
    // date: "13 Aug 2025",
    // tag: "Resilience",
    img: "/home/e9.jpg",
    className: "md:col-span-2",
  },
  {
    id: 3,
    // title:
    //   "Building resilient supply chains: how strategic warehousing networks and...",
    // date: "6 Aug 2025",
    // tag: "Resilience",
    img: "/home/e2.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    // title:
    //   "Building resilient supply chains: how strategic warehousing networks and...",
    // date: "6 Aug 2025",
    // tag: "Resilience",
    img: "/home/e4.jpg",
    className: "md:col-span-1 w-[300px] md:row-span-1",
  },
  {
    id: 5,
    // title:
    //   "Building resilient supply chains: how strategic warehousing networks and...",
    // date: "6 Aug 2025",
    // tag: "Resilience",
    img: "/home/e10.jpg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    // title:
    //   "Building resilient supply chains: how strategic warehousing networks and...",
    // date: "6 Aug 2025",
    // tag: "Resilience",
    img: "/home/e7.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    // title:
    //   "Building resilient supply chains: how strategic warehousing networks and...",
    // date: "6 Aug 2025",
    // tag: "Resilience",
    img: "/home/e9.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
];

const insights_2 = [
  {
    title: "Electronics Manufacturing",
    desc: "ESD protection is critical in electronics manufacturing lines.Even a small static discharge can damage microchips.Products like mats, straps, and ionizers protect delicate components.",
    icon: <HiMiniCpuChip className="w-12 h-12 text-sky-500" />,
  },
  {
    title: "Semiconductor Plants",
    desc: "Semiconductor wafers are extremely sensitive to static.ESD flooring and protective garments are mandatory here.Controlled environments ensure stable device performance.Without ESD, millions of chips could fail in seconds.Our solutions safeguard every step of wafer processing.",
    icon: <GiCircuitry className="w-12 h-12 text-sky-500" />,
  },
  {
    title: "Automotive Electronics",
    desc: "Modern vehicles run on advanced electronics.From sensors to infotainment, static can harm systems.ESD benches and tools ensure safe assembly of parts.",
    icon: <GoRocket className="w-12 h-12 text-sky-500" />,
  },
  {
    title: "Medical Electronics",
    desc: "Critical medical devices use high-precision electronics.ESD damage can risk patient safety and accuracy.Protective flooring, gloves, and storage solutions are vital.Hospitals and labs depend on static-safe handling.ESD ensures devices function flawlessly every time.",
    icon: <FaHandHoldingMedical className="w-12 h-12 text-sky-500" />,
  },
];

export { insights, insights_2 };
