import Anime from "../models/Anime.js"
export const addAnime =async (req, res) => {
    try {
        const {name, description,episodes, rating} = req.body
        const newAnime = new Anime({
            name,
            description,
            rating,
            episodes,
        })
        await newAnime.save()
        res.status(200).json(newAnime)
    } catch (error) {
        console.log('Error in addAnime Controller',error.meesage)
        res.status(500).json({message: 'Error in addAnime Controller',error : error.message})
    }
}
export const getAnime =async (req, res) => {
    try {
        const {id} = req.params
        const anime = await Anime.findById(id)
        res.status(200).json(anime)
    } catch (error) {
        console.log('Error in getAnime Controller',error.meesage)
        res.status(500).json({message: 'Error in getAnime Controller',error : error.message})
    }
}
export const getAllAnime = async (req, res) => {
    try {
        const animes = await Anime.find()
        res.status(200).json(animes)
    } catch (error) {
        console.log('Error in getAllAnime Controller', error.message)
        res.status(500).json({message: 'Error in getAllAnime Controller', error: error.message})
    }
}