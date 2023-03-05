import Image, {StaticImageData} from "next/image";
import React from "react";

interface AvatarProps {
    image: string | StaticImageData;
    name: string;
    title: string;
}

export const Avatar = ({image, name, title}: AvatarProps) => (
    <div className="flex items-center mt-8 space-x-3">
        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
            <Image
                src={image}
                width="40"
                height="40"
                alt="Avatar"
                placeholder="blur"
                className="container"
            />
        </div>
        <div>
            <div className="text-lg font-medium">{name}</div>
            <div className="text-gray-600 dark:text-gray-400">{title}</div>
        </div>
    </div>
);