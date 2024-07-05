import { Schema, model, Document, Model } from "mongoose";

interface IOrder {
    description: string,
    amount: number
}

interface ICustomerDoc extends Document {
    name: string,
    industry?: string,
    // orders: [
    //     {
    //         description: String,
    //         amount: Number
    //     }
    // ],
    orders: IOrder[]
}

const customerSchema: Schema<ICustomerDoc> = new Schema<ICustomerDoc>({
    name: {
        type: String,
        required: true
    },
    industry: String,
    orders: [
        {
            description: String,
            amount: Number
        }
    ]
}, { timestamps: true })

const Customer: Model<ICustomerDoc> = model<ICustomerDoc>("customer", customerSchema);

export default Customer;
export type { ICustomerDoc } // when 'isolatedModules' is enabled, we need to use 'type' keyword for exporting interfaces & types

// if we don't want '_id' field for nested documents in orders array then we can define separate schema for nested documents and set '_id' to false there. Then we can use that schema inside orders array in the main scehma.