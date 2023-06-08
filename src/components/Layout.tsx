import React, {FC, ReactNode} from "react";



const Layout: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <main className="h-screen p-4 sm:p-8 xl:p-16 ">
            {children}
        </main>

    );
};

export default Layout;