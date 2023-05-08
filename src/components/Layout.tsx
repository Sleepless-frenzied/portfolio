import React, {FC, ReactNode} from "react";



const Layout: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <main className="">
            {/*<Nav/>*/}
            <div className={""}>
                {/*<Nav/>*/}
                {children}
            </div>
        </main>
    );
};

export default Layout;