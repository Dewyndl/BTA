import { Pressable, TouchableHighlight, View } from "react-native"
import { formatXDate } from "../../../../common"
import { palette } from '../../../design';
import { CustomText } from '../../CustomText';
import { ICalendarHeaderProps } from "../interfaces"
import { appointmentCalendarStyles } from "../styles"
import { flexbox } from "../../../design"
import { OptionsMenuIcon, SearchIcon } from "../../../../assets"

const CalendarHeader = ({
    date,
    setModalState,
    setIsVisible
}: ICalendarHeaderProps) => {
    return (
        <View style={appointmentCalendarStyles.container}>
            <View style={[flexbox.basic, flexbox.justifyBetween, flexbox.alignCenter, flexbox.directionRow]}>
                <CustomText
                    value={formatXDate(date)}
                    variant="medium"
                    fontSize={18}
                    color={palette.textPrimary}
                />
                <View style={[flexbox.basic, flexbox.alignCenter, flexbox.justifyEnd, flexbox.directionRow, appointmentCalendarStyles.content]}>
                    <Pressable style={appointmentCalendarStyles.calendarHeaderBtn} onPress={() => {
                       setModalState && setModalState(true)
                    }}>
                        <View><SearchIcon /></View>
                    </Pressable>
                    <Pressable  style={[appointmentCalendarStyles.calendarHeaderBtn, flexbox.basic, flexbox.justifyCenter]} onPress={() => {
                        setIsVisible && setIsVisible(true)
                    }}>
                        <View><OptionsMenuIcon /></View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default CalendarHeader