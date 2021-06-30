export const userLogin = content => {
    return {
        type: "USER_LOGIN",
        payload: {
            username: content.username,
            password:content.password
        }
    }
};