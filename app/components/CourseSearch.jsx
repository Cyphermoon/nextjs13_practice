"use client"
import React, { useState } from 'react'

const CourseSearch = ({ getSearchResult }) => {
    const [query, setQuery] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch(`/api/courses/search?query=${query}`)
        const courses = await res.json()

        getSearchResult(courses)

        setQuery("")
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                className='search-input'
                placeholder='Search for courses.....'
                value={query}
                onChange={(e) => setQuery(e.target.value)} />
            <button type='submit' className='btn'>Search</button>
        </form>
    )
}

export default CourseSearch