import moment from 'moment'

export function simpleFormat(date) {
    if (date === undefined || date === null || date === '') {
        return date
    } else {
        return moment(date).format('YYYY-MM-DD HH:mm:ss')
    }
}

export function format(date, formater) {
    if (date === undefined || date === null || date === '') {
        return date
    } else {
        return moment(date).format(formater)
    }
}

/*
 *formatDay 从某天的00:00:00到某天23:59:59的时间段
 *params {Number} to  到哪天结束
 *params {Number} from  从哪天开始
 *return Object 对象属性startTime开始时间  对象属性endTime结束时间
 */
export function formatDay(from, to) {
    var startTime = new Date()
    var endTime = new Date()
    startTime.setTime(startTime.getTime() - 3600 * 1000 * 24 * from)
    endTime.setTime(endTime.getTime() - 3600 * 1000 * 24 * to)

    const startTimeYear = startTime.getFullYear()
    const startTimeMonth = startTime.getMonth()
    const startTimeDate = startTime.getDate()

    const endTimeTimeYear = endTime.getFullYear()
    const endTimeTimeMonth = endTime.getMonth()
    const endTimeTimeDate = endTime.getDate()

    startTime = new Date(startTimeYear + '/' + parseInt(startTimeMonth + 1) + '/' + startTimeDate + ' 00:00:00')
    endTime = new Date(endTimeTimeYear + '/' + parseInt(endTimeTimeMonth + 1) + '/' + endTimeTimeDate + ' 23:59:59')

    return {
        startTime,
        endTime
    }
}

export function yesterday(date) {
    if (date === undefined || date === null || date === '') {
        return date
    } else {
        return moment(date).subtract(1, 'day')
    }
}
