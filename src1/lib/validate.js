



export function ValidatePhone(value) {

    if (!value) {
        return "Vui lòng nhập số điện thoại"

    } else {
        if (value) {
            let regex = new RegExp(/^([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8,13})$/)
            if (!regex.test(value)) {

                return "Số điện thoại không hợp lệ"

            } else {
                return ""


            }




        }
    }
}


export function ValidateCreatePassword(value) {
    if (!value) {
        return "Vui lòng nhập mật khẩu"
    }
    else {
        if (value) {
            let regex = new RegExp(/^(?=.*[a-zA-Z0-9]).{6,15}$/)
            let regexx = new RegExp(/^(?=.*[0-9]).{6,}$/)
            let regexxx = new RegExp(/^(?=.*[a-zA-Z]).{6,}$/)
            if (!regex.test(value)) {

                return "Mật khẩu tối thiểu 6 kí tự và tối đa 15 kí tự"
            }
            else {
                if (!regexx.test(value)) {

                    return "Mật khẩu phải có kí tự số"
                }
                else {
                    if (!regexxx.test(value)) {

                        return "Mật khẩu phải có kí tự chữ"
                    }
                    else {
                        return ""
                    }
                }
            }
        }
    }
}

export function ValidatePassword(value) {
    if (!value) {
        return "Vui lòng nhập mật khẩu"
    }
    else {
        if (value) {

            return ""


        }

    }
}


export function ValidateCode(value) {
    if (!value) {
        return "Vui lòng nhập mã xác nhận"
    }
    else {
        if (value) {

            return ""


        }

    }
}
