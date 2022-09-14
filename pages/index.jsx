/*
  Project Name: vite-react-supabase
  License: MIT
  Created by: Lightnet
*/

import { useState, useEffect, useContext } from 'react'
import NavMenu from "../components/NavMenu";

import Auth from "../components/auth/Auth";
import Account from "../components/auth/Account";
import {supabase} from "../libs/supabaseclient"
import { AuthContext } from '../components/auth/AuthProvider';

export default function Page(){
  //const [session, setSession] = useState(null)
  const {session, setSession} = useContext(AuthContext);

  //useEffect(() => {
    //supabase.auth.onAuthStateChange((_event, session) => {
      //setSession(session)
    //})
  //}, [])

  return (<>
    <NavMenu/>
    {!session ? (
      <Auth />
    ) : (
      <Account key={session.user.id} session={session} />
    )}
  </>)

}