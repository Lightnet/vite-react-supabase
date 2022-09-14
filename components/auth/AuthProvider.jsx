


import { createContext, useEffect, useMemo, useState } from "react";
import supabase from "../../libs/supabaseclient";

export const AuthContext = createContext({authUser:null});

function AuthProvider(props){

  const [authUser, setAuthUser] = useState(null)
  const [session, setSession] = useState(null)

  useEffect(() => {
    console.log("TOP AUTH CHECKS...")
    //check if browser store on local database
    const _session = supabase.auth.session();
    console.log(_session)
    if(_session){
      setSession(_session)
    }
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session)
      setSession(session)
    })
  }, [])

  const value = useMemo(() => ({
    authUser, setAuthUser,
    session, setSession
  }), [
    authUser,
    session
  ]);
  
  return (<AuthContext.Provider value={value}>
    {props.children}
  </AuthContext.Provider>)
}

export default AuthProvider;