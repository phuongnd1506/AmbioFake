
import { React, useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, FlatList } from "react-native";
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment'; 

function LoginManagement({navigation}) {
  const [history, setHistory] = useState('')
  const [infoUser, setInfoUser] = useState()
  const [historyLogins, setHistoryLogins] = useState([])
  const [token, setToken] = useState("")

 

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('accessToken');
   
      if (value !== null) {
        setToken(value)
      }
    } catch (e) {
    }
  };

  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
   

  const getData1 = async () => {
         
       //http://192.168.86.20:3000/api/v1/users/historyLogin
       axios.get('https://ambio.vercel.app/api/v1/users/historyLogin', config
    )
      .then(res => {
        setInfoUser(res.data.infoUserLogin.phoneNumber)
        setHistoryLogins(res.data.historyLogins)
        console.log(res.data.historyLogins, "HistoryLogins")
      }
      )
      .catch(error => console.log(error,46456456))
  }

  useEffect(() => {
    getData();
  },[]);

  useEffect(() => {
   token && getData1()
  }, [token]);


  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("accessToken");
    } catch (error) {
      console.log("Renove authentication token failed :", error?.message);
    }
  };
  


  
  

   const client = historyLogins.map((e) => {
        return {
          clientID: e.clientID
        }
  })
   
    
 
   const submitTrue= () => {
      client.forEach((item, i) => {
         item.isLogout = true
       
      })
    
      //http://192.168.86.20:3000/api/v1/users/logout
      axios.delete('https://ambio.vercel.app/api/v1/users/logout', {data: client , headers: {
        'Authorization': 'Bearer ' + token
      }})
      .then(res => getData1(), navigation.navigate('Login'), removeToken() )
      .catch(function (error) {
     
        if (error.response) { 
         
          console.log('Server responded with status code:', error.response.status);
          console.log('Response data:', error.response.data);
        } else if (error.request) {
          console.log('No response received:', error.request);
        } else {
          console.log('Error creating request:', error.message);
        }
      });
   }
   


  const submit = (index, isThisDevice) => {
       
    
       client.forEach((item, i)=>{
       
      if (index == item.clientID) {
        
        item.isLogout = true;

      }else{
      item.isLogout = false}
      })
          
        //http://192.168.86.20:3000/api/v1/users/logout
        axios.delete('https://ambio.vercel.app/api/v1/users/logout', {data: client , headers: {
          'Authorization': 'Bearer ' + token
        }})
        .then(res => getData1(), isThisDevice ? navigation.navigate('Login') : null, removeToken() )
        .catch(function (error) {
       
          if (error.response) {
           
            console.log('Server responded with status code:', error.response.status);
            console.log('Response data:', error.response.data);
          } else if (error.request) {
            console.log('No response received:', error.request);
          } else {
            console.log('Error creating request:', error.message);
          }
        });
  }      
 


  const twoOptionAlertHandler = (clientID, isThisDevice, deviceName) => {
    //function to make two option alert
    Alert.alert(
       "Xin chào",
       `Bạn có chắc chắn muốn xóa tài khoản ra khỏi thiết bị ${deviceName} này không?`,
      [
        {
          text: 'Có',
          onPress: () => submit(clientID, isThisDevice)
        },
        {
          text: 'Không',
          onPress: () => console.log('No Pressed'), style: 'cancel'
        },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  };
  const twoOptionAlertHandlerAll = () => {
    //function to make two option alert
    Alert.alert(
       "Xin chào",
       "Bạn có chắc chắn muốn xóa tài khoản ra khỏi tất cả các thiết bị không?",
      [
        {
          text: 'Có',
          onPress: () => submitTrue()
        },
        {
          text: 'Không',
          onPress: () => console.log('No Pressed'), style: 'cancel'
        },
      ],
      {cancelable: false},
      //clicking out side of alert will not cancel
    );
  };

  

  // const DATA = [
  //   {
  //     image: require('../../asset/LoginManage.png'),
  //     name: "Iphone 13",
  //     time: "20 phút trước"
  //   },
  //   {
  //     image: require('../../asset/LoginManage1.png'),
  //     name: "Samsung",
  //     time: "3 tiếng trước"
  //   },
  //   {
  //     image: require('../../asset/LoginManage3.png'),
  //     name: "Samsung",
  //     time: "6 tiếng trước"
  //   },
  //   {
  //     image: require('../../asset/LoginManage4.png'),
  //     name: "Samsung",
  //     time: "15/08/2023"
  //   },
  //   {
  //     image: require('../../asset/LoginManage5.png'),
  //     name: "Samsung",
  //     time: "3 tiếng trước"
  //   },
  //   {
  //     image: require('../../asset/LoginManage6.png'),
  //     name: "Samsung",
  //     time: "3 tiếng trước"
  //   },
  //   {
  //     image: require('../../asset/LoginManage4.png'),
  //     name: "Samsung",
  //     time: "3 tiếng trước"
  //   },
  //   {
  //     image: require('../../asset/LoginManage4.png'),
  //     name: "Samsung",
  //     time: "3 tiếng trước"
  //   },
  //   {
  //     image: require('../../asset/LoginManage4.png'),
  //     name: "Samsung",
  //     time: "3 tiếng trước"
  //   },
  //   {
  //     image: require('../../asset/LoginManage4.png'),
  //     name: "Samsung",
  //     time: "3 tiếng trước"
  //   },
  //   {
  //     image: require('../../asset/LoginManage4.png'),
  //     name: "Samsung",
  //     time: "3 tiếng trước"
  //   },

  // ]


  const [isRefresh, setIsRefresh] = useState(false)


  function addItem() {
    setIsRefresh(true)
    setTimeout(() => { setIsRefresh(false) }, 500)
  }


   

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#00C853', position: 'relative' }} edges={["left", "right", "top"]}>
        <View style={styles.header}>
          <View style={styles.headerImage}>
            <Image source={require('../../asset/TanDCc.jpg')} style={{ height: 80, width: 80, borderRadius: 40, borderColor: '#339900', borderWidth: 3 }}></Image>
          </View>
          <View style={styles.textInfo}>
            <Text style={styles.textHeader}>Chào, deviceName1</Text>
            <Text style={styles.textHeader}>{infoUser}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <FlatList data={historyLogins}
            refreshing={isRefresh}
            onRefresh={addItem}
            renderItem={(item, index) =>

               
              <View style={styles.items}>
                <View style={styles.itemLeft}>
                  <Image source={require('../../asset/LoginManage3.png')} style={{ height: 40, width: 40, borderRadius: 20, borderColor: '#339900', borderWidth: 3 }}>

                  </Image>
                  <View style={{ marginLeft: 8 }}>
                    <Text style={styles.textItemLeft}>{item.item.deviceName}</Text>
                    <Text style={styles.textItemLeft}>{item.item.accessLastTime}</Text>
                  </View>
                  <Text style={{marginLeft: 8, marginBottom: 20 , color: '#27a4f2'}}>{item.item.isThisDevice ? 'máy này' : null}</Text>
                </View>
              
                  <TouchableOpacity style={styles.itemRight}>
                    <Text style={styles.textItemRight}  onPress={() => {twoOptionAlertHandler(item.item.clientID, item.item.isThisDevice, item.item.deviceName)}}>Đăng xuất</Text>
                  </TouchableOpacity>
              
              </View>
            }
          />

        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.buttonFooter}>
            <Text style={styles.textFooter} onPress={() => {twoOptionAlertHandlerAll()} }>ĐĂNG XUẤT TẤT CẢ</Text>
          </TouchableOpacity>
        </View>


      </SafeAreaView>
      <SafeAreaView edges={["bottom"]} style={{ flex: 0, backgroundColor: "#FFF" }} />

    </>
  )



}



const styles = StyleSheet.create({
  container: {


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



export default LoginManagement;