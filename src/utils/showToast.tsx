import {toast, Flip, ToastOptions} from "react-toastify";

export enum ToastSeverity {
    WARN,
    SUCCESS,
    INFO,
    ERROR
}

export const showToast = (msg: string, severity: ToastSeverity) => {

    const options = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        transition: Flip,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };

    switch (severity) {
        case ToastSeverity.WARN:
            toast.warn(msg, options as ToastOptions);
            break;
        case ToastSeverity.SUCCESS:
            toast.success(msg, options as ToastOptions);
            break;
        case ToastSeverity.INFO:
            toast.info(msg, options as ToastOptions);
            break;
        case ToastSeverity.ERROR:
            toast.error(msg, options as ToastOptions);
            break;
        default: break;
    }

}
