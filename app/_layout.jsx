import { Stack, useRouter } from 'expo-router'
import { View, Text } from 'react-native'
import { AuthProvider, useAuth } from '../context/authContext'
import { useEffect } from 'react'
import { supabase } from '../lib/superbase'
import { getUserInfo } from '../services/userService'

const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}
const MainLayout = () => {
  const { setAuthUser, setUserData } = useAuth()
  const router = useRouter()

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log('Session User: ', session?.user?.id)

      if (session) {
        // set auth
        // move to home
        setAuthUser(session?.user)
        updateUserData(session?.user)
        router.replace('/home')
      } else {
        // set auth null
        // move to welcome screen
        setAuthUser(null)
        router.replace('/welcome')
      }
    })
  }, [])

  const updateUserData = async (user) => {
    let res = await getUserInfo(user?.id)

    if (res?.success) setUserData(res.data)


  }

  return (
    <Stack screenOptions={{ headerShown: false }} />
  )
}
export default _layout