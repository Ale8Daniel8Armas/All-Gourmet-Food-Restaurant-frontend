import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getMyUserRequest = async (): Promise<User> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch (`${API_BASE_URL}/api/my/user`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type" : "application/json",
            },       
        });

        if(!response.ok){
            throw new Error("Fallo al conectar (fetch) con el usuario");
        }

        return response.json();
    };

    const {
        data: currentUser, 
        isLoading, 
        error,
    } = useQuery("fetchCurrentUser", getMyUserRequest);

    if(error) {
        toast.error(error.toString());
    }

    return {
         currentUser, isLoading
    };
};

type CreateUserRequest = {
    auth0Id: string;
    email: string;
};

export const userCreateMyUser = () => {

    const { getAccessTokenSilently } = useAuth0();
    const createMyUserRequest = async (user: CreateUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",  
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("Fallo al crear el nuevo usuario");
        }
    };

    const { 
        mutateAsync: createUser, 
        isLoading, 
        isError, 
        isSuccess,
    } = useMutation(createMyUserRequest);

    return {
        createUser,
        isLoading,
        isError,
        isSuccess,
    };
};

type UpdateMyUserRequest = {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
};

export const useUpdateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const updateMyUserRequest = async (formData: UpdateMyUserRequest) => {
        const accessToken = await getAccessTokenSilently();
    
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
    
        if (!response.ok) {
            const errorMessage = await response.text(); 
            console.error(`Error ${response.status}: ${response.statusText}`);
            console.error(`Mensaje de error: ${errorMessage}`);
    
            throw new Error("Fallo al actualizar el usuario");
        }
    };
    

    const { 
        mutateAsync: updateUser, 
        isLoading, 
        isSuccess, 
        isError, 
        error, 
        reset, 
    } = useMutation(updateMyUserRequest);

    if(isSuccess){
        toast.success("Perfil de Usuario Actualizado!");
    }

    if(error){
        toast.error(error.toString());
        reset();
    }

    return { updateUser, isLoading, isSuccess, isError, error, reset };
};
