import React from "react";

export default function BaseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <body className="font-brsonoma text-small">
            {children}
        </body>
    )
}