
/**
 * Hàm này dùng validate TextInput phone
 * @param {number} value
 * @returns {string}
 */
export function validatePhone(value) {

    if (!value) {
        return "Vui lòng nhập số điện thoại"

    }

    let regex = new RegExp(/^([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8,13})$/)
    if (!regex.test(value)) {

        return "Số điện thoại không hợp lệ"

    }
    return ""

};




/**
 * Hàm này dùng validate TextInput tạo mật khẩu
 * @param {string} value
 * @returns {string}
 */
export function validateCreatePassword(value) {
    if (!value) {
        return "Vui lòng nhập mật khẩu"
    }


    let regex = new RegExp(/^(?=.*[a-zA-Z0-9]).{6,15}$/)
    let regexx = new RegExp(/^(?=.*[0-9]).{6,}$/)
    let regexxx = new RegExp(/^(?=.*[a-zA-Z]).{6,}$/)
    if (!regex.test(value)) {

        return "Mật khẩu tối thiểu 6 kí tự và tối đa 15 kí tự"
    }

    if (!regexx.test(value)) {

        return "Mật khẩu phải có kí tự số"
    }

    if (!regexxx.test(value)) {

        return "Mật khẩu phải có kí tự chữ"
    }

    return ""

};



/**
 * Hàm này dùng validate TextInput mật khẩu đăng nhập
 * @param {string} value
 * @returns {string}
 */
export function validatePassword(value) {
    if (!value) {
        return "Vui lòng nhập mật khẩu"
    }
    return ""

};



/**
 * Hàm này dùng validate TextInput mã code
 * @param {number} value
 * @returns {string}
 */
export function validateCode(value) {
    if (!value) {
        return "Vui lòng nhập mã xác nhận"
    }

    return ""

};
