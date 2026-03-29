import { Search } from "lucide-react-native"
import React from "react"
import { View } from "react-native"
import { IPatientSearchProps } from "./interfaces"
import { SPatientSearch } from "./styles"
import { InputText, InputTextTypesEnum } from "../../uikit"

const PatientSearch = ({
  value,
  onChangeText,
  error = false,
}: IPatientSearchProps) => {
  return (
    <View style={SPatientSearch.searchContainer}>
      <View style={SPatientSearch.searchInputContainer}>
        <InputText
          placeholder="Поиск"
          value={value}
          change={(text) => onChangeText(text)}
          blur={() => {}}
          inputName="search"
          textInputType={InputTextTypesEnum.DEFAULT}
        />
        <View style={SPatientSearch.searchIconContainer}>
          <Search size={20} color="#838383" />
        </View>
      </View>
    </View>
  )
}

export default PatientSearch;

