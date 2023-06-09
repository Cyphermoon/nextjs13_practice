"use client"
import { useEffect, useState } from "react"
import Courses from "./components/Courses"
import CourseSearch from "./components/CourseSearch"
import SpinnerLoader from "./loading"


export default function HomePage() {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function fetchCourses() {
      const response = await fetch("http://localhost:3000/api/courses")
      const courses = await response.json()

      setCourses(courses)
      setLoading(false)
    }

    fetchCourses()

  }, [])


  return (
    <>
      <h1>Welcome to cypher land</h1>
      <CourseSearch getSearchResult={(result) => setCourses(result)} />
      {!loading ? <Courses courses={courses} /> : <SpinnerLoader />}

    </>
  )
}
