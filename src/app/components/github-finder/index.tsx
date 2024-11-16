"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import User from "./user";
import { Skeleton } from "@mui/material";

export interface UserDataType {
    name: string;
    login: string;
    followers: number;
    following: number;
    htmlUrl: string;
    avatarUrl: string;
}

const GithubFinder = () => {
    const [search, setSearch] = useState("cchiem");
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<UserDataType>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchGithubUser();
    };

    async function fetchGithubUser() {
        try {
            setLoading(true);
            const res = await fetch(`https://api.github.com/users/${search}`);
            const data = await res.json();
            if (data) {
                setUserData({
                    name: data.name,
                    login: data.login,
                    followers: data.followers,
                    following: data.following,
                    htmlUrl: data.html_url,
                    avatarUrl: data.avatar_url,
                });
                setLoading(false);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchGithubUser();
    }, []);

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-10">
                <form className="flex gap-4">
                    <input
                        type="text"
                        placeholder="find someone"
                        value={search}
                        onChange={(e) => handleChange(e)}
                        className="rounded-md p-2"
                    />
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 py-2 px-4 rounded-lg text-center text-white hover:bg-blue-700"
                    >
                        Search
                    </button>
                </form>
                {loading ? (
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-4">
                            <Skeleton
                                className="rounded-full outline outline-2 outline-gray-500"
                                width={300}
                                height={300}
                                variant="rectangular"
                                animation="wave"
                            />
                            <div>
                                <Skeleton
                                    variant="text"
                                    sx={{ fontSize: "1rem" }}
                                    animation="wave"
                                />
                                <Skeleton
                                    variant="text"
                                    sx={{ fontSize: "1rem" }}
                                    animation="wave"
                                />
                            </div>

                            <Skeleton variant="rectangular" animation="wave" />
                        </div>
                    </div>
                ) : (
                    <User userData={userData} />
                )}
            </div>
        </div>
    );
};

export default GithubFinder;
