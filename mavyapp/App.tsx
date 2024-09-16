import React from "react"
import { View,Text,StyleSheet, ViewComponent} from "react-native"

export default function Aplicativo () {
  return(
    <View>
      <View style={styles.container}>
        <Text>Box 1</Text>
      </View>
      <View>
        <Text>Box 2</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container
})