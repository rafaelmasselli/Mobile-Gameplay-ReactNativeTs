import React from "react";
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps} from "react-native";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./style";
type Props = TouchableOpacityProps & {
    title : string
    
}

const Button = ( {title, ...rest}: Props) => {
  return (
      <TouchableOpacity style={styles.container} {...rest}>
       <View style={styles.inconWrapper}>
           <Image source={DiscordImg} style={styles.icon}/>
       </View>
       <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
  )
};

export default Button;
