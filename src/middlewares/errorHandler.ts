import { Request, Response, NextFunction } from "express";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
    console.log(err);
    // console.error(err.stack); // This JS property returns string representing the location in the code where the error occurred.
    res.status(500).json({ error: 'Internal Server Error' });
    next();
}