import {useSpring, animated} from "react-spring";
import {ReactChild} from "react";

type NavItemProps = {
    icon: ReactChild;
    label: string;
    color: string;
    onClick: () => void;
}

export const NavItem = ({ icon, label, color, onClick }: NavItemProps) => {

    const [props, set] = useSpring(() => ({ scale: 1 }));

    return (
        <animated.button
            className="icon-btn"
            onMouseEnter={() => set({ scale : 1.1 })}
            onMouseLeave={() => set({ scale : 1 })}
            onClick={onClick}
            style={props}
        >
            <div style={{fontSize: "1.5rem", color: color}}>{icon}</div>
            <span style={{color: color}}>{label}</span>
        </animated.button>
    )
}
