import mongoose from "mongoose"
import moment from "moment-timezone"

const movieSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  imageLogo:{
    type: String,
    required: true,
  },
  imagePoster:{
    type: String,
    required: true,
  },
  imageBanner:{
    type: String,
    required: true,
  },
  linkSite:{
    type: String,
    required: true,
  },
  linkVideo:{
    type: String,
    required: true,
  },
  category:{
    type: String,
    required: true,
  },
  favorite:{
    type: Boolean,
    required: true,
  },
  createdAt:{
    type: String,
    default: () => moment().tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss'),
  }
})

export default mongoose.model("Movie", movieSchema)