/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   AnswerBookUsers.ts                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: break <jixueqing@flipboard.cn>             +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/07/17 19:02:56 by break             #+#    #+#             */
/*   Updated: 2020/07/20 17:22:12 by break            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { MongoRepository } from "https://deno.land/x/mongo_repository@v0.8.0/mod.ts";
import { Database, ObjectId } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import { connectDatabase } from '../connect.ts';

const database = connectDatabase('flimi');

export type QA = {
  question: string,
  answer: string,
  date: string,
}

export type UserType = 'wechat' | 'flipboard';

export class answer_book_users {
  readonly _id: ObjectId | undefined;
  readonly nickname: string;
  readonly openid: string;
  readonly flipid: string;
  readonly userType: UserType;
  public qas: Array<QA>;

  constructor(
    nickname: string,
    openid: string,
    flipid: string,
    userType: UserType,
  ) {
    this.nickname = nickname;
    this.openid = openid;
    this.flipid = flipid;
    this.userType = userType;
    this.qas = [];
  }
}

class AnswerBookUserCollection extends MongoRepository<answer_book_users> {
  constructor(db: Database) {
    super(db, answer_book_users);
  }
};

export const AnswerBookUsers = new AnswerBookUserCollection(database);

export default {};
