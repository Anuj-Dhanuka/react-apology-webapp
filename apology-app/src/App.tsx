import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import "./App.css";

const reasons: string[] = [
  "You’re my peace after a long day ❤️",
  "Your voice is my favorite sound 😍",
  "Even your anger makes you look cute 😅",
  "You’re my favorite person on Earth 🌍",
  "I love you more every single day 💖",
];

function App() {
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  const apology =
    "Yamini, I slept without our video call and I regret it. Please forgive me. Let me make it up to you… - Anuj ❤️";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(apology.slice(0, i));
      i++;
      if (i > apology.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const nextReason = () => {
    setIndex((prev) => (prev + 1) % reasons.length);
  };

  return (
    <div className="app">
      <div className="floating-hearts">
  {[...Array(20)].map((_, i) => (
    <div className="heart" key={i} style={{
      left: `${Math.random() * 100}%`,
      animationDuration: `${5 + Math.random() * 5}s`,
      animationDelay: `${Math.random() * 5}s`
    }} />
  ))}
</div>

      {showConfetti && <Confetti width={width} height={height} recycle={false} />}

      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/recorded_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sorry, My Love 💔
        </motion.h1>

        <motion.p
          className="typing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          {typedText}
        </motion.p>

        <motion.div
          className="reason-box"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <h2>Why I Love You, Yamini 😘</h2>
          <p>{reasons[index]}</p>
          <button onClick={nextReason}>Next Reason</button>
        </motion.div>

        <motion.div
          className="cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <h2>Let’s talk now...</h2>
          <a
  href="https://wa.me/917981738176?text=Hi%20Yamini%2C%20let's%20video%20call%20now%20❤️"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="cta-button">Video Call Me on WhatsApp 😘</button>
</a>

        </motion.div>
      </div>
    </div>
  );
}

export default App;
