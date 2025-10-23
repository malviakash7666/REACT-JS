import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupOff } from "react-icons/tb";
import { MdOutlineFastfood } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";


export const catagories = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmallOutline className="text-green-500 h-[60px] w-[60px]" />,
  },
  {
    id: 2,
    name: "breakfast",
    icon: <MdFreeBreakfast className="text-green-500 h-[60px] w-[60px]" />,
  },
  {
    id: 3,
    name: "soups",
    icon: <TbSoupOff className="text-green-500 h-[60px] w-[60px]" />,
  },
  {
    id: 4,
    name: "pasta",
    icon: <MdOutlineFastfood  className="text-green-500 h-[60px] w-[60px]"/>,
  },
  {
    id: 5,
    name: "main_course",
    icon: <MdOutlineFoodBank  className="text-green-500 h-[60px] w-[60px]"/>,
  },
  {
    id: 6,
    name: "pizza",
    icon: <GiFullPizza className="text-green-500 h-[60px] w-[60px]"/>,
  },
  {
    id: 6,
    name: "burger",
    icon: <GiHamburger className="text-green-500 h-[60px] w-[60px]"/>,
  },
];
