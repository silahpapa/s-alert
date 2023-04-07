import Swal from 'sweetalert2';

export const swalSuccess = (message: string): void => {
    Swal.fire('Success!', message, 'success');
};

export const swalError = (message: string): void => {
    Swal.fire('Error!', message, 'error');
};
