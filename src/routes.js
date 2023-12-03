import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/stack'
import { Perfil } from './screens/Perfil'
import { Tarefas } from './screens/Tarefas'
import { Ionicons } from '@expo/vector-icons';




const HomeStack = createStackNavigator();





function HomeTabStack() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <HomeStack.Screen  name="Per" component={Perfil} />
    </HomeStack.Navigator>
  );
}

 function TarefasTabStack() {
  return (
    <HomeStack.Navigator  screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen name="Tarefas" component={Tarefas} />
    </HomeStack.Navigator>
  );
}
 function LerTabStack() {
  return (
    <HomeStack.Navigator  screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen name="Ler" component={Ler} />
    </HomeStack.Navigator>
  );
}
////////////////////////////////////////////////////////




const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
      <Tab.Navigator>

        <Tab.Screen  name="Perfil"
         component={HomeTabStack} 
         options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon:({focused, size, color}) => {
            if(focused) {
                return <Ionicons size={size} color={color} name="md-person"/>
            }
            return <Ionicons size={size} color={color} name="md-person-outline"/>
          }
        }}
         />
         


        <Tab.Screen name="Tarefas" 
        component={TarefasTabStack}
        
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon:({focused, size, color}) => {
            if(focused) {
                return <Ionicons size={size} color={color} name="md-list"/>
            }
            return <Ionicons size={size} color={color} name="md-list-outline"/>
          }
          
        }}/>


       
      </Tab.Navigator>
    );
  }