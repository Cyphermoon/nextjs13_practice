import React from 'react'
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa'
const fetchRepo = async function (name) {
    const repo = await fetch(`https://api.github.com/repos/Cyphermoon/${name}`, {
        next: {
            revalidate: 60
        }
    })

    return repo.json()
}

const Repo = async ({ name }) => {
    const repo = await fetchRepo(name)
    return (
        <>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="card-stats">
                <div className="card-stat">
                    <FaStar />
                    <span>{repo.stargazers_count}</span>
                </div>
                <div className="card-stat">
                    <FaCodeBranch />
                    <span>{repo.forks_count}</span>
                </div>
                <div className="card-stat">
                    <FaEye />
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </>
    )
}

export default Repo