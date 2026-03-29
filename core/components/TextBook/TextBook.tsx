import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import { IPatient, selectAppointment, useListPatientsQuery } from '../../../features';
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MainStackParamList } from "../../../app/navigations/MainNavigator"
import { PatientList } from "../PatientList"
import { PatientSort } from "../PatientSort"
import { PatientSearch } from "../PatientSearch"
import { SortOptionType } from "../../../common"
import { useNavigation } from "@react-navigation/native"


export const TextBook = () => {
    const [showInactiveWarning, setShowInactiveWarning] = useState(false)
    const [inactivePatients, setInactivePatients] = useState<IPatient[]>([])
    const { appointmentData } = useSelector(selectAppointment)
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>()
    const [searchQuery, setSearchQuery] = useState("")
    const [sortOption, setSortOption] = useState<SortOptionType>("alphabet-asc")
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [hasSearchError, setHasSearchError] = useState(false)
    const [validation, setValidation] = useState<{ errorMessage?: string }>({})

    const { data: patientsApi = [], isFetching: isLoading } = useListPatientsQuery({})

    const patients: IPatient[] = patientsApi.map((p) => {
        const nameParts = (p.u_name ?? "").trim().split(/\s+/)
        return {
            id: p.u_id,
            firstName: nameParts[0] || "",
            lastName: nameParts[2] || undefined,
            middleName: nameParts[1] || undefined,
            phone: p.u_phone ?? "",
            imageUrl: p.u_photo ?? undefined,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    })

    const handlePatientPress = (patient: IPatient) => {
        navigation.navigate('Cards')
    }

    const handleCloseWarning = () => {
        setShowInactiveWarning(false)
    }

    const handleDeleteNow = () => {
        // TODO: Implement delete inactive patients
        setShowInactiveWarning(false)
    }

    const handleCancelDeletion = () => {
        // TODO: Cancel scheduled deletion
        setShowInactiveWarning(false)
    }

    return (
        <View style={{ flex: 1 }}>
            {
                appointmentData &&
                <>
                    <View style={{ flex: 1 }}>
                        <PatientSearch
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            error={hasSearchError}
                        />
                        <PatientList
                            patients={patients}
                            searchQuery={searchQuery}
                            sortOption={sortOption}
                            appointments={appointmentData ?? []}
                            onPatientPress={handlePatientPress}
                            isLoading={isLoading}
                            isRefreshing={isRefreshing}
                            onRefresh={() => {}}
                            searchError={hasSearchError ? validation.errorMessage : undefined}
                            ListHeaderComponent={
                                <PatientSort selectedOption={sortOption} onSelect={setSortOption} />
                            }
                        />
                    </View>
                </>
            }

            {/* Inactive Patients Warning Modal */}
            <Modal
                visible={showInactiveWarning}
                transparent
                animationType="fade"
                onRequestClose={handleCloseWarning}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        {/* Warning Icon */}
                        <View style={styles.warningIconContainer}>
                        </View>

                        {/* Message */}
                        <Text style={styles.modalTitle}>Внимание! Через 7 дней</Text>
                        <Text style={styles.modalMessage}>
                            будут удалены карточки{"\n"}
                            пациентов, не посещавших{"\n"}
                            приём более 2 лет:
                        </Text>

                        {/* Patient Names */}
                        <Text style={styles.patientsList}>
                            {inactivePatients
                                .slice(0, 2)
                                .map((patient) => "Владимир Владимирович Петров")
                                .join(", ")}
                        </Text>

                        {/* Buttons */}
                        <View style={styles.modalButtonsContainer}>
                            <TouchableOpacity
                                onPress={handleCloseWarning}
                                style={styles.modalButton}
                                activeOpacity={0.8}
                            >
                                <LinearGradient
                                    colors={["#56B5B3", "#1F7876"]}
                                    start={{ x: 0.5, y: 0 }}
                                    end={{ x: 0.5, y: 1 }}
                                    style={styles.modalButtonGradient}
                                >
                                    <Text style={styles.modalButtonText}>Хорошо</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={handleDeleteNow}
                                style={styles.modalButton}
                                activeOpacity={0.8}
                            >
                                <LinearGradient
                                    colors={["#F55862", "#D7131F"]}
                                    start={{ x: 0.5, y: 0 }}
                                    end={{ x: 0.5, y: 1 }}
                                    style={styles.modalButtonGradient}
                                >
                                    <Text style={styles.modalButtonText}>Удалить сейчас</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={handleCancelDeletion}
                                style={styles.modalCancelButton}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.modalCancelButtonText}>
                                    Отменить удаление
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    // Inactive Patients Warning Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 24,
        width: "85%",
        maxWidth: 400,
        alignItems: "center",
    },
    warningIconContainer: {
        marginBottom: 16,
    },
    modalTitle: {
        fontFamily: "Montserrat-Medium",
        fontSize: 16,
        color: "#222221",
        textAlign: "center",
        marginBottom: 8,
    },
    modalMessage: {
        fontFamily: "Montserrat-Regular",
        fontSize: 14,
        color: "#424242",
        textAlign: "center",
        marginBottom: 12,
        lineHeight: 20,
    },
    patientsList: {
        fontFamily: "Montserrat-Bold",
        fontSize: 14,
        color: "#222221",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 24,
    },
    modalButtonsContainer: {
        width: "100%",
        gap: 12,
    },
    modalButton: {
        width: "100%",
        borderRadius: 12,
        overflow: "hidden",
    },
    modalButtonGradient: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    modalButtonText: {
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        color: "#FFFFFF",
        textAlign: "center",
    },
    modalCancelButton: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        backgroundColor: "#F4F4F4",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    modalCancelButtonText: {
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        color: "#424242",
        textAlign: "center",
    },
})
