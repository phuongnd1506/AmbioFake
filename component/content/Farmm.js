import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import SvgFarmHeader from '../../asset/SVG/SvgFarmHeader';
import SvgFarmDownArrow from "../../asset/SVG/SvgFarmDownArrow";


import SvgFarmSetting from "../../asset/SVG/SvgFarmSetting";

import SvgFarmHomeFooter from "../../asset/SVG/SvgFarmHomeFootet";
import SvgFarmWarehouseFooter from "../../asset/SVG/SvgFarmWarehouseFooter";
import SvgFarmWorkFooter from "../../asset/SVG/SvgFarmWorkFooter";
import SvgFarmUserFooter from "../../asset/SVG/SvgFarmUserFooter";




function Farmm(){


    return(
         <View style= {styles.container}>
             <View style= {styles.header}>
                 
                    <TouchableOpacity style={styles.headerLeft}> 
                       <Text style={styles.textHeaderLeft}>Trang trại</Text>
                       <SvgFarmDownArrow />
                    </TouchableOpacity>
                    <SvgFarmSetting></SvgFarmSetting>
                    
             </View>
             <View style= {styles.body}>
                 <Text>Không có ao nào!</Text>
                 <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.textButtonAdd}>Thêm ao</Text>
                 </TouchableOpacity>
             </View>
             <View style= {styles.footer}>
              <TouchableOpacity style= {styles.optionFooter} >
                <SvgFarmHomeFooter></SvgFarmHomeFooter>
                <Text style={styles.textFooter}>Trang trại</Text>
              </TouchableOpacity>
              <TouchableOpacity style= {styles.optionFooter}>
                <SvgFarmWarehouseFooter></SvgFarmWarehouseFooter>
                <Text style={styles.textFooter}>Kho</Text>
              </TouchableOpacity>
              <TouchableOpacity style= {styles.optionFooter}>
                <SvgFarmWorkFooter></SvgFarmWorkFooter>
                <Text style={styles.textFooter}>Công việc</Text>
              </TouchableOpacity>
              <TouchableOpacity style= {styles.optionFooter}>
                <SvgFarmUserFooter></SvgFarmUserFooter>
                <Text style={styles.textFooter}>Cá nhân</Text>
              </TouchableOpacity>
             
             </View>
         </View>




    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',  
      position: 'relative'
    },
    header: {
        height: 54,
        
        
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 26,
        borderBottomRightRadius: 26,
        paddingHorizontal: 20
    },
    headerLeft: {
        height: 34,
        width: 110,
        backgroundColor: '#008F33',
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8
    },
    textHeaderLeft: {
        color: '#FFF',
        fontSize: 16
    },

    body: {
      flex: 1,
      backgroundColor: '#ECEFF1',

      alignItems: 'center',
      paddingTop: 20
    },

    buttonAdd: {
        height: 44,
        width: 140,
        borderRadius: 6,
        backgroundColor: '#008F33',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },

    textButtonAdd: {
        color: '#fff'
    },
   


    footer: {
        height: 52,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },

    optionFooter: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textFooter: {
        color: '#757575'
    }

})
export default Farmm;