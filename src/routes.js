import ColorFlipperWithStore from "./components/color-flipper-with-store/ColorFlipperWithStore";
import ColorFlipper from "./components/color-flipper/ColorFlipper";
import StopWatch from "./components/Stop-Watch/StopWatch";

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
    }
]

export default routes;