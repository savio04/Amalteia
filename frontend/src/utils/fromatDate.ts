const formatDate = (date:Date) => {
    const day = date.getUTCDate().toString()
    const dayFinaly = day.length === 1 ? '0' + day : day

    const month = date.getUTCMonth().toString()
    const monthFilnay = month.length === 1 ? '0' + month : month

    const year = date.getUTCFullYear().toString()
    
    return `${dayFinaly}/${monthFilnay}/${year}`
}

export default formatDate