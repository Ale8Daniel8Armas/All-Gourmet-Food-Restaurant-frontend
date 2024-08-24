import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button"
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {

    //Variable que parametriza el acceso con Auth
    const {  loginWithRedirect, isAuthenticated  } = useAuth0();

    return(
        <span className = "flex space-x-2 items-center">
                {isAuthenticated ? (<UsernameMenu /> ) : ( 
                <Button
                  variant="ghost"
                  className="font-bold hover:text-orange-500 hover:bg-white"
                  //Al dar click en este botón, se redirigen al tocken para iniciar sesión
                  onClick={async () => await loginWithRedirect()}
                  >
                    Iniciar Sesión
                </Button>
                )}
        </span>
    )
}

export default MainNav;