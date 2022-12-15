import { 
    FaArtstation,
    FaCartPlus,
    FaUsers,
    FaShopify,
    FaSimCard,
    FaBtc,
    FaShirtsinbulk,
    FaClipboardList
} from "react-icons/fa";

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'

// Sidebar data...

export const SidebarData = [
    {
        icon: FaArtstation,
        heading: "Dashboard"
    },
    {
        icon: FaCartPlus,
        heading: "Orders"
    },
    {
        icon: FaUsers,
        heading: "Customers"
    },
    {
        icon: FaShopify,
        heading: "Products"
    },
    {
        icon: FaSimCard,
        heading: "Analytics"
    }
];

// Card  Data.......
export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround: "rgb(160 87 200)",
            boxShadow: "0px 10px 20px 0px #f3c6f1"
        },
        barValue: 70,
        value: "25,970",
        png: FaBtc,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100]
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            backGround: "rgb(100 226 100 / 81%)",
            boxShadow: "rgb(207 255 213) 0px 10px 20px 0px"
        },
        barValue: 80,
        value: "25,970",
        png: FaShirtsinbulk,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40]
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            backGround: "rgb(241 221 83)",
            boxShadow: "rgb(233 229 134) 0px 10px 20px 0px"
        },
        barValue: 60,
        value: "25,970",
        png: FaClipboardList,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20]
            },
        ],
    }
]

//Recent Update Card  Data.......
export const UpdatesData = [
    {
        img: img1,
        name: 'Andru Thomas',
        noti: 'has resived samsung smart watch charging battery',
        time: '25 seconds ago'
    },
    {
        img: img2,
        name: 'James Bond',
        noti: 'has resived apple smart watch 2500mh battery',
        time: '30 seconds ago'
    },
    {
        img: img3,
        name: 'Trony jr',
        noti: 'has resived samsung smart watch 2500mh battery',
        time: '2 hours ago'
    }
]