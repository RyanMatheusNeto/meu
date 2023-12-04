import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Perfil from '../screens/Perfil'
import Tarefas from '../screens/Tarefas'
import Welcome from '../screens/Welcome'
import { Ionicons } from '@expo/vector-icons';
import Login from '../screens/Login';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabStack() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Perfil" component={Perfil} />
    </HomeStack.Navigator>
  );
}

function TarefasTabStack() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Tarefas" component={Tarefas} />
    </HomeStack.Navigator>
  );
}

 function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Perfil"
        component={HomeTabStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return focused ? <Ionicons size={size} color={color} name="md-person" /> : <Ionicons size={size} color={color} name="md-person-outline" />
          }
        }}
      />
      <Tab.Screen
        name="Tarefas"
        component={TarefasTabStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return focused ? <Ionicons size={size} color={color} name="md-list" /> : <Ionicons size={size} color={color} name="md-list-outline" />
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Welcome" component={Welcome} />
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="MyTabs" component={MyTabs} />
      <HomeStack.Screen name="Tarefas" component={Tarefas} />
      <HomeStack.Screen name="Perfil" component={Perfil} />
    </HomeStack.Navigator>
  );
}
