import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { flexbox } from '../../design';
import {
  Button,
  CustomText,
  FontsFamilyEnum,
  FontStyleEnum,
  FontWeightEnum,
  SlideBtn,
} from '../../uikit';
import { IEventCalendarPageProps } from './interfaces/event-calendar-form-props.interface'
import { eventCalendarFormStyle } from './styles'

const EventCalendarForm = ({succes}: IEventCalendarPageProps) => {
    return (
        <View style={eventCalendarFormStyle.container}>
            <View style={[flexbox.basic, flexbox.alignCenter]}>
                <CustomText
                    value='Новое мероприятие'
                    textStyles={{
                        fontStyle: FontStyleEnum.NORMAL,
                        fontWeight: FontWeightEnum.SEMI_BOLD,
                        fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                        fontSize: 18,
                        color: '#222221'
                    }}
                />
            </View>
            <View style={eventCalendarFormStyle.patientDetailContainer}>
                <View style={[eventCalendarFormStyle.patientDetailItem, flexbox.basic, flexbox.directionRow, flexbox.alignCenter, flexbox.justifyBetween]}>
                    <CustomText
                        value='Начало:'
                        textStyles={{
                            fontStyle: FontStyleEnum.NORMAL,
                            fontWeight: FontWeightEnum.SEMI_BOLD,
                            fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                            fontSize: 12,
                            color: '#222221'
                        }}
                    />
                    <TouchableOpacity>
                        <CustomText
                            value='10:30'
                            textStyles={{
                                fontStyle: FontStyleEnum.NORMAL,
                                fontWeight: FontWeightEnum.SEMI_BOLD,
                                fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                                fontSize: 12,
                                textDecorationLine: 'underline',
                                color: '#222221'
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={[eventCalendarFormStyle.patientDetailItem, flexbox.basic, flexbox.directionRow, flexbox.alignCenter, flexbox.justifyBetween]}>
                    <CustomText
                        value='Окончание:'
                        textStyles={{
                            fontStyle: FontStyleEnum.NORMAL,
                            fontWeight: FontWeightEnum.SEMI_BOLD,
                            fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                            fontSize: 12,
                            color: '#222221'
                        }}
                    />
                    <TouchableOpacity>
                        <CustomText
                            value='10:30'
                            textStyles={{
                                fontStyle: FontStyleEnum.NORMAL,
                                fontWeight: FontWeightEnum.SEMI_BOLD,
                                fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                                fontSize: 12,
                                textDecorationLine: 'underline',
                                color: '#222221'
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={eventCalendarFormStyle.checkboxContainer}>
                <View>
                    <SlideBtn title='Напомнить' />
                    <CustomText
                        value='За сутки'
                        textStyles={{
                            fontStyle: FontStyleEnum.NORMAL,
                            fontWeight: FontWeightEnum.SEMI_BOLD,
                            fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                            fontSize: 12,
                            textDecorationLine: 'underline',
                            color: '#222221'
                        }}
                    />
                </View>
            </View>
            <View style={{
                gap: 10
            }}>
                <Button label="Сохранить" onPress={succes} />
                <Button label="Отмена" onPress={succes} />
            </View>
        </View>
    )
}

export default EventCalendarForm