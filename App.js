import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from './View/StartScreen/StartScreen';
import LogInScreen from './View/LogInScreen/LogInScreen'
import SignInScreen from './View/SignInScreen/SignInScreen'

const InitialStack = createStackNavigator({
  Start: {
    screen: StartScreen,
  },
  LogIn: {
    screen: LogInScreen
  },
  SignIn: {
    screen: SignInScreen
  }
});

// const ContactsStack = createStackNavigator({
//   Contacts: {
//     screen: ContactsScreen,
//   },
//   Files: {
//     screen: Files
//   }
// });

// const ModulesContainer = createStackNavigator({
//   Modules: {
//     screen: Modules,
//   },
//   Cards: {
//     screen: CardsScreen
//   }
// });

// const DrawerMenuStack = createStackNavigator({
//   Account: AccountScreen,
//   AddAccount: AddAccount,
//   Invoice: InvoiceScreen
// })

// const TabNavigator = createBottomTabNavigator({
//   Message: {
//     screen: MessageScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: '',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <View style={{ alignItems: "center", justifyContent: "center" }}>
//           <View
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: 20,
//               justifyContent: "center",
//               alignItems: "center",
//               position: "absolute"
//             }}
//           />
//           <Image
//             source={require('./src/Image/message.svg')}
//           />
//         </View>
//       ),
//       tabBarOptions: {
//         style: {
//           borderTopLeftRadius: 21,
//           borderTopRightRadius: 21,
//           backgroundColor: "#fff",
//           position: 'absolute',
//           bottom: 0,
//           padding: 10,
//           borderTopWidth: 0,
//           height: 80,
//           shadowOpacity: 0.05,
//           shadowRadius: 8.0,
//         },
//         showLabel: false,
//         showIcon: true,
//         inactiveTintColor: "#ffffff",
//       }
//     })
//   },
//   Chat: {
//     screen: ChatScreen,
//     navigationOptions: ({ navigation, props }) => ({
//       title: '',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <View style={{ alignItems: "center", justifyContent: "center" }}>
//           <View
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: 20,
//               justifyContent: "center",
//               alignItems: "center",
//               position: "absolute"
//             }}
//           />
//           <Image
//             source={require('./src/Image/chat.svg')}
//           />
//         </View>
//       ),
//       tabBarOptions: {
//         style: {
//           borderTopLeftRadius: 21,
//           borderTopRightRadius: 21,
//           backgroundColor: "#fff",
//           position: 'absolute',
//           bottom: 0,
//           padding: 10,
//           borderTopWidth: 0,
//           height: 80,
//           shadowOpacity: 0.05,
//           shadowRadius: 8.0,
//         },
//         showLabel: false,
//         showIcon: true,
//         inactiveTintColor: "#ffffff",
//       }
//     })
//   },
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: '',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <View style={{ alignItems: "center", justifyContent: "center" }}>
//           <View
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: 20,
//               justifyContent: "center",
//               alignItems: "center",
//               position: "absolute"
//             }}
//           />
//           <Image
//             source={require('./src/Image/home.svg')}
//           />
//         </View>
//       ),
//       tabBarOptions: {
//         style: {
//           borderTopLeftRadius: 21,
//           borderTopRightRadius: 21,
//           backgroundColor: "#fff",
//           position: 'absolute',
//           bottom: 0,
//           padding: 10,
//           borderTopWidth: 0,
//           height: 80,
//           shadowOpacity: 0.05,
//           shadowRadius: 8.0,
//         },
//         showLabel: false,
//         showIcon: true,
//         inactiveTintColor: "#ffffff",
//       }
//     })
//   },
//   Contacts: {
//     screen: ContactsStack,
//     navigationOptions: ({ navigation }) => ({
//       title: '',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <View style={{ alignItems: "center", justifyContent: "center" }}>
//           <View
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: 20,
//               justifyContent: "center",
//               alignItems: "center",
//               position: "absolute"
//             }}
//           />
//           <Image
//             source={require('./src/Image/users.svg')}
//           />
//         </View>
//       ),
//       tabBarOptions: {
//         style: {
//           borderTopLeftRadius: 21,
//           borderTopRightRadius: 21,
//           backgroundColor: "#fff",
//           position: 'absolute',
//           bottom: 0,
//           padding: 10,
//           borderTopWidth: 0,
//           height: 80,
//           shadowOpacity: 0.05,
//           shadowRadius: 8.0,
//         },
//         showLabel: false,
//         showIcon: true,
//         inactiveTintColor: "#ffffff",
//       }
//     })
//   },
//   Calendar: {
//     screen: CalendarScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: '',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <View style={{ alignItems: "center", justifyContent: "center" }}>
//           <View
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: 20,
//               justifyContent: "center",
//               alignItems: "center",
//               position: "absolute"
//             }}
//           />
//           <Image
//             source={require('./src/Image/calendar.svg')}
//           />
//         </View>
//       ),
//       tabBarOptions: {
//         style: {
//           borderTopLeftRadius: 21,
//           borderTopRightRadius: 21,
//           backgroundColor: "#fff",
//           position: 'absolute',
//           bottom: 0,
//           padding: 10,
//           borderTopWidth: 0,
//           height: 80,
//           shadowOpacity: 0.05,
//           shadowRadius: 8.0,
//         },
//         showLabel: false,
//         showIcon: true,
//         inactiveTintColor: "#ffffff",
//       }
//     })
//   }
// });

// const MainApp = createSwitchNavigator({
//   initial: TabNavigator,
//   app: DrawerMenuStack

// })

// const RootDrawerNavigator = createDrawerNavigator(
//   {
//     Initial: MainApp
//   },
//   {
//     initialRouteName: 'Initial',
//     contentComponent: DrawerMenu,
//     drawerOpenRoute: 'DrawerOpen',
//     drawerCloseRoute: 'DrawerClose',
//     drawerToggleRoute: 'DrawerToggle',
//     drawerType: 'front',
//     drawerLockMode: 'unlocked'
//   }
// );


const APP = createSwitchNavigator({
  initial: InitialStack,
  // auth: RootDrawerNavigator,
  // app: ModulesContainer
})

const AppContainer = createAppContainer(APP);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
