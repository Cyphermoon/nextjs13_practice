import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import Link from 'next/link'
import React from 'react'

const RepoPage = ({ params: { name } }) => {
    return (
        <div className='card'>
            <Link href={"/code/repos"} className="btn btn-black" >Back to project</Link>
            <Repo name={name} />
            <RepoDirs name={name} />
        </div>
    )
}

export default RepoPage