const formatDate = (date:Date) => {
    const day = date.getDate().toString()
    const dayFinaly = day.length === 1 ? '0' + day : day

    const month = (date.getMonth()+1).toString()
    console.log(month)
    const monthFilnay = month.length === 1 ? '0' + month : month

    const year = date.getFullYear().toString()
    
    return `${dayFinaly}/${monthFilnay}/${year}`
}

export default formatDate