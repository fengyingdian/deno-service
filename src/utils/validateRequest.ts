/*
 * File: validateRequest.ts
 * File Created: Thursday, 2nd January 2020 4:25:13 pm
 * Author: ChegCheng Wan <chengcheng.st@gmail.com>
 */
import Schema from 'https://denoporter.sirjosh.workers.dev/v1/deno.land/x/computed_types/src/index.ts';

import { RequestValidationError } from './errors.ts';
import { errorTrigger } from './utils.ts';

/**
 * * Validate request input parameters
 * @param {Any} value - value to validate
 * @param {Schema} schema - Schema
 * @returns {Object} result - converted value
 * @throws RequestValidationError
 */
export const validateRequest = (value: any, schema: any, onError?: (e: any) => void) => {
  const validator = schema.destruct();
  const [error, result] = validator({
    ...value,
  });
  if (error) {
    if (onError) {
      onError(error);
    }
    errorTrigger(RequestValidationError, error.message);
  }
  return result;
}

