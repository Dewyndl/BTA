import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IPatientCardProps } from "./interfaces";
import { formatBirthDate, formatDeletionDate, getCardGradientType, getDeletionDate, getFullName, getGradientColors } from '../../../common';
import { BellIcon } from "../../../assets";

const PatientCard = React.memo(function PatientCard({
  patient,
  onPress,
  nearestAppointment,
}: IPatientCardProps) {
  const gradientType = getCardGradientType(patient);
  const gradientColors = getGradientColors(gradientType);
  const fullName = getFullName(patient);
  const birthDateStr = formatBirthDate(patient.birthDate);
  const deletionDate = getDeletionDate(patient);
  const formattedPhone = patient.phone || "";

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
        <View style={styles.leftSection}>
          <View style={styles.imageContainer}>
            {patient.imageUrl ? (
              <Image
                source={
                  typeof patient.imageUrl === "number"
                    ? patient.imageUrl
                    : { uri: patient.imageUrl }
                }
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.imagePlaceholder} />
            )}
          </View>
        </View>

        <View style={styles.rightSection}>
          <View style={styles.headerRow}>
            <Text style={styles.name} numberOfLines={1}>
              {fullName}
            </Text>
            {patient.refuseReminders && (
              <View style={styles.bellIconContainer}>
                <BellIcon />
              </View>
            )}
          </View>

          <View style={styles.infoRow}>
            {birthDateStr ? (
              <Text style={styles.birthDate}>{birthDateStr}</Text>
            ) : (
              <View style={styles.emptySpace} />
            )}
            {formattedPhone ? (
              <Text style={styles.phone}>{formattedPhone}</Text>
            ) : null}
          </View>

          {deletionDate ? (
            <View style={styles.deletionRow}>
              <Text style={styles.deletionLabel}>
                Карточка будет удалена:
              </Text>
              <Text style={styles.deletionDate}>
                {formatDeletionDate(deletionDate)}
              </Text>
            </View>
          ) : (
            <View style={styles.appointmentRow}>
              <Text style={styles.appointmentLabel}>Ближайший прием:</Text>
              <Text style={styles.appointmentDate}>{nearestAppointment ?? '-'}</Text>
            </View>
          )}
        </View>
      </View>
      </LinearGradient>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginBottom: 10,
    marginHorizontal: 10,
    overflow: "hidden",
  },
  gradient: {
    borderRadius: 12,
    padding: 12,
  },
  content: {
    flexDirection: "row",
  },
  leftSection: {
    marginRight: 12,
  },
  imageContainer: {
    width: 60,
    height: 80,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#E0E0E0",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imagePlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E0E0E0",
  },
  rightSection: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  name: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#222221",
    letterSpacing: -0.48,
    flex: 1,
    marginRight: 8,
  },
  bellIconContainer: {
    marginLeft: "auto",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  birthDate: {
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    color: "#1F7876",
    letterSpacing: -0.36,
  },
  phone: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "#222221",
    letterSpacing: -0.42,
    fontWeight: "600",
  },
  emptySpace: {
    flex: 1,
  },
  deletionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  deletionLabel: {
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    color: "#d7131f",
    letterSpacing: -0.36,
  },
  deletionDate: {
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    color: "#d7131f",
    letterSpacing: -0.36,
    fontWeight: "600",
  },
  appointmentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  appointmentLabel: {
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    color: "#222221",
    letterSpacing: -0.36,
  },
  appointmentDate: {
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    color: "#222221",
    letterSpacing: -0.36,
    fontWeight: "600",
  },
});

export default PatientCard;