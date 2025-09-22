import { LineChart, Monitor, TreePine, Workflow } from "lucide-react";

const insights = [
  {
    id: 1,
    //title:
    // "Rethinking trade routes: how global supply chains are being rewired",
    //date: "18 Aug 2025",
    //tag: "Resilience",
    img: "/images/g1.jpg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    // title:
    //   "When reliability is the name of the game: Building supply chain strength in Asia-Pacific",
    // date: "13 Aug 2025",
    // tag: "Resilience",
    img: "/images/g2.jpg",
    className: "md:col-span-2",
  },
  {
    id: 3,
    // title:
    //   "Building resilient supply chains: how strategic warehousing networks and...",
    // date: "6 Aug 2025",
    // tag: "Resilience",
    img: "/images/i3.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    // title:
    //   "Building resilient supply chains: how strategic warehousing networks and...",
    // date: "6 Aug 2025",
    // tag: "Resilience",
    img: "/images/g3.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    // title:
    //   "Building resilient supply chains: how strategic warehousing networks and...",
    // date: "6 Aug 2025",
    // tag: "Resilience",
    img: "/images/g4.jpg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    // title:
    //   "Building resilient supply chains: how strategic warehousing networks and...",
    // date: "6 Aug 2025",
    // tag: "Resilience",
    img: "/images/g5.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    // title:
    //   "Building resilient supply chains: how strategic warehousing networks and...",
    // date: "6 Aug 2025",
    // tag: "Resilience",
    img: "/images/g6.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
];

const insights_2 = [
  {
    title: "Integrated logistics",
    desc: "Everything is connected, especially logistics. Supply chains span the globe, with each component affecting the next. Read on for more insights on all things integrated logistics.",
    icon: <Workflow className="w-12 h-12 text-sky-500" />,
  },
  {
    title: "Digitalisation",
    desc: "The digital world is vital to companies, with many choosing to use it to reach and expand their customer base. Read on for the latest digital innovations within logistics.",
    icon: <Monitor className="w-12 h-12 text-sky-500" />,
  },
  {
    title: "Growth",
    desc: "Expansion, connection, and growth; three key elements most companies are constantly looking to invest in and develop in an ever-changing game of logistics. Click here for all things growth.",
    icon: <LineChart className="w-12 h-12 text-sky-500" />,
  },
  {
    title: "Sustainability",
    desc: "Decarbonisation is reshaping supply chains, calling for a shift in how logistics operates. Read on for insights into what it means for your business – and how you can adapt.",
    icon: <TreePine className="w-12 h-12 text-sky-500" />,
  },
];

export { insights, insights_2 };
