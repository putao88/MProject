import moment from 'moment';
/**
 * @description: 将秒转化成 HH:mm:ss 格式
 * @param {*} value 时间（秒）
 * @return {*}
 */
export const changeSecondsToHours = (value) => {
  const time = moment.duration(value, 'seconds'); 
  const hours = time.hours();
  const minutes = time.minutes();
  const seconds = time.seconds();
  return moment({ h:hours, m:minutes, s:seconds }).format('HH:mm:ss');
}

/**
 * @description: 计算税率:如果当前时间间隔解锁时间小于20天（20*86400），那么税=20 - 时间间隔*2（以天为单位）
 * @param {*} time:时间（秒）
 * @return {*}
 */

 export const taxFee = (time) => {
   let fee = 0
   if (time*2 < 20*86400) {
     fee = 20 - (time*2/86400)
   }
   return fee
 }

