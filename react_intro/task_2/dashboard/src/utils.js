// Create a function 'getFullYear' that returns the current year
// Create a funcation 'getFooterCopy' that returns a string based on the following logic:
// If the argument 'isIndex' is true, return 'Holberton School'
// If the argument 'isIndex' is false, return 'Holberton School main dashboard'


function getFullYear() {
    return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton School';
    } else {
        return 'Holberton School main dashboard';
    }
}

export { getFullYear, getFooterCopy };
