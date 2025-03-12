"use client";
import { useState, useEffect } from "react";
import QRCode from "qrcode";
import { motion } from "framer-motion";
import React from 'react';
import styled from 'styled-components';

export default function Home() {
  const [qr, setQr] = useState("");
  const [link, setLink] = useState("");

  const generateQR = async () => {
    if (typeof window !== "undefined") {
      const timestamp = Math.floor(Date.now() / 300000);
      const dynamicURL = `/dynamic/${timestamp}`;
      setLink(dynamicURL);

      try {
        const qrData = await QRCode.toDataURL(window.location.origin + dynamicURL);
        setQr(qrData);
      } catch (error) {
        console.error("QR Code generation failed:", error);
      }
    }
  };

  useEffect(() => {
    generateQR();
    const interval = setInterval(generateQR, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-800 text-white p-6">
      <motion.h1 
        className="text-3xl md:text-4xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Scan the QR Code
      </motion.h1>

      {qr && (
        <motion.div
          className="bg-white p-4 mb-10 rounded-2xl shadow-2xl flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={qr} alt="QR Code" className="w-48 h-48" />
        </motion.div>
      )}
      <StyledWrapper>
      <a href={link}><button>
        من هنا 👉🏻
      </button></a>
    </StyledWrapper>
    </div>
  );
}
  const StyledWrapper = styled.div`
  button {
    background: transparent;
    color: #fff;
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    padding: 20px 30px;
    cursor: pointer;
    perspective: 30rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.308);
  }

  button::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    background: linear-gradient(
      320deg,
      rgba(0, 140, 255, 0.678),
      rgba(128, 0, 128, 0.308)
    );
    z-index: 1;
    transition: background 3s;
  }

  button:hover::before {
    animation: rotate 1s;
    transition: all 0.5s;
  }

  @keyframes rotate {
    0% {
      transform: rotateY(180deg);
    }

    100% {
      transform: rotateY(360deg);
    }
  }`;

