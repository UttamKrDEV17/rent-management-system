import { useDispatch } from "react-redux"
import { useRefreshMutation } from "../../features/auth/api/authApi";
import { useEffect, useState } from "react";
import { logout, setCredentials } from "../../features/auth/authSlice";


const useRefreshOnMount = () => {
    const dispatch = useDispatch();
    const [refresh] = useRefreshMutation();
    const [isRestoring,setIsRestoring] = useState(true);

    useEffect(()=>{
        const restoreSession = async () => {
            try {
                const data = await refresh().unwrap();
                const {accessToken, ...user } = data?.data || {};
                dispatch(setCredentials({accessToken,user}));
            } catch {
                dispatch(logout())
            } finally {
                setIsRestoring(false);
            }
        };

        restoreSession();
    }, []);
    return isRestoring;
};

export default useRefreshOnMount;