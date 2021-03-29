import React, {useState, useEffect} from 'react'
import '../style.css'

// App de Meme Generator con HOOKS

function MemeGenerator() {

    const [values, setValues] = useState({
        topText: '',
        bottomText: '',
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    })

    useEffect(() => {
        const fetchData = () => {
            fetch("https://api.imgflip.com/get_memes")
              .then(response => response.json())
              .then(response => {
                 const {memes} = response.data
                 setValues(currentValues => ({
                     ...currentValues,
                     allMemeImgs: memes
                }))
            })
        }
        fetchData()
    }, [])

    const handleChange = (event) => {
        const {name, value} = event.target 
        setValues(currentValues => ({
            ...currentValues, 
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * values.allMemeImgs.length)
        const randMemeImg = values.allMemeImgs[randNum].url 

        setValues(currentValues => ({
            ...currentValues,
            randomImg: randMemeImg
        }))
    }

    return (
        <>
            <form className = "meme-form" onSubmit = {handleSubmit}>

                <input 
                    type = "text"
                    placeholder = "Top Text"
                    name = "topText"
                    value = {values.topText}
                    onChange = {handleChange}
                />

                <input 
                    type = "text"
                    placeholder = "Bottom Text"
                    name = "bottomText"
                    value = {values.bottomText}
                    onChange = {handleChange}
                />

                    <button>Gen</button>
                </form>
                <div className = "meme">

                    <img src = {values.randomImg} alt = "" />
                    <h2 className = "top">{values.topText}</h2>
                    <h2 className = "bottom">{values.bottomText}</h2>

                </div>

            </>
    )
}

export default MemeGenerator 