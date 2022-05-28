module.exports = {
    getProcessTime: function(startTime) {
        return `${(new Date().getTime() - startTime) / 1000} sec`
    }
}
