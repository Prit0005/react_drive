import React, { useState } from 'react'

export default function Search() {

    const [fruits, setfruits] = useState("")

    const fruitname = [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Grapes",
        "Pineapple",
        "Pomegranate",
        "Avocado",
        "Coconut",
        "Papaya",
        "Raspberry",
        "Fig",
        "Kiwi",
        "Cherry"
    ]
    const filteriteams = fruitname.filter(items => items.toLowerCase().includes(fruits.toLowerCase()))
    return (
        <>
            <p>Search fruit name</p>
            <input type="text" name="" value={fruits} id="" onChange={e => setfruits(e.target.value)} />


            {fruits && (
                <ul>
                    {filteriteams.length > 0 ? (
                        filteriteams.map((result) => (
                            <li>{result}</li>
                        ))
                    ) :
                        (<li>No items found</li>)
                    }
                </ul>
            )}
        </>
    )
}
