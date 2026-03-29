import React from 'react'
import { TextInput, TouchableHighlight, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ISearchProps } from './interfaces'
import { searchStyles } from './styles'
import { flexbox } from '../../design'
import { AppointmentItem } from '../AppointmentItem'
import { CloseIcon, SearchIcon } from '../../../assets'
import { AppointmentTypesEnum } from '../../../features/'
import { MainStackParamList } from '../../../app'

export const Search = ({
    setModalState
}: ISearchProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>()

    return (
        <View style={searchStyles.section}>
            <View style={[flexbox.basic, flexbox.alignCenter, flexbox.directionRow, searchStyles.container]}>
                <TextInput style={searchStyles.input} />
                <TouchableHighlight style={searchStyles.button}>
                    <SearchIcon />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    setModalState(false)
                }} style={searchStyles.button}>
                    <CloseIcon />
                </TouchableHighlight>
            </View>
            <View style={searchStyles.list}>
                <AppointmentItem
                    id='222'
                    patientName='Иванов Олег'
                    type={AppointmentTypesEnum.CHECKUP}
                    date={new Date()}
                    time='12:00'
                    imageUrl=''
                    notifiedAt={new Date()}
                    procedure=''
                    onPress={() => navigation.navigate('ApointmentDetail', { id: '222' })}
                />
                <AppointmentItem
                    id='212'
                    patientName='Иванов Олег'
                    type={AppointmentTypesEnum.CHECKUP}
                    date={new Date()}
                    time='12:00'
                    imageUrl=''
                    notifiedAt={new Date()}
                    procedure=''
                    onPress={() => navigation.navigate('ApointmentDetail', { id: '212' })}
                />
                <AppointmentItem
                    id='242'
                    patientName='Иванов Олег'
                    type={AppointmentTypesEnum.CHECKUP}
                    date={new Date()}
                    time='12:00'
                    imageUrl=''
                    notifiedAt={new Date()}
                    procedure=''
                    onPress={() => navigation.navigate('ApointmentDetail', { id: '242' })}
                />
            </View>
        </View>
    )
}