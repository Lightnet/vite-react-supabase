/*
  Project Name: vite-react-supabase
  License: MIT
  Created by: Lightnet
*/

import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <div>
      <Link to="/">Home</Link><span> | </span>
      <Link to="/about">About</Link>
    </div>
  );
}