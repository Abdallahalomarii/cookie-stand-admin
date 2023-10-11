'use client';
import Header  from "./Header";
import Head  from "./Head";
import Footer  from "./Footer";
import Main from "./Main";
import { useState } from "react";
function CookieStandAdmin(){

    const [length, setLength] = useState(0);

    const handleCookieSalmonLength = (data) =>{
        setLength(data);
    }
    return(
    <>
        {/* <Head></Head> */}
        <Header></Header>
        <Main cookieSalmonsLength={handleCookieSalmonLength}></Main>
        <Footer
        length= {length}
        ></Footer>
        </>
    );
}
export default CookieStandAdmin;