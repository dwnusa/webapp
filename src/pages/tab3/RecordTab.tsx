import React, { useEffect, useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import "./RecordTab.css";
import Chart1 from "components/tab3/chart/chart1";
import RecordComponent from "components/tab3/record";
import { get } from "../../services";
import { Record, httpStatus } from "../../types";
import { useParams, useLocation } from "react-router-dom";


const RecordTab: React.FC = () => {
  const [loading, setloading] = useState(true);
  const [recordsState, recordsSetState] = useState<Record[]>([]);
  const [pathnameState, pathnameSetState] = useState<string>();
  const { userId } = useParams();
  const {pathname} = useLocation();
  const id: number = userId || 1;
  useEffect(() => {
    console.log("id: ", id);
    get(`/record/user/${id}`).then((res) => {
      setloading(true);
      if (res.status === httpStatus.OK) {
        recordsSetState(res.result);
      }
      setloading(false);
    });
    console.log("location.pathname: ", pathnameState);
    return () => pathnameSetState(pathname);
  }, [pathname]);
  return (
    <IonPage>
      <IonContent>
        <div className="record-container">
          <p>낮잠을 줄이고,</p>
          <p>따뜻한 차를 마셔봐요</p>
          <p>- 닥터자마</p>
        </div>
        {!loading && <Chart1 />}
        {!loading && <RecordComponent records={recordsState} userId={userId}/>}
      </IonContent>
    </IonPage>
  );
};

export default RecordTab;
