import { View } from "react-native";
import { Calendar } from "react-native-calendars";
import { CalendarHeader } from "./helpers";
import { ICustomCalendarProps } from "./interfaces";

const todayString = () => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
};

export const CustomCalendar = ({
    setModalState,
    setIsVisible,
    onDayPress,
    selectedDate,
}: ICustomCalendarProps) => {
    const today = todayString();
    const markedDates: Record<string, { selected?: boolean; selectedColor?: string; marked?: boolean; dotColor?: string }> = {};
    if (selectedDate && selectedDate !== today) {
        markedDates[today] = { marked: true, dotColor: "#0E7C7B" };
        markedDates[selectedDate] = { selected: true, selectedColor: "#0E7C7B" };
    } else {
        markedDates[today] = { selected: true, selectedColor: "#0E7C7B" };
    }
    return (
        <View>
            <Calendar
                renderHeader={(date, info) => date && <CalendarHeader {...{date, info, setModalState, setIsVisible}} />}
                current={todayString()}
                firstDay={1}
                markedDates={markedDates}
                onDayPress={(day) => onDayPress?.(day.dateString)}
                hideArrows
                
                theme={{
                    calendarBackground: '#F6F6F6',
                    todayTextColor: "#0E7C7B",
                    arrowColor: "#000",
                    monthTextColor: "#000",
                    textDayFontWeight: "500",
                    backgroundColor: '#F6F6F6'
                }}
            />
        </View>
    )
}
