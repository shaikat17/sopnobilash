import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Button from '../components/Button'
import { useRouter } from 'expo-router'
const Welcome = () => {

    const router = useRouter()

  return (
    <ScreenWrapper bg='white'>
          <StatusBar style='dark' />
          <View style={styles.container}>
              {/* Welcome image */}
              <Image resizeMode='contain' style={styles.welcomeImage} source={require('../assets/images/welcome.png')} />
              <View style={{gap: 20}}>
                  <Text style={styles.title}>LinkUp!</Text>
                  <Text style={styles.punchline}>
                      Where every thought finds a home and every image tells a story.
                  </Text>
              </View>
              {/* footer */}
              <View style={styles.footer}>
                  <Button title='Get Started' onPress={() => router.push('/signUp')} buttonStyle={{ marginHorizontal: wp(3) }} />
                  <View style={styles.bottomTextContainer}>
                      <Text style={styles.bottomText}>Already have an account?</Text>
                      <Pressable onPress={() => router.push('/login')}>
                          <Text style={[styles.bottomText, {color: theme.colors.primary, fontWeight: theme.fonts.semiBold}]}>Login</Text>
                      </Pressable>
                  </View>
              </View>
          </View>
    </ScreenWrapper>
  )
}
export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
        justifyContent: 'space-around',
    paddingHorizontal: wp(4)
    },
  welcomeImage: {
    width: hp(30),
      height: wp(100),
    alignSelf: 'center',
    },
  title: {
    fontSize: hp(4),
    fontWeight: theme.fonts.extraBold,
    textAlign: 'center',
    color: theme.colors.text,
  },
  punchline: {
    fontSize: hp(1.7),
    textAlign: 'center',
      color: theme.colors.text,
    paddingHorizontal: wp(10),
    },
    footer: {
        gap: 30,
        width: '100%',
    },
    bottomTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    bottomText: {
        color: theme.colors.text,
        fontSize: hp(1.6),
    }
})