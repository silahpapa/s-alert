# Sweet-Alert wrapper
This is a small wrapper library for the SweetAlert2 library that provides two simple functions for displaying success and error alerts.

## Installation
You can install this package via npm:

```angular2html
npm install sweetalert-wrapper
```
## Usage
To use this package, import the swalSuccess and swalError functions and call them with a message as an argument. For example:

```
import { swalSuccess, swalError } from 'sweetalert-wrapper';

// Show a success alert
swalSuccess('The operation was successful.');

// Show an error alert
swalError('An error occurred. Please try again later.');

```
By default, the swalSuccess function displays a success alert with the message "Success!" and the swalError function displays an error alert with the message "Error!". You can customize these messages by passing a second argument to the function:

```
import { swalSuccess, swalError } from 'sweetalert-wrapper';

// Show a success alert with a custom message
swalSuccess('The operation was successful.', 'Great job!');

// Show an error alert with a custom message
swalError('An error occurred. Please try again later.', 'Oops!');

```




