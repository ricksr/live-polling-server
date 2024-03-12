const getLastAndCurrentMonthStartEndDates = () => {
    const currentDate = new Date();

    const lastMonthStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    const lastMonthEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

    const currentMonthStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const currentMonthEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const formatDateString = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    };

    return {
        lastMonthStartDate: formatDateString(lastMonthStartDate),
        lastMonthEndDate: formatDateString(lastMonthEndDate),
        currentMonthStartDate: formatDateString(currentMonthStartDate),
        currentMonthEndDate: formatDateString(currentMonthEndDate)
    };
}
module.exports = {
    getLastAndCurrentMonthStartEndDates
}