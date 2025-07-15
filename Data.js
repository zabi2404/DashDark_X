import { RiHomeFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { PiPuzzlePieceFill } from "react-icons/pi";
import { FaPen } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { HiBell } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { TbBrandWebflow } from "react-icons/tb";

const MenuLink1 = [
  {
    id: 1,
    title: "Dashboard",
    icon: RiHomeFill,
    to: "/" // Assuming this is the home route
  }, {
    id: 2,
    title: "Features",
    icon: FaStar,
    to: "/feature" // Assuming this is the route for features
  }
  , {
    id: 3,
    title: "Users",
    icon: FaUser,
    to: "/user" // Assuming this is the route for users
  }
  , {
    id: 4,
    title: "Pricing",
    icon: PiCurrencyDollarSimpleBold,
    to: "/pricing" // Assuming this is the route for pricing
  }
  , {
    id: 5,
    title: "Integrations",
    icon: PiPuzzlePieceFill,
    to: "/integration" // Assuming this is the route for integrations
  }

]

const MenuLink2 = [
  {
    title: "Settings",
    icon: IoSettings,
    to: "/setting" // Assuming this is the home route
  },
{
    title: "Template pages",
    icon: TbBrandWebflow,
    to: "/template-pages" // Assuming this is the home route
  },
]

const CredentialSubmenuArray=
[{
   
    title: "Personal Information",
    icon: FaPen ,
    to:'adduser'
  },
  {
   
    title: "Team",
    icon: FaUser,
    to:"team"
  },
{
   
    title: "Billing",
    icon: BsCreditCardFill,
    to:'billing'
  },

  {
   
    title: "Notifications",
    icon: HiBell,
    to:"notification"
  },

]

const Submenu = [
  {
    id: 1,
    title: "Dashboard",
    items: [
      { name: "All Pages", path: "all-pages" },
      { name: "Reports", path: "reports" },
      { name: "Products", path: "products" },
     
    ]
  },
  // {
  //   id: 2,
  //   title: "Features",
  //   items: [
     
  //     { name: "Contacts", path: "contacts" },
  //     { name: "Board", path: "board" },
  //     { name: "Table", path: "table" },
  //   ]
  // }
];


const orderTabledata =[
   { id: 1234, date: 'Jan 1 2024', total: 100, paid: false },
  { id: 1235, date: 'Jan 2 2024', total: 150, paid: false },
  { id: 1236, date: 'Jan 3 2024', total: 200, paid: true  },
  { id: 1237, date: 'Jan 4 2024', total: 200, paid: false },
  { id: 1238, date: 'Jan 5 2024', total: 200, paid: true  },
  { id: 1239, date: 'Jan 6 2024', total: 200, paid: false },
]

// ordersMock.js (or inline in the component)
const OrderStatusTabledata = [
  {
    orderNo: 10124,
    client: 'John Carter',
    email: 'hello@johncarter.com',
    date: '2025‑07‑14',
    status: 'Delivered',          // or 'Cancelled'
    country: 'United States',
    total: 100,
  },
  {
    orderNo: 10125,
    client: 'Mary Allen',
    email: 'mary@acme.io',
    date: '2025‑07‑13',
    status: 'Cancelled',
    country: 'Canada',
    total: 240,
  },
  {
    orderNo: 10126,
    client: 'Zoe Müller',
    email: 'zoe@rocketlabs.co',
    date: '2025‑07‑12',
    status: 'Delivered',
    country: 'Germany',
    total: 80,
  },
   {
    orderNo: 10127,
    client: 'John Carter',
    email: 'hello@johncarter.com',
    date: '2025‑07‑14',
    status: 'Delivered',          // or 'Cancelled'
    country: 'United States',
    total: 100,
  },
  {
    orderNo: 10128,
    client: 'Mary Allen',
    email: 'mary@acme.io',
    date: '2025‑07‑13',
    status: 'Cancelled',
    country: 'Canada',
    total: 240,
  },
   {
    orderNo: 10129,
    client: 'Zoe Müller',
    email: 'zoe@rocketlabs.co',
    date: '2025‑07‑12',
    status: 'Delivered',
    country: 'Germany',
    total: 80,
  },
];


 const AllUserTabledata = [
  {
    id: 1,
    avatar: '/Images/Avatar Circle.svg', 
    name: 'John Carter',
    email: 'hello@johncarter.com',
    phone: '(414) 907‑1274',
    country: 'United States',
    company: 'Google',
    status: 'Online',
  },
  {
    id: 2,
    avatar: '/Images/Avatar Circle.svg',
    name: 'Mary Allen',
    email: 'mary@acme.io',
    phone: '(212) 555‑0199',
    country: 'Canada',
    company: 'Acme Corp',
    status: 'Referral',
  },
  {
    id: 3,
    avatar: '/Images/Avatar Circle.svg',
    name: 'Zoe Müller',
    email: 'zoe@rocketlabs.co',
    phone: '(415) 808‑4400',
    country: 'Germany',
    company: 'Rocket Labs',
    status: 'Event',
  },

  {
    id: 4,
    avatar: '/Images/Avatar Circle.svg', 
    name: 'John Carter',
    email: 'hello@johncarter.com',
    phone: '(414) 907‑1274',
    country: 'United States',
    company: 'Google',
    status: 'Online',
  },
  {
    id: 5,
    avatar: '/Images/Avatar Circle.svg',
    name: 'Mary Allen',
    email: 'mary@acme.io',
    phone: '(212) 555‑0199',
    country: 'Canada',
    company: 'Acme Corp',
    status: 'Referral',
  },
  {
    id: 6,
    avatar: '/Images/Avatar Circle.svg',
    name: 'Zoe Müller',
    email: 'zoe@rocketlabs.co',
    phone: '(415) 808‑4400',
    country: 'Germany',
    company: 'Rocket Labs',
    status: 'Event',
  },
  {
    id: 7,
    avatar: '/Images/Avatar Circle.svg', 
    name: 'John Carter',
    email: 'hello@johncarter.com',
    phone: '(414) 907‑1274',
    country: 'United States',
    company: 'Google',
    status: 'Online',
  },
  {
    id: 8,
    avatar: '/Images/Avatar Circle.svg',
    name: 'Mary Allen',
    email: 'mary@acme.io',
    phone: '(212) 555‑0199',
    country: 'Canada',
    company: 'Acme Corp',
    status: 'Referral',
  },
  {
    id: 9,
    avatar: '/Images/Avatar Circle.svg',
    name: 'Zoe Müller',
    email: 'zoe@rocketlabs.co',
    phone: '(415) 808‑4400',
    country: 'Germany',
    company: 'Rocket Labs',
    status: 'Event',
  },
];



export default MenuLink1;
export { Submenu,AllUserTabledata ,OrderStatusTabledata ,CredentialSubmenuArray, MenuLink2 ,orderTabledata };





