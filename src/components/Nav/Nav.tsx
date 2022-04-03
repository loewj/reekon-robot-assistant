import {FaRobot, FaClock, FaChartLine, FaUser} from "react-icons/fa";
import './Nav.css';
import {NavItem} from "./NavItem";
import {toast} from "react-toastify";

const showToast = () => {
    toast.warn('Page not yet implemented', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

const navItems = [
    { icon: <FaRobot/>, label: "Fleet", color: "#F1B434", onClick: () => null },
    { icon: <FaClock/>, label: "Jobs", color: "#FFFFFF", onClick: showToast },
    { icon: <FaChartLine/>, label: "Analytics", color: "#FFFFFF", onClick: showToast },
    { icon: <FaUser/>, label: "Profile", color: "#FFFFFF", onClick: showToast },
]

export const Nav = () => (
    <div className="nav-wrapper">
        { navItems.map(i => <NavItem
                key={i.label}
                icon={i.icon}
                label={i.label}
                color={i.color}
                onClick={i.onClick}
            />
        )}
    </div>
)
