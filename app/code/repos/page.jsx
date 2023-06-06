import Link from 'next/link';
import React from 'react'
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa'

async function fetchRepos() {
    const repos = await fetch("https://api.github.com/users/Cyphermoon/repos");

    return repos.json()
}

const ReposPage = async () => {
    const repos = await fetchRepos()

    return (
        <div>
            <h1>Repositories</h1>
            <ul className="repo-list">
                {
                    repos.map((repo, idx) => (
                        <li key={repo.id}>
                            <Link href={`/code/repos/${repo.name}`}>
                                <h3>{repo.name}</h3>
                                <p>{repo.description}</p>
                                <div className="repo-details">
                                    <span>
                                        <FaStar /> {repo.stargazers_count}
                                    </span>
                                    <span>
                                        <FaCodeBranch /> {repo.forks_count}
                                    </span>
                                    <span>
                                        <FaEye /> {repo.watchers_count}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ReposPage