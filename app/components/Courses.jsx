import Link from 'next/link'
import React from 'react'


const Courses = async ({ courses }) => {

    return (
        <div className='courses'>
            {
                courses.map((course) => {
                    return (
                        <div key={course.id} className="card">
                            <h2>{course.title}</h2>
                            <small>Level: {course.level}</small>
                            <p>{course.description}</p>
                            <Link href={course.link} target="_blank" className='btn'>Go to course</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Courses