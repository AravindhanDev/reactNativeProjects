import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from "react-native"
import { Stack } from "expo-router"
import { useEffect, useState } from "react"
import * as Font from "expo-font"

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
    },
    sourceText: {
        color: "blue",
        fontSize: 20,
        fontFamily: "OpenSans_Bold",
    },
    colorBtn: {
        marginTop: 10,
        borderRadius: 5,
        minWidth: "auto",
        backgroundColor: "blue",
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginRight: 10,
    },
    fontBtn: {
        marginTop: 10,
        borderRadius: 5,
        minWidth: "auto",
        backgroundColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginRight: 10,
    },
    colorBtnText: {
        textAlign: "center",
        color: "white",
    },
    fontBtnText: {
        textAlign: "center",
        color: "floralwhite",
        fontWeight: "bold",
    },
})

export default function Home() {
    const [color, setColor] = useState("blue")
    const [font, setFont] = useState("")

    async function loadFonts() {
        await Font.loadAsync({
            OpenSans_Bold: require("../assets/fonts/Open_Sans/OpenSans-Bold.ttf"),
            Merriweather_Bold: require("../assets/fonts/Merriweather/Merriweather-Bold.ttf"),
            Merriweather_Italic: require("../assets/fonts/Merriweather/Merriweather-Italic.ttf"),
            OpenSans_Italic: require("../assets/fonts/Open_Sans/OpenSans-Italic.ttf"),
        })
        setFont("OpenSans_Bold")
    }

    useEffect(() => {
        loadFonts()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#f2f2f2" },
                    headerShadowVisible: false,
                    headerTitle: "Color Swapper",
                }}
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View>
                    <Text
                        style={[styles.sourceText, { color, fontFamily: font }]}
                    >
                        Hello World
                    </Text>
                    <Text
                        style={{
                            marginTop: 20,
                            fontSize: 15,
                        }}
                    >
                        Change color:
                    </Text>
                    <ScrollView horizontal>
                        <TouchableOpacity
                            onPress={() => setColor("red")}
                            style={[
                                styles.colorBtn,
                                { backgroundColor: "red" },
                            ]}
                        >
                            <Text style={styles.colorBtnText}>Set Red</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setColor("blue")}
                            style={styles.colorBtn}
                        >
                            <Text style={styles.colorBtnText}>Set Blue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setColor("green")}
                            style={[
                                styles.colorBtn,
                                { backgroundColor: "green" },
                            ]}
                        >
                            <Text style={styles.colorBtnText}>Set Green</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setColor("purple")}
                            style={[
                                styles.colorBtn,
                                { backgroundColor: "purple" },
                            ]}
                        >
                            <Text style={styles.colorBtnText}>Set Purple</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <Text style={{ marginTop: 20 }}>Change font:</Text>
                    <ScrollView horizontal>
                        <TouchableOpacity
                            onPress={() => setFont("OpenSans_Bold")}
                            style={[styles.fontBtn]}
                        >
                            <Text style={styles.fontBtnText}>Open Sans</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setFont("Merriweather_Bold")}
                            style={styles.fontBtn}
                        >
                            <Text style={styles.fontBtnText}>Merriweather</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setFont("OpenSans_Italic")}
                            style={[styles.fontBtn]}
                        >
                            <Text style={styles.fontBtnText}>
                                Open Sans Italic
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setFont("Merriweather_Italic")}
                            style={styles.fontBtn}
                        >
                            <Text style={styles.fontBtnText}>
                                Merriweather Italic
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
