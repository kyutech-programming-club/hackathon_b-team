// components/ranking.js
import React, { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { db } from "../FirebaseConfig"; // Firebaseの設定ファイル
import { Link } from 'react-router-dom';

const Ranking = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    // Firebaseデータベースからタイムの短い順にランキングデータを取得
    const fetchRankings = async () => {
      const q = query(
        collection(db, "rankings"),
        orderBy("time"),
        limit(10)
      );
      const querySnapshot = await getDocs(q);

      const rankingData = [];
      querySnapshot.forEach((doc) => {
        rankingData.push({
          id: doc.id,
          userId: doc.data().userId,
          time: doc.data().time,
        });
      });

      setRankings(rankingData);
    };

    fetchRankings();
  }, []);

  return (
    <div>
      <h1>ランキング</h1>
      <ul>
        {rankings.map((ranking, index) => (
          <li key={ranking.id}>
            {index + 1}. ユーザーID: {ranking.userId}, タイム: {ranking.time}秒
          </li>
        ))}
      </ul>
    <Link to="/">Back Home</Link>
    </div>
  );
};

export default Ranking;
