import mongoose from "mongoose"
import moment from "moment-timezone"

const categorySchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true,
  },
  createdAt:{
    type: String,
    default: () => moment().tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss'),
  }
})

export default mongoose.model("Category", categorySchema)