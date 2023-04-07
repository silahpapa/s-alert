import Swal from 'sweetalert2';
import { doPost } from 's-apis'
const swalSuccess = (message: string,title: string): void => {
    let title_: string = title ?? 'success!';
    Swal.fire(title_, message, 'success');
};

const swalError = (message: string, title: string): void => {
    let title_: string = title ?? 'Error!';
    Swal.fire(title_, message, 'error');
};

const showToast = (message: string, toastType?: string,toastPosition?:string, toastTime?:number): void => {
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
const confirmRequest = async (url: string, message: string, title?: string, data?: any): Promise<Swal.SweetAlertResult> => {

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

const showAutoclose = (title?: string, content?: string, timer?: number ): void => {
    const title_: string = title ?? 'Auto close Alert'
    const timer_ = timer ?? 3000
    const content_: string = content ?? 'I will close in <b></b> milliseconds.'
    let timerInterval
    Swal.fire({
        title: title_,
        html: content_,
        timer:timer_,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = b ? Swal.getTimerLeft() : ''
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}


export default { showAutoclose, confirmRequest, showToast, swalError, swalSuccess}
