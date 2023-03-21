 export const getBirthYearsArray=()=>{
    //--let current year
    let cr_year=new Date().getFullYear();;
    let start_year=cr_year-18;
    let result =[];
    for (let index = 0; index <=42; index++) {
        result.push(start_year--)
    }
    return result.reverse()    
  }

  export const getMonthsArray=()=>{
    return ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec" ]


    // return [
    //     {id:1,'name':"Jan"},
    //     {id:2,'name':"Feb"},
    //     {id:3,'name':"Mar"},
    //     {id:4,'name':"Apr"},
    //     {id:5,'name':"May"},
    //     {id:6,'name':"Jun"},
    //     {id:7,'name':"Jul"},
    //     {id:8,'name':"Aug"},
    //     {id:9,'name':"Sept"},
    //     {id:10,'name':"Oct"},
    //     {id:11,'name':"Nov"},
    //     {id:12,'name':"Dec"},
    // ]
}


export const getDaysInMonth =(month,year)=> {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    const monthSrNo=getMonthsArray().indexOf(month)
    let total_days=new Date(year, monthSrNo+1, 0).getDate();
    let days=[];
    for (let index = 1; index <= total_days; index++){
        days.push(index)       
    }
   return days;
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };