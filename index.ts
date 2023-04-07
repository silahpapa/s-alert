import Swal from 'sweetalert2';

export const swalSuccess = (message: string,title: string): void => {
    let title_ = title ?? 'success!';
    Swal.fire(title_, message, 'success');
};

export const swalError = (message: string, title: string): void => {
    let title_ = title ?? 'Error!';
    Swal.fire(title_, message, 'error');
};
