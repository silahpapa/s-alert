import Swal from 'sweetalert2';

export const swalSuccess = (message: string,title: string): void => {
    let title_: string = title ?? 'success!';
    Swal.fire(title_, message, 'success');
};

export const swalError = (message: string, title: string): void => {
    let title_: string = title ?? 'Error!';
    Swal.fire(title_, message, 'error');
};

export const showToast = (message: string, toastType: string,toastPosition:string, toastTime:number): void => {
    const toastPosition_ = toastPosition ?? 'top-end'
    const toastTime_ = toastTime ?? 'top-end'
    // @ts-ignore
    const Toast = Swal.mixin({
        toast: true,
        position: toastPosition_,
        timer: toastTime_,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    let type_: string = toastType ?? 'success';
    // @ts-ignore
    Toast.fire({
        icon: toastType,
        title: message
    })
}
