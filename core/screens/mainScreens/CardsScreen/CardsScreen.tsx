import React, { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useListPatientsQuery, useSearchPatientsMutation } from '../../../../features';
import PatientCard from '../../../components/PatientCard/PatientCard';
import PatientSearch from '../../../components/PatientSearch/PatientSearch';
import { PatientSort } from '../../../components/PatientSort';
import { IPatient } from '../../../../features';
import { SortOptionType } from '../../../../common';
import { MainWrapper } from '../../../wrappers';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../../../app';

const now = new Date();

const patientToSerialized = (p: { u_id: string; u_name: string; u_phone: string | null; u_photo: string | null }): IPatient => ({
  id: p.u_id,
  firstName: p.u_name,
  phone: p.u_phone ?? '',
  imageUrl: p.u_photo ?? undefined,
  createdAt: now,
  updatedAt: now,
});

export const CardsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState<SortOptionType>('alphabet-asc');
  const { data: patients = [] } = useListPatientsQuery({});
  const [searchPatients, { data: searchResults }] = useSearchPatientsMutation();

  const handleSearchChange = (text: string) => {
    setSearch(text);
    if (text.length >= 3) {
      searchPatients({ phone: text });
    }
  };

  const displayList: IPatient[] = search.length >= 3 && searchResults
    ? searchResults.map(patientToSerialized)
    : patients.map(patientToSerialized);

  return (
    <MainWrapper title="Карточки пациентов" back={() => navigation.goBack()} noScroll>
      <FlatList
        data={displayList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PatientCard patient={item} onPress={() => Alert.alert('В разработке')} />
        )}
        ListHeaderComponent={
          <>
            <PatientSearch value={search} onChangeText={handleSearchChange} />
            <PatientSort selectedOption={sortOption} onSelect={setSortOption} />
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </MainWrapper>
  );
};
