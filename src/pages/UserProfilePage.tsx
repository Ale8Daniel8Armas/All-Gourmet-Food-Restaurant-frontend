import { useGetMyUser, useUpdateMyUser } from '@/api/MyUserApi';
import UserProfileForm from '@/forms/user-profile-form/UserProfileForm';

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if(isGetLoading) {
    return <span>Cargando...</span>
  }

  if (!currentUser) {
    return <span>Inabilitado la carga del perfil de usuario</span>
  }


  return <UserProfileForm 
  currentUser={currentUser}
  onSave={updateUser} 
  isLoading={isUpdateLoading} />;
};

export default UserProfilePage;