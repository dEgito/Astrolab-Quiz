import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/login'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SignIn'
        component={Login}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='SignUp'
        component={Login}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  )
}