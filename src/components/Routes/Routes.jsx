import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { ROUTES } from "../../utils/routes";
import { SingleProducts } from "../Products/SingleProducts";
import { Profile } from "../Profile/Profile";
import { SingleCategory } from "../Categories/SingleCategory";
import { Cart } from "../Cart/Cart";
import { Sidebar } from "../Sidebar/Siderbar";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={ROUTES.PRODUCT} element={<SingleProducts />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.CATEGORIES} element={<SingleCategory />} />
            <Route path={ROUTES.CART} element={<Cart />} />
        </Routes>
    );
}