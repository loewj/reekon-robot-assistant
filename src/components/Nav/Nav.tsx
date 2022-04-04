import {FaChartLine, FaClock, FaRobot, FaUser} from "react-icons/fa";
import './Nav.css';
import {NavItem} from "./NavItem";
import {showToast, ToastSeverity} from "../../utils/showToast";

const showWarning = () => {
    showToast("Page not implemented", ToastSeverity.WARN);
}

const navItems = [
    { icon: <FaRobot/>, label: "Fleet", color: "#F1B434", onClick: () => null },
    { icon: <FaClock/>, label: "Jobs", color: "#FFFFFF", onClick: showWarning },
    { icon: <FaChartLine/>, label: "Analytics", color: "#FFFFFF", onClick: showWarning },
    { icon: <FaUser/>, label: "Profile", color: "#FFFFFF", onClick: showWarning },
]

export const Nav = () => (
    <div className="nav-wrapper" data-testid='nav'>
        {navItems.map(i => <NavItem key={i.label} icon={i.icon} label={i.label} color={i.color} onClick={i.onClick}/>)}
    </div>
)
