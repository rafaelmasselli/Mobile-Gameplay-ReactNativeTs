import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { styles } from "./style";
import IllustrationImg from "../../assets/illustration.png";
import ButtonIcon from "./../../components/buttonIcon/index";

const Signin = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IllustrationImg}
        style={styles.Image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>
        <Text style={styles.Subtitle}>
          Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
        </Text>

        <ButtonIcon title='Entrar com Discord'  activeOpacity={0.8} />
      </View>
    </View>
  );
};

export default Signin;
