import { errorHandling } from "./error-handling.helper";
import { rawBaseQuery } from "./raw-base-query.helper";

export const baseQueryWithErrorLogging: typeof rawBaseQuery = async (args, api, extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions);
    if (result.error?.status) {
        errorHandling(result.error);
        if (Number(result.error.status) === 401) {
            api.dispatch({ type: 'users/clearCurrentUser' });
        }
    }
    return result;
};
