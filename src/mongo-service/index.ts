/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: break <jixueqing@flipboard.cn>             +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/07/17 18:06:25 by break             #+#    #+#             */
/*   Updated: 2020/07/17 18:12:25 by break            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import { ClientOptions } from "https://deno.land/x/mongo@v0.8.0/ts/client.ts";

import {
  serviceMongoHosts, serviceMongoUserName, serviceMongoPassWord,
} from '../constants/index.ts';

export const client = new MongoClient();

export const options = <ClientOptions> {
  hosts: serviceMongoHosts,
  username: serviceMongoUserName,
  password: serviceMongoPassWord,
  directConnection: true,
};

export default {};



