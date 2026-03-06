import { useSelector } from "react-redux"
import { selectAccessToken, selectIsAuthenticated, selectUser } from "../selectors";
export const useAuth = () => {
    const user = useSelector(selectUser);
    const accessToken = useSelector(selectAccessToken);
    const isAuthenticated = useSelector(selectIsAuthenticated);

    return { user, accessToken, isAuthenticated };
}