import axios from "axios"
import App_manage from "../screen/app_manage"





export const getUserInfo= async (token) => {
    console.log(token)
    try {
        const response = await axios.post('https://ambio.vercel.app/api/v1/users/getUserInfo', {
            "token": token
        }); 
        return response.data.phoneNumber; 
      } catch (error) {
        console.error(error, "Error in getUserInfoooooooooooooooooooooo");
        throw error; 
      }
        

}



export const getHistoryLogin = async (token) => {
    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }


    console.log(config, "token historylogin")
    try {
        const response =  await axios.get('https://ambio.vercel.app/api/v1/users/historyLogin', config
        )
        return response.data.historyLogins; 
       
      } catch (error) {
      
      }
        

}


 export const Logout = (token, index, isThisDevice, historyLogins, navigation) => {
    const client = historyLogins.map((e) => {
        return {
            clientID: e.clientID
        }
    })
    console.log(token,"token in Loutouttttttttttttttt")
    client.forEach((item, i) => {

        if (index == item.clientID) {

            item.isLogout = true;

        } else {
            item.isLogout = false
        }
    })

    //http://192.168.86.20:3000/api/v1/users/logout
    axios.delete('https://ambio.vercel.app/api/v1/users/logout', {
        data: client, headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then(async res => await getHistoryLogin(), isThisDevice ? navigation.navigate('auth_login1') : null,)
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