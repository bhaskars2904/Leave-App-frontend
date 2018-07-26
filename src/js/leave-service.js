let LeaveService = (function () {
    let leaves = [];

    function getLeavesForTable(data) {
        data.forEach(function(item) {
            let leave = item.approverDetailList.map(function (subitem) {
                return {
                    leaveId: item.leaveId,
                    startDate: item.startDate.slice(0,10),
                    endDate: item.endDate.slice(0,10),
                    description: item.descr,
                    Approver: subitem.employeeDetail.fname + ' ' + subitem.employeeDetail.lname,
                    ApproverMail: subitem.employeeDetail.mail,
                    Status: subitem.status
                };
            });

            leaves = leaves.concat(leave);
        });

        return leaves;
    }


    return {
        getLeavesForTable: getLeavesForTable
    };
})()