import React from "react";

type Props = {
    icon: React.ReactElement<any>;
    label: string;
    isActive?: boolean;
};

const CategoryCard = ({ icon, label, isActive }: Props) => {
    const styledIcon = React.cloneElement(icon, {
        className: `transform transition-colors duration-300 ${
            isActive ? "text-blue-700" : "text-gray-600"
        }`,
    });

    return (
        <div
            className={`
                min-w-28 w-28 min-h-24 h-24 rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer
                transform transition-colors duration-300 ring-2 
                ${isActive
                    ? "bg-blue-50 border-blue-500 ring-blue-200"
                    : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-100 hover:ring-gray-200 ring-transparent"
                }
            `}
        >
            <div
                className={`
                    p-3 rounded-full transform transition-colors duration-300
                    ${isActive ? "bg-blue-100" : "bg-gray-50 group-hover:bg-gray-100"}
                `}
            >
                {styledIcon}
            </div>
            <p
                className={`
                    text-sm transform transition-colors duration-300
                    ${isActive ? "text-blue-600" : "text-gray-700 group-hover:text-blue-500"}
                `}
            >
                {label}
            </p>
        </div>
    );
};

export default CategoryCard;
