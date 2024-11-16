import React from "react";
import { UserDataType } from ".";
import Image from "next/image";
const User = ({ userData }: { userData: UserDataType }) => {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col gap-4">
                <Image
                    className="rounded-full outline outline-2 outline-gray-500"
                    src={userData?.avatarUrl || ""}
                    width={300}
                    height={300}
                    alt={userData?.avatarUrl || ""}
                />
                <div>
                    <h1 className="font-bold text-3xl">{userData?.name}</h1>
                    <h2>{userData?.login}</h2>
                </div>
                <div className="flex gap-4 items-center">
                    <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                    >
                        <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
                    </svg>
                    <p>{userData?.followers} followers</p>
                    <p> . </p>
                    <p>{userData?.following} following</p>
                </div>
                <a
                    className="bg-blue-500 p-4 text-center rounded-lg my-4 text-white font-bold hover:cursor-pointer hover:bg-blue-700"
                    href={userData?.htmlUrl}
                    target="_blank"
                >
                    Profile URL
                </a>
            </div>
        </div>
    );
};

export default User;
