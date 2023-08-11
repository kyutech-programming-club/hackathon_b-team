/* Mypage.js（完成版） */

import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./FirebaseConfig.js";
import {
  useNavigate,
  Navigate
} from "react-router-dom";
import { Link } from 'react-router-dom';


const Mypage = () => {
  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login/");
  }

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/login/`} />
          ) : (
            <>
            <h1>Home</h1>
            <p>
              ルール説明
            </p>
            <p>
              startを押すとカウントダウンが始まる
              <br />
              出てくる広告を全部消して
              <br />
              タイムを競おう
            </p>
                <Link to="/gamepage">start</Link>
              <br></br>
              <Link to="/ranking">ランキング</Link>
              <br></br>
              <button onClick={logout}>ログアウト</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Mypage;