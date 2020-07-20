/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: break <jixueqing@flipboard.cn>             +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/07/17 16:31:41 by break             #+#    #+#             */
/*   Updated: 2020/07/20 18:09:08 by break            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import "https://deno.land/x/dotenv/load.ts";

const { get = () => {} } = Deno.env;

//
// ─── SERVICE ────────────────────────────────────────────────────────────────────
//

export const serviceName = get('SERVER_NAME') || 'deno-service';

export const servicePort = parseInt(get('SERVER_POST') || '80', 10);

//
// ─── SERVICE MONGO ──────────────────────────────────────────────────────────────
//
export const serviceMongoHosts = JSON.parse(get('SERVICE_MONGO_HOSTS') || '[""]');

export const serviceMongoUserName = get('SERVICE_MONGO_USERNAME') || '';

export const serviceMongoPassWord = get('SERVICE_MONGO_PASSWORD') || '';

export default {};
