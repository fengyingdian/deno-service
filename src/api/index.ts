/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: break <jixueqing@flipboard.cn>             +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/07/20 10:24:46 by break             #+#    #+#             */
/*   Updated: 2020/07/20 16:45:01 by break            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Router } from '../denotrain/index.ts';
import { api as answerBookApi } from './answerBook/index.ts';

export const api = new Router();

api.use('/answer-book', answerBookApi);