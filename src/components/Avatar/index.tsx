import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {View} from "react-native"
import { theme } from "../../global/style/style"

export function Avatar () {
    const { secondary80, secondary100 } = theme.colors;
    return(
        <>
        <LinearGradient
          style={styles.container}
          colors={[secondary80, secondary100]}
        >
 
        </LinearGradient>
      </>
    )
}