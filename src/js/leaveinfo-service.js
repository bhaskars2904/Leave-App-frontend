let LeaveInfoService = (function(){

//    let approverinfos = [];

//    function getLeaveInfoService(data){
//        let approverinfo = data.approverList.map(function(item){
//            return {
//                FirstName : item.fname,
//                LastName : item.lname,
//                Mail : item.mail
//            };
//        })
//        approverinfos = approverinfos.concat(approverinfo);
//    }

    function getLeaveInfoService(data){
        return data.approverList;
    }

    return {
        getLeaveInfoService : getLeaveInfoService
    };
})()