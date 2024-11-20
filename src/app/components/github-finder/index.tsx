"use client";

import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import User from "./user";
import { useFetch } from "@/app/hooks/hooks";

export interface UserDataType {
    name: string;
    login: string;
    followers: number;
    following: number;
    html_url: string;
    avatar_url: string;
}

const GithubFinder = () => {
    const [search, setSearch] = useState("cchiem");
    const [query, setQuery] = useState("cchiem");
    const [data, loading] = useFetch<UserDataType>(
        `https://api.github.com/users/${query}`
    );
    console.log(data);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setQuery(search); // Triggers a new fetch by updating the query
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-10 my-10">
                <form className="flex gap-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Find someone"
                        value={search}
                        onChange={handleChange}
                        className="rounded-md p-2"
                    />
                    <button
                        type="submit"
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
                            <Skeleton
                                variant="rounded"
                                animation="wave"
                                width={300}
                                height={100}
                            />
                        </div>
                    </div>
                ) : (
                    data && (
                        <User
                            userData={{
                                name: data.name,
                                login: data.login,
                                followers: data.followers,
                                following: data.following,
                                html_url: data.html_url,
                                avatar_url: data.avatar_url,
                            }}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default GithubFinder;
