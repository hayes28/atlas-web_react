// Create a function 'getFullYear' that returns the current year
// Create a funcation 'getFooterCopy' that returns a string based on the following logic:
// If the argument 'isIndex' is true, return 'Holberton School'
// If the argument 'isIndex' is false, return 'Holberton School main dashboard'


function getFullYear() {
    return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Atlas School ';
    } else {
        return 'Atlas School main dashboard';
    }
}

// task 3 - Create a function 'getLatestNotification' that returns a string:
// '<strong>Urgent requirement</strong> - complete by EOD'

function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}

export { getFullYear, getFooterCopy, getLatestNotification };
