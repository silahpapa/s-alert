import Swal from 'sweetalert2';
import { doPost } from 's-apis'
export const swalSuccess = (message: string,title: string): void => {
    let title_: string = title ?? 'success!';
    Swal.fire(title_, message, 'success');
};

export const swalError = (message: string, title: string): void => {
    let title_: string = title ?? 'Error!';
    Swal.fire(title_, message, 'error');
};

export const showToast = (message: string, toastType?: string,toastPosition?:string, toastTime?:number): void => {
    const toastPosition_:string = toastPosition ?? 'top-end'
    const toastTime_:number = toastTime ?? 3000
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
export const confirmRequest = async (url: string, message: string, title?: string, data?: any): Promise<Swal.SweetAlertResult> => {

    const result = await Swal.fire({
        title: title ?? 'Are you sure?',
        html: message,
        showCancelButton: true,
        confirmButtonColor: '#32c787',
        cancelButtonText: 'No, cancel',
        confirmButtonText: 'Yes, Proceed!',
        reverseButtons: true,
        showLoaderOnConfirm: true,
        preConfirm: async () => {
            try {
                const response = await doPost(url, data);
                return {
                    response: response.data,
                    success: true,
                };
            } catch (error) {
                return {
                    success: false,
                    error: error,
                };
            }
        },
        allowOutsideClick: () => !Swal.isLoading(),
    });

    return result;
}
