import React from 'react'

const FilterButton = () => {
    return (
        <div  className="flex justify-center" >
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Apply Filters 🎯
            </button>
        </div>
    )
}

export default FilterButton