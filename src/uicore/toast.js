import Toast from "react-native-toast-message"


export const showToast = (messeage) => {
    Toast.show({
        type: "error",
        text1: "Thông báo",
        text2: messeage,
        autoHide: true,
        position: 'top',
        visibilityTime: 2500,
        topOffset: 0,
    })
}

