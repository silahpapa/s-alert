# Sweet-Alert wrapper
This is a small wrapper library for the SweetAlert2 library that provides two simple functions for displaying success and error alerts.

## Installation
You can install this package via npm:

```angular2html
npm install s-alert
```
## Usage
To use this package, import the swalSuccess and swalError functions and call them with a message as an argument. For example:

```
import { swalSuccess, swalError } from 's-alert';

// Show a success alert
swalSuccess('The operation was successful.');

// Show an error alert
swalError('An error occurred. Please try again later.');

```
By default, the swalSuccess function displays a success alert with the message "Success!" and the swalError function displays an error alert with the message "Error!". You can customize these messages by passing a second argument to the function:

```
import { swalSuccess, swalError } from 's-alert';

// Show a success alert with a custom message
swalSuccess('The operation was successful.', 'Great job!');

// Show an error alert with a custom message
swalError('An error occurred. Please try again later.', 'Oops!');

```
## Show Toast
first import the showToast function:
```angular2html
import { showToast } from 's-alert';
```
Then, call the function with the message you want to display in the toast:

```
showToast('Hello, world!');
```
By default, the toast will be a success message that appears at the top-right corner of the screen and disappears after 3 seconds. You can customize these options by passing in additional parameters to the showToast function:

```
showToast('Something went wrong!', 'error', 'bottom-start', 5000);
```

The second parameter is the type of the toast, which can be 'warning', 'error', or 'success' (default is 'success'). The third parameter is the position of the toast, which can be 'top-start', 'top-end', 'bottom-start', 'bottom-end', or 'center' (default is 'top-end'). The fourth parameter is the time in milliseconds for the toast to disappear (default is 3000).






