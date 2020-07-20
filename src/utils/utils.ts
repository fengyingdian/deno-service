/*
 * File: utils.ts
 * File Created: Wednesday, 25th December 2019 6:21:28 pm
 * Author: ChegCheng Wan <chengcheng.st@gmail.com>
 */
import { ServerError, ServerErrorConstructor } from './errors.ts';
import { Response } from 'https://deno.land/x/denotrain@v0.5.0/mod.ts';

export const successResponse = (res: Response, payload: any) => {
  res.setBody({
    status: 0,
    ...payload,
  });
};

export const errorTrigger = (constructor: ServerErrorConstructor, message?: string, details?: any) => {
  throw new constructor(message, details);
};

export const errorResponse = (req: any, res: any) => (error: ServerError) => {
  const { path } = req;
  const { message } = error;
  console.error(`Error requesting ${path}, ${message}`);
  res.setBody({
    status: error.code || -1,
    message: error.message,
    details: error.details,
  });
};
