import express from "express";
import { QueryController } from "../../controllers/queryController";
import { queryValidation } from "../../utils/queryValidation";


const dataRouter = express.Router()
const queryController = new QueryController
dataRouter.post('/query', async (req, res) => {
    try {

        console.log(req.body)
        const { error, value: body } = queryValidation(req.body)
        if (error) res.status(400).send(error.details[0].message)
        const response = await queryController.queryData(body)

        return res.status(response.code).send(response.data)
    } catch (error) {
        console.log(error)
        return res.status(error.code).send(error.message)
    }
})



export default dataRouter