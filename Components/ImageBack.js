import { ImageBackground, StyleSheet } from "react-native"

const ImageBack = ({ children, whichImg, resizeMode }) => {
    return (
        <ImageBackground
            resizeMode={resizeMode}
            source={whichImg}
            style={styles.image}

        >
            {children}
        </ImageBackground>
    )
}

export default ImageBack;
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
    }
})