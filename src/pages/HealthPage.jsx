// src/pages/HealthPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function HealthPage() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios.get("http://ec2-13-125-245-107.ap-northeast-2.compute.amazonaws.com:8000/health")
      .then((response) => {
        setStatus(response.data.message);
      })
      .catch((error) => {
        setStatus("백엔드 서버 연결 실패 😢");
      });
  }, []);

  return (
    <div>
      <h1>서버 상태 확인</h1>
      <p>{status}</p>
    </div>
  );
}

export default HealthPage;
