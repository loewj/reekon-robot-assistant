import "./Loading.css"
import {AiOutlineLoading} from "react-icons/ai";
import {animated, useSpring, config} from "react-spring";

export const Loading = () => {

    const style = useSpring({
        loop: true,
        to: { transform: 'rotate(360deg)' },
        from: { transform: 'rotate(0deg)' },
        config: config.slow
    });

    return (
        <animated.div className="loading-wrapper" style={style}>
            <AiOutlineLoading/>
        </animated.div>
    );

}
