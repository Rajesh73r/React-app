import ColorFlipperWithStore from "./components/color-flipper-with-store/ColorFlipperWithStore";
import ColorFlipper from "./components/color-flipper/ColorFlipper";
import InputUser from "./components/input-user/InputUser";
import StopWatch from "./components/Stop-Watch/StopWatch";
import TimerCount from "./components/Timer-Count/TimerCount";

const routes = [
    {
        title: "Color Flipper",
        path: "/color-flipper",
        Element: ColorFlipper
    },
    {
        title: "ColorFlipperWithStore",
        path: "/ColorFlipperWithStore",
        Element: ColorFlipperWithStore
    },
    {
        title:"Stop-Watch",
        path:"/Stop-Watch",
        Element: StopWatch
    },
    {
        title:"Timer-Count",
        path:"/Timer-Count",
        Element: TimerCount
    },
    {
        title:"InputUser",
        path:"/InputUser",
        Element: InputUser
    }
]

export default routes;