import Link from 'next/link'
import React from 'react'

async function fetchCourses() {
    const response = await fetch("http://localhost:3000/api/courses")
    return response.json()
}

const Courses = async () => {
    const courses = await fetchCourses()
    return (
        <div className='courses'>
            {
                courses.map((course) => {
                    return (
                        <div key={course.id} className="cards">
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