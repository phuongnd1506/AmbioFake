import Toast from "react-native-toast-message"


export const showToast = (phone, messeage) => {
    Toast.show({
        type: "error",
        text1: "Thông báo",
        text2: `${phone} ${messeage}`,
        autoHide: true,
        position: 'top',
        visibilityTime: 2500,
        topOffset: 0,
    })
}

