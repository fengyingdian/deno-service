/*
import { ServerError } from './errors';
 * File: errors.ts
 * File Created: Wednesday, 25th December 2019 6:27:31 pm
 * Author: ChegCheng Wan <chengcheng.st@gmail.com>
 */

export interface ServerErrorConstructor {
  new (message?: string, details?: any): ServerError;
}

export interface ServerError extends Error {
  code: number;
  details?: any;
}

export class ServerException implements ServerError {
  name = 'ServerException';

  code = 1;

  constructor(public message: string = 'unexpected server error', public details?: any) {}
}

export class RequestValidationError implements ServerError {
  name = 'RequestValidationError';

  code = 2;

  constructor(public message: string = 'request not valid', public details?: any) {}
}

export class UnauthorizedError implements ServerError {
  name = 'UnauthorizedError';

  code = 3;

  constructor(public message: string = 'you are not authorized to access', public details?: any) {}
}

export class WIPError implements ServerError {
  name = 'WorkInProgressError';

  code = 10;

  constructor(public message = 'content you request is still work in progress', public details?: any) {}
}

export class MongoServerError implements ServerError {
  name = 'MongoServerError';

  code = 20;

  constructor(public message = 'mongo server error', public details?: any) {}
}
