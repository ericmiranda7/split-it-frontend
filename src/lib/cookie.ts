export function getCookie(name: string) {
    // Add the equals sign to the name
    let nameEQ = name + "=";
    // Split document.cookie at semicolons
    let ca = document.cookie.split(';');
    // Loop through all cookie values
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        // Remove whitespace at the beginning of the c string
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        // Check if this cookie's name matches the requested name
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    // Return null if the cookie was not found
    return null;
}