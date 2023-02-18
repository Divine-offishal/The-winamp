import { home } from "ionicons/icons"
import { earth } from "ionicons/icons"
import { radio } from "ionicons/icons"
import { mic } from "ionicons/icons"
import { checkmarkCircle } from "ionicons/icons"
import { statsChart } from "ionicons/icons"

const Sidebar1Data = [
    {
        path: "/",
        icons: home,
        name: "Home",
        id: 1
    },
    {
        path: "/Discover",
        icons: earth,
        name: "Discover",
        id: 2
    },
    {
        path: "/Radio",
        icons: radio,
        name: "Radio",
        id: 3
    },
    {
        path: "/Podcasts",
        icons: mic,
        name: "Podcasts",
        id: 4
    },
    {
        path: "/Artists",
        icons: checkmarkCircle,
        name: "Artists",
        id: 5
    },
    {
        path: "/Trending",
        icons: statsChart,
        name: "Trending",
        id: 6
    },
]

export default Sidebar1Data