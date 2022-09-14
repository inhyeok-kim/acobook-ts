import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "src/old/redux/RootReducer";
import { getHistoryByDate } from "src/service/HistoryService";
import HistoryList from "./HistoryList";

interface propType{
    selectDate : Date
}

export default function CalendarList({
    selectDate
} : propType){
    const dispatch = useDispatch();
    const reload = useSelector((state : RootReducerType)=> state.Reload);

    const [todayHistoryList, setTodayHistoryList] = useState<HistoryType[]>([])
    useEffect(()=>{
        loadHistoryData();
    },[reload,selectDate]);

    async function loadHistoryData(){
        const result = await getHistoryByDate(selectDate);
        setTodayHistoryList(result as HistoryType[]);
    }

    return (
        <HistoryList today={true} list={todayHistoryList} />
    )
}