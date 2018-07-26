let RequestService = (function(){

    let requests = [];

    function getRequestsForTable(data){
        data.forEach(function(item){
//            item.startDate = item.startDate.slice(0,10);
//            item.endDate = item.endDate.slice(0,10);
            let request = {
                startDate : item.startDate.slice(0,10),
                endDate : item.endDate.slice(0,10),
                description : item.descr,
                employeeid : item.empId,
                employeename : item.fname,
                status : item.status,
                leaveleft : item.leaveLeft,
                leavedays : item.numLeaveDays
            }
            requests = requests.concat(request);
        })
        return requests;
    }

    return {
        getRequestsForTable : getRequestsForTable
    };
})()