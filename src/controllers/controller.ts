import { asyncHandler } from "../utils/asyncHandler.js"
import Customer, { ICustomerDoc } from "../models/customer.js"


export const controller1 = asyncHandler(async (req, res) => {
    return res.status(200).send("<h1>Node.js-TypeScript application</h1>")
})

export const controller2 = asyncHandler(async (req, res) => {
    const customer: ICustomerDoc = new Customer({
        name: "Girraj Kushwah",
        industry: "Computer Science",
        orders: [
            {
                description: "learning Node-TypeScript",
                amount: 10000
            }
        ]
    })
    const data: ICustomerDoc = await customer.save();
    return res.status(200).json({ success: true, message: "data added in DB", data });
})
