import AsyncStorage from "@react-native-async-storage/async-storage";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const errorHandling = (error: FetchBaseQueryError) => {
    const errorCode = Number(error.status);

    if (errorCode === 401) {
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('u_hash');
        AsyncStorage.removeItem('u_a_role');
    }
};
