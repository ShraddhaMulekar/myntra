import React from 'react'

const Filters = ({setQuery}) => {
    const handleFilter = (e)=>{
        e.preventDefault()

        const form = e.target

        const category = form.category.value
        const brand = form.brand.value
        const min = form.min.value
        const max = form.max.value

        let q = `?category=${category}&brand=${brand}&min=${min}&max=${max}`
        setQuery(q)
    }
  return (
    <form onSubmit={handleFilter}>
        <input type="text" name='category' placeholder='Category' />
        <input type="text" name='brand' placeholder='Brand' />
        <input type="text" name='min' placeholder='Min Price' />
        <input type="text" name='max' placeholder='Max Price' />
        <button>Apply</button>
    </form>
  )
}

export default Filters