import { asyncHandler } from "../utils/asyncHandler.js"


export const controller1 = asyncHandler(async (req, res) => {
    return res.status(200).send("<h1>Node.js-TypeScript application</h1>")
})
