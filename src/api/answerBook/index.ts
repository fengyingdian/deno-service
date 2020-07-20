/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: break <jixueqing@flipboard.cn>             +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/07/20 10:24:38 by break             #+#    #+#             */
/*   Updated: 2020/07/20 18:29:16 by break            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Router, Request, Response } from '../../denotrain/index.ts';
import Schema, { string } from 'https://denoporter.sirjosh.workers.dev/v1/deno.land/x/computed_types/src/index.ts';
import { validateRequest } from '../../utils/validateRequest.ts';
import { successResponse, errorResponse } from '../../utils/response.ts';
import { answer_book_users, AnswerBookUsers } from '../../mongo-service/models/AnswerBookUsers.ts';
import { MongoServerError } from '../../utils/errors.ts';

export const api = new Router();

//
// ────────────────────────────────────────────────────────────────────────  ──────────
//   :::::: A D D   N E W   Q U E S T I O N : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────
//

//
// ─── SCHEMA ───────────────────────────────────────────────────────────
//
const questionSchema = Schema({
  nickname: string.trim().normalize().between(1, 20),
  openid: string.optional(),
  flipid: string.optional(),
  userType: Schema.either('wechat' as const, 'flipboard' as const),
  question: string.trim().normalize().between(1, 60),
  answer: string.trim().normalize().between(1, 100),
});

//
// ─── RESPONSE ───────────────────────────────────────────────────────────────────
//
const questionResponse = async (
  req: Request, res: Response, user: answer_book_users, question: string, answer: string,
) => {
  user.qas.push({
    question,
    answer,
    date: new Date().toISOString(),
  });
  const result = await AnswerBookUsers.save(user);
  if (result.$oid) {
    return successResponse(res, {
      data: {
        ...user,
      }
    });
  }
  errorResponse(req, res)(new MongoServerError);
}

//
// ─── API ────────────────────────────────────────────────────────────────────────
//
api.post('/actions/add-new-question', ({ req, res }) => Promise.resolve()
  .then(async () => {
    const {
      nickname = '', openid = '', flipid = '', userType = '', question = '', answer = '',
    } = validateRequest(({
        ...req.query,
        ...req.params,
        ...req.body,
      }),
      questionSchema,
    );

    // check if user already exit
    const user = await AnswerBookUsers.findOne(userType === 'wechat' ? { openid } : { flipid });
    if (user) {
      return questionResponse(req, res, user, question, answer);
    }

    // user not existed
    const newUser = new answer_book_users(nickname, openid, flipid, userType);

    return questionResponse(req, res, newUser, question, answer);
  })
  .catch(errorResponse(req, res)));

//
// ────────────────────────────────────────────────────────────────────────────  ──────────
//   :::::: G E T   U S E R   Q U E S T I O N S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────
//

//
// ─── SCHEMA ─────────────────────────────────────────────────────────────────────
//
const userSchema = Schema({
  openid: string.optional(),
  flipid: string.optional(),
  userType: Schema.either('wechat' as const, 'flipboard' as const),
})

//
// ─── API ────────────────────────────────────────────────────────────────────────
//
api.get('/actions/get-user-questions', ({ req, res }) => Promise.resolve()
  .then(async () => {
    const {
      openid = '', flipid = '', userType = '',
    } = validateRequest(({
        ...req.query,
        ...req.params,
      }),
      userSchema,
    );

    // check if user already exit
    const user = await AnswerBookUsers.findOne(userType === 'wechat' ? {
      openid,
    } : {
      flipid,
    });

    if (!user) {
      return errorResponse(req, res)(new MongoServerError);
    }

    successResponse(res, {
      data: {
        ...user,
      }
    });
  })
  .catch(errorResponse(req, res)));
