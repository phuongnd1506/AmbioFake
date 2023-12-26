
import { React, useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert, AppState } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, FlatList } from "react-native";
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import { getUserInfo } from "../util/API.js";
import { getHistoryLogin } from "../util/API.js";
import { Logout } from "../util/API.js";
import { handleLogOut, getDataHistorylogin, handleLogOutAll, onRefresh, getdataHistoryloginOnreFresh, getDataUserInfo } from "../util/util.js";
import { numberPhone } from "../../Loading/util/util.js";
import { numberPhoneLogin } from "../../auth/util/utils.js";

  let token= "";
  export const getToken = async() => { 
    value = await AsyncStorage.getItem('accessToken'); 
    return token = value;
}
 

  
function App_manage({ navigation }) {

    const [historyLogins, setHistoryLogins] = useState([])
    const [isRefresh, setIsRefresh] = useState(false)

 
    useEffect(() => {
        getDataHistorylogin(setHistoryLogins, setIsRefresh)
    }, [])

    

    const onRefreshh = (setHistoryLogins, setIsRefresh) => {
        getdataHistoryloginOnreFresh(setHistoryLogins, setIsRefresh)
    }


    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
          
                onRefreshh(setHistoryLogins, setIsRefresh)
          
        });

        return () => {
            subscription.remove();
        };
    }, []);




    //logout

    // //AppState

    // const appState = useRef(AppState.currentState);
    // const [appStateVisible, setAppStateVisible] = useState(appState.current);

    // useEffect(() => {
    //     const subscription = AppState.addEventListener('change', nextAppState => {
    //         if (
    //             appState.current.match(/inactive|background/) &&
    //             nextAppState === 'hghghgh'
    //         ) {
    //             console.log('App has come to the foreground!');
    //         }

    //         updateData1(), updateData2()

    //     });

    //     return () => {
    //         subscription.remove();
    //     };
    // }, []);




    // const updateData1 = async () => {
    //     const valuee = await AsyncStorage.getItem('accessToken');

    //     //http://192.168.86.20:3000/api/v1/users/historyLogin
    //     try {
    //         await axios.get('https://ambio.vercel.app/api/v1/users/historyLogin', {
    //             headers: {
    //                 'Authorization': 'Bearer ' + valuee
    //             }
    //         }
    //         )
    //             .then(res => {

    //                 setHistoryLogins(res.data.historyLogins)

    //             }
    //             )
    //             .catch(error => {

    //                 console.log(error.response.data)
    //             })

    //     }

    //     catch (e) {
    //         console.log("failed")
    //     }
    // }

    // const updateData2 = async () => {
    //     const valuee = await AsyncStorage.getItem('accessToken');

    //     //http://192.168.86.20:3000/api/v1/users/historyLogin
    //     try {
    //         axios.post('https://ambio.vercel.app/api/v1/users/getUserInfo', {
    //             "token": valuee
    //         })
    //             .then(res => {
    //                 setInfoUser(res.data.phoneNumber)

    //             })
    //             .catch(error => navigation.navigate('Auth_login1'))
    //         setIsRefresh(true)
    //         setTimeout(() => { setIsRefresh(false) }, 1200)
    //     }



    //     catch (e) {
    //         console.log("failed")
    //     }
    // }

    // const getData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('accessToken');
    //         if (value !== null) {
    //             setToken(value)


    //         }
    //     } catch (e) {
    //     }
    // };
    // useEffect(() => {
    //     getData();
    // });

    // let config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + token
    //     }
    // }

    // const getData2 = async () => {
    //     await axios.post('https://ambio.vercel.app/api/v1/users/getUserInfo', {
    //         "token": token
    //     })
    //         .then(res => {
    //             setInfoUser(res.data.phoneNumber)
    //         })
    //         .catch(error => console.log(error.response.data))
    // }

    // const getData1 = async () => {

    //     //http://192.168.86.20:3000/api/v1/users/historyLogin
    //     await axios.get('https://ambio.vercel.app/api/v1/users/historyLogin', config
    //     )
    //         .then(res => {

    //             setHistoryLogins(res.data.historyLogins)
    //             console.log(res.data.historyLogins, "HistoryLogins")
    //         }
    //         )
    //         .catch(error => {
    //             console.log(error.response.data)
    //         })
    //     setIsRefresh(true)
    //     setTimeout(() => { setIsRefresh(false) }, 1200)
    // }



    // useEffect(() => {
    //     token && getData2();
    // }, [token]);

    // useEffect(() => {
    //     token && getData1();
    // }, [token])

    // const client = historyLogins.map((e) => {
    //     return {
    //         clientID: e.clientID
    //     }
    // })



    // const submitTrue = () => {
    //     client.forEach((item, i) => {
    //         item.isLogout = true

    //     })

    //     //http://192.168.86.20:3000/api/v1/users/logout
    //     axios.delete('https://ambio.vercel.app/api/v1/users/logout', {
    //         data: client, headers: {
    //             'Authorization': 'Bearer ' + token
    //         }
    //     })
    //         .then(async res => await navigation.navigate('Auth_login1'),)
    //         .catch(function (error) {

    //             if (error.response) {

    //                 console.log('Server responded with status code:', error.response.status);
    //                 console.log('Response data:', error.response.data);
    //             } else if (error.request) {
    //                 console.log('No response received:', error.request);
    //             } else {
    //                 console.log('Error creating request:', error.message);
    //             }
    //         });
    // }



    // const submit = (index, isThisDevice) => {


    //     client.forEach((item, i) => {

    //         if (index == item.clientID) {

    //             item.isLogout = true;

    //         } else {
    //             item.isLogout = false
    //         }
    //     })

    //     //http://192.168.86.20:3000/api/v1/users/logout
    //     axios.delete('https://ambio.vercel.app/api/v1/users/logout', {
    //         data: client, headers: {
    //             'Authorization': 'Bearer ' + token
    //         }
    //     })
    //         .then(async res => await getData1(), isThisDevice ? navigation.navigate('Auth_login1') : null,)
    //         .catch(function (error) {

    //             if (error.response) {

    //                 console.log('Server responded with status code:', error.response.status);
    //                 console.log('Response data:', error.response.data);
    //             } else if (error.request) {
    //                 console.log('No response received:', error.request);
    //             } else {
    //                 console.log('Error creating request:', error.message);
    //             }
    //         });
    // }



    // const twoOptionAlertHandler = (clientID, isThisDevice, deviceName) => {
    //     //function to make two option alert
    //     Alert.alert(
    //         "Xin chào",
    //         `Bạn có chắc chắn muốn xóa tài khoản ra khỏi thiết bị ${deviceName} này không?`,
    //         [
    //             {
    //                 text: 'Có',
    //                 onPress: () => submit(clientID, isThisDevice)
    //             },
    //             {
    //                 text: 'Không',
    //                 onPress: () => console.log('No Pressed'), style: 'cancel'
    //             },
    //         ],
    //         { cancelable: false },
    //         //clicking out side of alert will not cancel
    //     );
    // };
    // const twoOptionAlertHandlerAll = () => {
    //     //function to make two option alert
    //     Alert.alert(
    //         "Xin chào",
    //         "Bạn có chắc chắn muốn xóa tài khoản ra khỏi tất cả các thiết bị không?",
    //         [
    //             {
    //                 text: 'Có',
    //                 onPress: () => submitTrue()
    //             },
    //             {
    //                 text: 'Không',
    //                 onPress: () => console.log('No Pressed'), style: 'cancel'
    //             },
    //         ],
    //         { cancelable: false },
    //         //clicking out side of alert will not cancel
    //     );
    // };






    // const [isRefresh, setIsRefresh] = useState(false)


    // const onrefreshh = async () => {
    //     const valueee = await AsyncStorage.getItem('accessToken');
    //     axios.post('https://ambio.vercel.app/api/v1/users/getUserInfo', {
    //         "token": valueee
    //     })
    //         .then(res => {
    //             setInfoUser(res.data.phoneNumber)

    //         })
    //         .catch(error => navigation.navigate('Auth_login1'))
    //     setIsRefresh(true)
    //     setTimeout(() => { setIsRefresh(false) }, 1200)
    // }

    // const onrefreshhh = () => {
    //     onrefreshh()
    //     getData1()
    // }



    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#00C853', position: 'relative' }} edges={["left", "right", "top"]}>
                <View style={styles.header}>
                    <View style={styles.headerImage}>
                        <Image source={require('../../../asset/TanDCc.jpg')} style={{ height: 80, width: 80, borderRadius: 40, borderColor: '#339900', borderWidth: 3 }}></Image>
                    </View>
                    <View style={styles.textInfo}>
                        <Text style={styles.textHeader}>Chào, deviceName1</Text>
                        <Text style={styles.textHeader}>{numberPhone}{numberPhoneLogin}</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <FlatList data={historyLogins}
                        refreshing={isRefresh}
                        onRefresh={() => onRefreshh(setHistoryLogins, setIsRefresh)}
                        renderItem={(item, index) =>


                            <View style={styles.items}>
                                <View style={styles.itemLeft}>
                                    <Image source={require('../../../asset/LoginManage3.png')} style={{ height: 40, width: 40, borderRadius: 20, borderColor: '#339900', borderWidth: 3 }}>

                                    </Image>
                                    <View style={{ marginLeft: 8 }}>
                                        <Text style={styles.textItemLeft}>{item.item.deviceName}</Text>
                                        <Text style={styles.textItemLeft}>{item.item.accessLastTime}</Text>
                                    </View>
                                    <Text style={{ marginLeft: 8, marginBottom: 20, color: '#27a4f2' }}>{item.item.isThisDevice ? 'máy này' : null}</Text>
                                </View>

                                <TouchableOpacity style={styles.itemRight}>
                                    <Text style={styles.textItemRight} onPress={() => { handleLogOut(item.item.clientID, item.item.isThisDevice, historyLogins, navigation, setHistoryLogins, setIsRefresh) }}>Đăng xuất</Text>
                                </TouchableOpacity>

                            </View>
                        }
                    />

                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.buttonFooter}>
                        <Text style={styles.textFooter} onPress={() => handleLogOutAll(historyLogins, navigation, setHistoryLogins)}>ĐĂNG XUẤT TẤT CẢ</Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
            <SafeAreaView edges={["bottom"]} style={{ flex: 0, backgroundColor: "#FFF" }} />
        </View>

    )



}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00C853',
        justifyContent: 'flex-end',

    },

    header: {
        height: 120,
        backgroundColor: '#00C853',
        marginLeft: 20,
        flexDirection: 'row',

        alignItems: 'center'
    },

    textInfo: {
        marginLeft: 20
    },

    textHeader: {
        color: '#FFF',
        fontSize: 20
    },

    body: {
        flex: 1,
        backgroundColor: '#BBBBBB',

    },

    items: {
        height: 80,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 12

    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    textItemLeft: {
        color: '#000',
        fontWeight: '400'
    },
    textItemRight: {
        color: '#FFF',
        fontWeight: '400'
    },

    itemRight: {
        height: 28,
        width: 80,
        backgroundColor: '#00C853',
        borderRadius: 4,

        borderColor: '#909090',
        justifyContent: 'center',
        alignItems: 'center'
    },

    footer: {
        height: 80,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: '#999',
        borderTopWidth: 1

    },
    buttonFooter: {
        height: 42,
        width: 174,
        backgroundColor: '#00C853',
        borderRadius: 6,

        justifyContent: 'center',
        alignItems: 'center'
    },
    textFooter: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16
    }



})



export default App_manage;