import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
    <Text style={styles.title}>
        รายละเอียด
       </Text>
       <Text style={styles.title}>
       พิพิธภัณฑ์เซรามิคธนบดี
       </Text>
       <Text style={styles.title}>
       กาดกองต้า ลำปาง
       </Text>
       <Text style={styles.title}>
       ระยะทาง 2.5 กิโลเมตร ราคา 250 บาท
       </Text>
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
          คุณ ใจดี มีสุข
        </Text>
        <Text style={styles.title}>
          รถม้าป้ายทะเบียน H999
        </Text>
      
    </View>
 
    <View>
      <Text style={styles.title}>
       
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Summid"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom:10,
    backgroundColor: '#CD853F'
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color: '#ffff',
    fontSize: 20
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    
  },
});

export default App;