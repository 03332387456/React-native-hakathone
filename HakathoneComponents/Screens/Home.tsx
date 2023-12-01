import { Text, View} from "react-native";
import rncStyles from 'rncstyles'
import Button from "../Components/Buttons";
import IconBtn from "../Components/IconBtn";


export default function Home({navigation}:any) {
  return( 
        <>
        <View style={[rncStyles.flexRow , rncStyles.justifyContentEnd]}>
         <IconBtn onPress={() => { navigation.navigate("Login")}} size={35} name="person" />
        </View>
        <View>
          <Text style={[rncStyles.textBlack ,rncStyles.textCenter, ,rncStyles.py3, rncStyles.textBold, rncStyles.fs2]}>Task Manegment App</Text>
        </View>
        <View style={rncStyles.p2}>
           <Button onPress={() => { navigation.navigate ("CreateTask") }} label="Add Task" />
        </View>
        <View style={rncStyles.p2}>
           <Button  onPress={() => { navigation.navigate ("MyTasks") }} label="My Tasks" />
        </View>
        
        </>
	)
};
