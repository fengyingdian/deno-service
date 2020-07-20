/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: break <jixueqing@flipboard.cn>             +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/07/17 16:31:41 by break             #+#    #+#             */
/*   Updated: 2020/07/17 18:12:25 by break            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import "https://deno.land/x/dotenv/load.ts";

const { get = () => {} } = Deno.env;

//
// ─── SERVICE MONGO ──────────────────────────────────────────────────────────────
//
export const serviceMongoHosts = JSON.parse(get('SERVICE_MONGO_HOSTS') || '[""]');

export const serviceMongoUserName = get('SERVICE_MONGO_USERNAME') || '';

export const serviceMongoPassWord = get('SERVICE_MONGO_PASSWORD') || '';

export default {};
