/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   connect.ts                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: break <jixueqing@flipboard.cn>             +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/07/17 18:07:04 by break             #+#    #+#             */
/*   Updated: 2020/07/18 09:05:44 by break            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { client, options } from './index.ts';

//
// ─── CONNECT SERVICE ────────────────────────────────────────────────────────────
//

const connectService = () => {
  try {
    // although it won't return a Promise
    // but this operation still cost 10+ milliseconds
    client.connectWithOptions(options);
  } catch {
    console.error(`connect mongodb failed!`);
  }
};

// connect
connectService();

//
// ─── CONNECT DATABASE ───────────────────────────────────────────────────────────
//

const connectDatabase = (name: string) => client.database(name);

//
// ─── EXPORT ─────────────────────────────────────────────────────────────────────
//

export {
  client,
  connectService,
  connectDatabase,
};
