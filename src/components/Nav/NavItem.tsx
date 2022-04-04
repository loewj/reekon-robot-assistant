import {useSpring, animated} from "react-spring";
import {ReactChild} from "react";
import {IconButton} from "../IconButton/IconButton";

type NavItemProps = {
    icon: ReactChild;
    label: string;
    color?: string;
    onClick: () => void;
}

export const NavItem = ({ icon, label, color, onClick }: NavItemProps) => {

    const [props, set] = useSpring(() => ({ scale: 1 }));

    return (
        <animated.div
            onMouseEnter={() => set({ scale : 1.1 })}
            onMouseLeave={() => set({ scale : 1 })}
            onClick={onClick}
            style={props}
        >
            <IconButton icon={icon} color={color}>
                <span style={{color: color, textAlign: 'center'}}>{label}</span>
            </IconButton>
        </animated.div>
    )
}
