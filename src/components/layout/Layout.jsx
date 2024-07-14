import s from "./layout.module.css";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
    return (
        <div className={s.layout}>
            <Header />
            <div className={s.content}>{children}</div>
            <Footer />
        </div>
    );
};
