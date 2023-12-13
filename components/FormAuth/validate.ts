export const PasswordValidate = {
    required: 'Password is required',
    pattern: {
        value: /^[a-zA-Z0-9!@#$%^&*()_+<>?,.`~*/\\|]+$/,
        message: 'Password can only contain Latin letters and numbers',
    },
    minLength: {
        value: 6,
        message: 'Password must be at least 6 characters long',
    },
    maxLength: {
        value: 40,
        message: 'Password must be at most 40 characters long',
    },
};

export const EmailValidate = {
    required: 'Email is required',
    pattern: {
        value: /^[\w.-]+@[\w.-]+\.\w+$/,
        message: 'Invalid email address',
    },
};