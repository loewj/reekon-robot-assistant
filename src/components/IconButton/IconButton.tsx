import {ReactNode} from "react";
import "./IconButton.css"

type IconButtonProps = {
    icon: ReactNode;
    children: ReactNode
    color?: string;
    onClick?: () => void
}

export const IconButton = ({ icon, color, children, onClick }: IconButtonProps) => (
    <div onClick={onClick} className="icon-btn" style={{ color: color}}>
        {icon}
        {children}
    </div>
)
