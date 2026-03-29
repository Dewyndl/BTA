import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { PatientCard } from '../../components/PatientCard';
import { getFullName } from '../../../common';
import type { IPatient } from '../../../features';
import { IPatientListProps } from './interfaces';
import type { IAppointment } from '../../../features';

const PatientList = React.memo(function PatientList(props: IPatientListProps) {
  const {
    patients,
    searchQuery,
    sortOption,
    appointments = [],
    onPatientPress,
    isLoading = false,
    isRefreshing = false,
    onRefresh,
    searchError,
    ListHeaderComponent,
  } = props;
  const filteredAndSortedPatients = React.useMemo(() => {
    let filtered = [...patients]

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((patient) => {
        const fullName = getFullName(patient).toLowerCase();
        const phone = patient.phone?.toLowerCase() || '';
        return fullName.includes(query) || phone.includes(query);
      });
    }

    filtered.sort((a, b) => {
      switch (sortOption) {
        case 'alphabet-asc': {
          const nameA = getFullName(a).toLowerCase();
          const nameB = getFullName(b).toLowerCase();
          return nameA.localeCompare(nameB, 'ru');
        }
        case 'alphabet-desc': {
          const nameA = getFullName(a).toLowerCase();
          const nameB = getFullName(b).toLowerCase();
          return nameB.localeCompare(nameA, 'ru');
        }
        case "nearest-appointment": {
          const now = new Date();
          const getNextAppointmentDate = (patient: IPatient): Date | null => {
            const name = getFullName(patient).toLowerCase();
            const future = appointments
              .filter((apt: IAppointment) => apt.patientName.toLowerCase() === name && apt.date >= now)
              .map((apt: IAppointment) => apt.date)
              .sort((x: Date, y: Date) => x.getTime() - y.getTime());
            return future.length > 0 ? future[0] : null;
          };
          const dateA = getNextAppointmentDate(a);
          const dateB = getNextAppointmentDate(b);
          if (dateA === null && dateB === null) return 0;
          if (dateA === null) return 1;
          if (dateB === null) return -1;
          return dateA.getTime() - dateB.getTime();
        }
        case "registration-new":
          return b.createdAt.getTime() - a.createdAt.getTime()
        case "registration-old":
          return a.createdAt.getTime() - b.createdAt.getTime()
        default:
          return 0
      }
    })

    return filtered
  }, [patients, searchQuery, sortOption, appointments])

  const renderItem = useCallback(
    ({ item }: { item: IPatient }) => {
      const now = new Date();
      const name = getFullName(item).toLowerCase();
      const future = appointments
        .filter((apt: IAppointment) => apt.patientName.toLowerCase() === name && apt.date >= now)
        .map((apt: IAppointment) => apt.date)
        .sort((x: Date, y: Date) => x.getTime() - y.getTime());
      const nearest = future.length > 0 ? future[0] : null;
      const nearestAppointment = nearest
        ? `${String(nearest.getDate()).padStart(2, '0')}.${String(nearest.getMonth() + 1).padStart(2, '0')}.${nearest.getFullYear()}`
        : undefined;
      return <PatientCard patient={item} onPress={() => onPatientPress?.(item)} nearestAppointment={nearestAppointment} />;
    },
    [onPatientPress, appointments]
  );

  const renderEmptyState = useCallback(() => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        {isLoading
          ? "Загрузка картотеки..."
          : searchError
          ? searchError
          : searchQuery.trim()
          ? "По вашему запросу пациенты не найдены"
          : "Картотека пока что пуста"}
      </Text>
    </View>
  ), []);

  return (
    <FlatList
      data={filteredAndSortedPatients}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.listContainer,
        filteredAndSortedPatients.length === 0 && styles.emptyListContainer,
      ]}
      ListHeaderComponent={ListHeaderComponent}
      ListEmptyComponent={renderEmptyState}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
    />
  );
});

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 10,
  },
  emptyListContainer: {
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "#D7131F",
    letterSpacing: -0.42,
    textAlign: "center",
    paddingHorizontal: 30,
  },
})

export default PatientList;
