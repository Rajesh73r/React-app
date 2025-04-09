import ColorFlipperWithStore from "./components/color-flipper-with-store/ColorFlipperWithStore";
import ColorFlipper from "./components/color-flipper/ColorFlipper";

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
    }
]

export default routes;