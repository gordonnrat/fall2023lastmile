// LeaderboardItem.tsx
import React from 'react';
import '../css/leaderboardItem.css';

interface LeaderboardItemProps {
  rank: number;
  username: string;
  score: number;
  maxScore: number;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ rank, username, score, maxScore }) => {
  const scoreBarWidth = `${(score / maxScore) * 100}%`;

  return (
    <div className="leaderboard-item">
      <div className="rank">{rank}</div>
      <span className="username">{username}</span>
      <div className="score-bar-container">
        <div className="score-bar" style={{ width: scoreBarWidth }}></div>
      </div>
      <span className="score">{score}</span>
    </div>
  );
}

export default LeaderboardItem;