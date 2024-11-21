export const checkValidData = (name, email, password) => {
    const isNameValid = /^[a-zA-Z\s]{2,50}$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

if(!isNameValid) return "Name must only contain letters and spaces, and be between 2 and 50 characters long.";
if(!isEmailValid) return "Please enter a valid email address. Example: user@example.com";
if(!isPasswordValid) return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &).";

return null;

}