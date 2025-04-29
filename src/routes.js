
import BrandWebpage from "./components/Brand-webpage/Brand-web";
import ColorFlipperWithStore from "./components/color-flipper-with-store/ColorFlipperWithStore";
import ColorFlipper from "./components/color-flipper/ColorFlipper";
import InputUser from "./components/Input-user/InputUser";
import StopWatch from "./components/Stop-Watch/StopWatch";
import TimerCount from "./components/Timer-Count/TimerCount";
import TodoList from "./components/Todo-list/Todo-list";

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
    },
    {
        title:"BrandWebpage",
        path:"/BrandWebpage",
        Element: BrandWebpage
    },
    {
        title: "TodoList",
        path:"/TodoList",
        Element: TodoList
    }
]

export default routes;