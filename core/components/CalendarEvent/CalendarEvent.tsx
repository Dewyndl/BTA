import React from "react"
import { View } from "react-native"
import { aquaGradient, blackGradient, flexbox } from "../../design"
import { Button, CustomText, FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from "../../uikit"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MainStackParamList } from "../../../app"
import { calendarEventStyles } from "./styles"

const todayRu = () => {
    const now = new Date();
    const date = now.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric", weekday: "long" });
    return date.charAt(0).toUpperCase() + date.slice(1);
};

export const CalendarEvent = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    return (
        <View style={[flexbox.basic, flexbox.justifyBetween, calendarEventStyles.container]}>
            <CustomText
                value={todayRu()}
                textStyles={{
                    fontStyle: FontStyleEnum.NORMAL,
                    fontWeight: FontWeightEnum.SEMI_BOLD,
                    fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                    fontSize: 18,
                    color: "#222221"
                }}
            />
            <View style={calendarEventStyles.buttonsContainer}>
                <Button
                    label={"Новый прием"}
                    onPress={() => {
                        navigation.navigate("AppointmentCreate")
                    }}
                    gradient={aquaGradient}
                    textColor="#FFF"
                />
                <Button
                    label={"Новое мероприятие"}
                    onPress={() => {
                        navigation.navigate("CalendarEvent")
                    }}
                    gradient={blackGradient}
                    textColor="#FFF"
                />
                <Button
                    label={"Новая заметка"}
                    onPress={() => { }}
                    gradient={blackGradient}
                    textColor="#FFF"
                />
            </View>
        </View>
    )
}
