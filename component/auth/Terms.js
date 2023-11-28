import React from 'react';
import {
  Image,
  
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import SvgComponent from '../../asset/SVG/SvgComponent';
import { SafeAreaView } from 'react-native-safe-area-context';


function Terms({navigation}){
      return(
            <SafeAreaView style={styles.container} edges={['right', 'left', 'top']}>
                <View style={styles.header}>
             
                    <SvgComponent style={{width: 100, height: 100, color: '#fff', fontWeight: 'bold'}}
                                   onPress = {() => {navigation.goBack()}}
                    />
             
                 
                    <Text style={styles.textHeader}>ĐIỀU KHOẢN</Text>
                    <Text></Text>
                </View>
                <View style={styles.body}>
                  <ScrollView>
                    <Text style={styles.secondaryClause}> Khi quý khác truy cập vào trang web hoặc ứng dụng của chúng tôi có nghĩa là quý khách đồng ý với các điều khoản này. Xin vui lòng đọc kỹ trước khi quyết định mua hàng:</Text>
                    <Text style={styles.mainTerms}>1. Thông tin cá nhân</Text>
                    <Text style={styles.secondaryClause}>- Chúng tôi chỉ thu thập thông tin cá nhân từ viêc Quý khác tự cung cấp khi truy cập vào website của chúng tôi. Khi đó, quý khác hoàn toàn biết rõ chúng tôi sử dụng thông tin đó cho việc gì và được Quý khách chấp nhận về việc sử dung dữ liệu đó.</Text>
                    <Text style={styles.secondaryClause}>- Khi Quý khách đăng nhập, đăng ký là thành viên của website hay đặt mua hàng, Chúng tôi có thể yêu cầu Quý khách cung cấp thông tin cá nhân gồm: Họ tên, địa chỉ, số điện thoại, dịa chỉ email.</Text>
                    <Text style={styles.secondaryClause}>- Quý khách tự khai báo thông tin cá nhân, cần đảm bảo mọi thông tin khai báo phải chính xác và hợp phát. Chúng tôi không chịu trách nhiệm liên quan thông tin khai báo của Quý khách.</Text>
                    <Text style={styles.secondaryClause}>- Chúng tôi thu thập, lưu trữ và xử lý thông tin của Quý khách cho quý trình mua hàng, xử lý đơn đặt hàng, cung cấp bản tin, thông tin về sản phẩm, và các thông tin khác theo yêu cầu của Quý khách. Ngoài ra, Chúng tôi sẽ sử dụng các thông tin đó để quản lý tài khoản của Quý khách; xác minh và thực hiện giao dịch trực tuyến. Chúng tôi không giới hạn tất cả thông tin cá nhân, địa chỉ giao hàng và chi tiết thanh toán.</Text>  
                    <Text style={styles.secondaryClause}>- Chúng tôi có thể chuyển tên và địa chỉ cho bên thứ ba để họ giao hàng cho bạn (ví dụ cho bên chuyển phát nhanh hoặc nhà cung cấp).</Text>
                    <Text style={styles.mainTerms}>2. Bảo mật</Text>
                    <Text style={styles.secondaryClause}>- Mọi thông tin cá nhân của Quý khách sẽ được chúng tôi bảo mật bằng mọi cách thức có thể nhằm bảo vệ thông tin này không bị truy lục, sử dụng hoặc tiết lộ ngoài ý muốn.</Text>
                    <Text style={styles.secondaryClause}>- Chúng tôi khuyến cáo Quý khách không nên đưa thông tin chi tiết về việc thanh toán với bất kỳ ai bằng e-mail, chúng tôi không chịu trách nhiệm về những mất mát quý khách có thể gánh chịu trong việc trao đổi thông tin của quý khách qua internet hoặc email.</Text>
                    <Text style={styles.secondaryClause}>- Mọi thông tin giao dịch sẽ được bảo mật nhưng trong trường hợp cơ quan pháp luật yêu cầu , chúng tôi sẽ buộc phải cung cập những thông tin này cho các cơ quan pháp luật.</Text>
                    <Text style={styles.secondaryClause}>- Quý khách không được sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi cấu trúc dữ liệu. Trang web cũng nghiêm cấp việc phát tán, truyền bá hay cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống. Cá nhân hay tổ chức vi phạm sẽ bị tước bỏ mọi quyền lợi cũng như sẽ bị truy tố trước pháp luật nếu cần thiết.</Text>
                    <Text style={styles.mainTerms}>3. Thông tin sản phẩm</Text>
                    <Text style={styles.secondaryClause}>- Chúng tôi cam kết cung cấp các sản phẩm đúng chất lượng như thông tin đăng bán trên trang web của chúng tôi và từ chối bán các sản phẩm sản xuất trái phép, sao chép, hàng giả, hàng nhái, không rõ nguồn gốc...</Text>
                    <Text style={styles.secondaryClause}>- Chúng tôi cung cấp thông tin chi tiết đối với từng sản phẩm trên website, tuy nhiên chúng tôi không cam kết cung cấp thông tin một cách toàn vẹn kịp thời hoặc không sai sót đối với từng sản phẩm.</Text>
                    <Text style={styles.secondaryClause}>- Trong trường hợp Quý khách nhận được sản phẩm không đúng như sản phẩm đã đặt hàng, Quý khách vui lòng liên lạc đến bộ phận Hỗ trợ khách hàng của công ty chúng tôi trong thời gian sớm nhất kể từ khi nhận hàng, đồng thời đảm bảo sản phẩm trong tình trạng chưa qua sử dụng để được hỗ trợ đổi sản phẩm.</Text>
                    <Text style={styles.mainTerms}>4. Hỗ trợ kỹ thuật</Text>
                    <Text style={styles.secondaryClause}>- Chúng tôi đảm bảo hỗ trợ các vấn đề kỹ thuật liên quan đến việc sử dụng Sản phẩm trong suốt quá trình sử dụng của Quý khách.</Text>
                    <Text style={styles.secondaryClause}>- Khi có nhu cầu hỗ trợ, Quý khách có thể liên hệ với chúng tôi để được hỗ tợ từ xa qua điện thoại, telegram, email, hoặc điều khiển qua máy tính.</Text>
                    <Text style={styles.secondaryClause}>- Thời gian hỗ trợ kỹ thuật: tất cả các ngày trong tuần.</Text>
                    <Text style={styles.secondaryClause}>- Ngoài ra, chúng tôi có thể đến tận nơi để cài đặt, lập trình theo yêu cầu riêng của khách hàng (có tính phí)</Text>
                    <Text style={styles.mainTerms}>5. Chính sách bảo hành</Text>
                    <Text style={styles.mainTerms}>5.1 Thời gian bảo hành:</Text>
                    <Text style={styles.secondaryClause}>- Sản phẩm được bảo hành miễn phí 01 năm được ghi trên tem bảo hành</Text>
                    <Text style={styles.mainTerms}>5.2 Quy định về sản phẩm được bảo hành miễn phí:</Text>
                    <Text style={styles.secondaryClause}>- Bảo hành sản phẩm là: khắc phục những lỗi hỏng hóc, sự cố kỹ thuật xảy ra do lỗi của nhà sản xuất</Text>
                    <Text style={styles.secondaryClause}>- Những sản phẩm được bảo hành miễn phí khi đảm bảo các điều kiện sau:</Text>
                    <Text style={styles.secondaryClause}>Sản phẩm bị hư hỏng do lỗi kỹ thuật của nhà sản xuất, có dán team bảo hành của công ty. Tem niêm phong trên sản phẩm phải còn nguyên vẹn, không được sửa đổi hay dán đè lên. Sản phẩm còn thời gian bảo hành được tính kể từ ngày mua hàng hoặc được ghi trên tem bảo hành. Có hóa đơn mua hàng của Công ty.</Text>
                    <Text style={styles.mainTerms}>5.3 Quy định về sản phẩm không được bảo hành hoặc phát sinh phí bảo hành:</Text>
                    <Text style={styles.secondaryClause}>Sản phẩm đã quá thời hạn bảo hành ghi trên tem bảo hành.</Text>
                    <Text style={styles.secondaryClause}>Sử dụng sản phẩm không đúng theo sách hướng dẫn, sử dụng không đúng điện áp ghi trên sản phẩm.</Text>
                    <Text style={styles.secondaryClause}>Tem niêm phong bảo hành bị rách, vỡ, bị dán đè hoặc bị sửa đổi.</Text>
                    <Text style={styles.secondaryClause}>Sản phẩm hư hỏng do lỗi người sử dụng hoặc do tác động bên ngoài như rơi, vỡ, va đập, ẩm ướt, ngập nước hoặc do hỏa hoản, thiên tai, côn trùng xâm nhập.</Text>
                    <Text style={styles.secondaryClause}>Khách hàng tự ý can thiệp sửa chữa sản phẩm hoặc nhờ sửa chữa bởi kỹ thuật viên không phải là nhân viên của chúng tôi.</Text>
                    <Text style={styles.mainTerms}>6. Chấm dứt giao dịch/hợp đồng</Text>
                    <Text style={styles.secondaryClause}>- Giao dịch sẽ chấm dứt khi hoàn thành việc giao hàng cho Quý khách. Trong bất kỳ trường hợp nào, Quý khách không có quyền trả lại sản phẩm khi giao dịch này chấm dứt.</Text>
                    <Text style={styles.secondaryClause}>- Trong trường hợp có bất kỳ thiệt hại nào phát sinh do việc vi phạm Quy Định sử dụng trang web, chúng tôi có quyền đình chỉ hoặc khóa tài khoản của quý khách vĩnh viện. Nếu quý khách không hài lòng với trang web hoặc bất kỳ điều khoản, điều kiện, quy tắc, chính sách, hướng dẫn, hoặc cách thức vận hành của chúng tôi thì biện pháp khắc phục duy nhất là ngưng làm việc với chúng tôi.</Text>
                    <Text style={styles.mainTerms}>7. Giải quyết tranh chấp</Text>
                    <Text style={styles.secondaryClause}>Bất kỳ tranh cãi, khiếu nại hoặc tranh chấp phát sinh từ hoặc liên quan đến giao dịch hoặc các Quy định và Điều kiện này đều sẽ được giải quyết bằng hình thức thương lương, hòa giải, Nếu các đàm phán thương lượng thất bại, các tranh chấp trên sẽ được xử lý theo luật pháp.</Text>
                    <Text style={styles.mainTerms}>8. Điều khoản chung</Text>
                    <Text style={styles.secondaryClause}>Chúng tôi có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Quy định và điều kiện sử dụng cho phù hợp với tình hình thực tế. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước. Và khi quý khách tiếp tục sử dụng trang web, sau khi các thay đổi về Quy định và Điều kiện được đăng tải, có nghĩa là quý khách chấp nhận với những thay đổi đó.</Text>
                    <Text style={styles.secondaryClause}>Các điều khoản nêu trên được thực hiện trên tinh thần tự nguyện và chỉ là các điều khoản giữa chúng tôi và Quý khách.</Text>
                    <Text style={[styles.secondaryClause, styles.epilogue] } >Xin quý khách lưu ý chỉ mua hàng khi đã chấp nhận và hiểu rõ những quy định trên.</Text>
                 </ScrollView>




                </View>

            </SafeAreaView>

      )
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#00C853',
        justifyContent: 'flex-end',
       
      },
     
      header:{ 
         height: 54,
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         paddingHorizontal: 14
       
      },
      backArrow: {
        color: '#fff',
    
      
        fontWeight: 'bold',
        fontSize: 40
       
      },
      textHeader:{
         color: '#fff',
         marginRight: 20,
         fontSize: 16,
         fontWeight: '600',
        
      },
      body: {
       
        flex:  1,
        borderTopRightRadius: 26,
        borderTopLeftRadius: 26,
        backgroundColor: '#ECEFF2',
       
      },

      mainTerms: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 16,
        marginLeft: 14
      },
      secondaryClause: {
        color: '#000',
        marginTop: 16,
        marginLeft: 14,
        marginRight: 14
      },
      epilogue: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 16
      } 
    //   logo: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   },
    //   registryy:{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
       
    //   },
    //   input: {
    //     height: 50,
    //     backgroundColor: '#fff',
    //     width: 340,
    //     borderRadius: 5,
    //     paddingLeft: 20,
    //     paddingRight: 20
    //   },
    //   rules: {
    //          width: 320,
    //          marginTop: 54
    //   },
    //   TextInput: {
    //         marginBottom: 8,
    //         color: '#000'
    //   },
    //   button: {
    //     height: 50,
    //     width:240,
    //     borderRadius: 5,
    //     backgroundColor: '#228B22',
    //     marginTop: 20,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   },
    //   textButton: {
    //     color: '#fff',
    //     fontWeight: '500'
    //   },


    //   footer: {
    //     flex: 1,
    //     flexDirection: 'row',
       
    //     justifyContent: 'space-between',
    //     alignItems: 'flex-end',
    //     marginHorizontal: 26
    //   },
    //   textFooterLeft: {
    //     marginBottom: 26,
    //     color: '#228B22',
    //     fontSize: 20,
    //     fontWeight: '600'
    
    //   },
    //   textFooterRight: {
    //     marginBottom: 26,
    //     color: '#228B22',
    //     fontSize: 20,
    //     fontWeight: '600'
    //   }
});

export default Terms;
