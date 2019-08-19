function parseAdminProps({ _start, _end, _order, _sort }) {
    const start = parseInt(_start)
    const end = parseInt(_end)
    const sort = _sort === 'id' ? '_id' : _sort
    const order = _order === 'DESC' ? -1 : 1
    return { start, end, sort, order }
}

module.exports = {
    parseAdminProps
}