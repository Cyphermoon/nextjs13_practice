import Link from 'next/link'
import React from 'react'

async function fetchDirs(name) {
    const dirs = await fetch(`https://api.github.com/repos/Cyphermoon/${name}/contents`, {
        next: {
            revalidate: 60
        }
    })

    return dirs.json()
}

const RepoDirs = async ({ name }) => {
    const contents = await fetchDirs(name)
    const dirs = contents.filter((dir) => dir.type === "dir")

    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dirs.map((dir) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>
                            {dir.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default RepoDirs