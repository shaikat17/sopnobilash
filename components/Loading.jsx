import { View, Text, ActivityIndicator } from 'react-native'
import { theme } from '../constants/theme'
const Loading = ({size='large', color=theme.colors.primary}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}
export default Loading