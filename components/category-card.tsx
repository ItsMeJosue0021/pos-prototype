// import React from "react";

// type Props = {
//     icon: React.ReactElement<any>;
//     label: string;
//     isActive?: boolean;
// }

// const CategoryCard = ({icon, label, isActive} : Props) => {

//     const styledIcon = React.cloneElement(icon, {
//         className: "text-red-500 transform transition-colors duration-300",
//     });

//     return (
//         <div className="min-w-28 w-28 min-h-24 h-24 bg-white rounded-xl border border-gray-200 flex flex-col items-center justify-center gap-1 hover:border-red-500 hover:bg-red-50 group transform transition-colors duration-300 cursor-pointer ring-2 ring-transparent hover:ring-red-200">
//             <div className="p-3 bg-red-50 group-hover:bg-red-100 rounded-full transform transition-colors duration-300">
//                 {styledIcon}
//             </div>
//             <p className="text-sm group-hover:text-red-500 transform transition-colors duration-300">
//                 {label}
//             </p>
//         </div>
//     )
// }

// export default CategoryCard;

import React from "react";

type Props = {
    icon: React.ReactElement<any>;
    label: string;
    isActive?: boolean;
};

const CategoryCard = ({ icon, label, isActive }: Props) => {
    const styledIcon = React.cloneElement(icon, {
        className: `transform transition-colors duration-300 ${
            isActive ? "text-red-600" : "text-red-500"
        }`,
    });

    return (
        <div
            className={`
                min-w-28 w-28 min-h-24 h-24 rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer
                transform transition-colors duration-300 ring-2 
                ${isActive
                    ? "bg-red-50 border-red-500 ring-red-200"
                    : "bg-white border-gray-200 hover:border-red-500 hover:bg-red-50 hover:ring-red-200 ring-transparent"
                }
            `}
        >
            <div
                className={`
                    p-3 rounded-full transform transition-colors duration-300
                    ${isActive ? "bg-red-100" : "bg-red-50 group-hover:bg-red-100"}
                `}
            >
                {styledIcon}
            </div>
            <p
                className={`
                    text-sm transform transition-colors duration-300
                    ${isActive ? "text-red-600" : "text-gray-700 group-hover:text-red-500"}
                `}
            >
                {label}
            </p>
        </div>
    );
};

export default CategoryCard;
