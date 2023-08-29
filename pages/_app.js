import { SessionProvider } from "next-auth/react";

function Myapp({Component, pageProps}){
    return <SessionProvider>
        <Component {...pageProps} />
    </SessionProvider>
}

export default Myapp