import { toast } from "sonner"

const showToast = (message, variant, actionLabel, actionOnClick) => {
    
    const toastOptions = {}

    if (actionLabel && actionOnClick) {
        toastOptions.action = {
            label: actionLabel,
            onClick: actionOnClick
        }
    }

    switch (variant) {
        case 'success':
            toast.success(message, { className: 'bg-success-10 text-success border border-success rounded-xl select-none', ...toastOptions })
            break
        case 'error':
            toast.error(message, { className: 'bg-danger-10 text-danger border border-danger rounded-xl select-none', ...toastOptions })
            break
        case 'warning':
            toast.warning(message, { className: 'bg-warning-10 text-warning border border-warning rounded-xl select-none', ...toastOptions })
            break
        case 'info':
            toast.info(message, { className: 'bg-accent-10 text-accent border border-accent rounded-xl select-none', ...toastOptions })
            break
        default:
            toast(message, toastOptions)
            break
    }
}

export default showToast
