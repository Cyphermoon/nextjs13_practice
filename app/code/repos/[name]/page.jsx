import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import Link from 'next/link'
import React from 'react'
import { Suspense } from 'react'

const RepoPage = ({ params: { name } }) => {
    return (
        <div className='card'>
            <Link href={"/code/repos"} className="btn btn-black" >Back to project</Link>
            <Suspense fallback={<div>loading repos....</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>loading dirs.....</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}

export default RepoPage