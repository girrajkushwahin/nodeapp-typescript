import { Request, Response, NextFunction } from 'express';

type callback = (req: Request, res: Response) => Promise<any>; // find correct return type for "Promise<any>" here according to controller functions

export const asyncHandler = (cb: callback) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await cb(req, res);
        } catch (err) {
            next(err);
        }
    }
}
