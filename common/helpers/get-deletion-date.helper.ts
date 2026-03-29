import type { IPatient } from '../../features';
import type { TNullable } from '../types';

export function getDeletionDate(patient: IPatient): TNullable<Date> {
    if (!patient.updatedAt) return null;
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);

    if (patient.updatedAt < twoYearsAgo) {
        const deletionDate = new Date(patient.updatedAt);
        deletionDate.setFullYear(deletionDate.getFullYear() + 2);
        return deletionDate;
    }

    return null;
}