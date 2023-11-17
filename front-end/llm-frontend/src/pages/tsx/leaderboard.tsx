// Leaderboard.tsx
import React from 'react';
import '../../pages/css/leaderboard.css';
import LeaderboardItem from '../../components/tsx/LeaderboardItem';
import Sidebar from '../../components/tsx/Sidebar';
import Navbar from '../../components/tsx/Navbar';

interface LeaderboardDataItem {
  username: string;
  score: number;
  rank: number; // Add this line to include the rank property
}

  
  const Leaderboard: React.FC = () => {
    // Placeholder data
    const data: LeaderboardDataItem[] = [
      { username: 'User1', score: 150, rank: 1 },
      { username: 'User2', score: 120, rank: 2 },
      { username: 'User2', score: 50, rank: 2 },
      // Add more users as needed, each with a rank
    ];
  
    // Find the maximum score for the width calculation
    const maxScore = Math.max(...data.map(item => item.score));
  
    return (
      <body> 
        <Navbar/>
        <Sidebar/>
        
      <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      {data.map((item, index) => (
    <LeaderboardItem 
      key={index}
      username={item.username} 
      score={item.score} 
      maxScore={maxScore}
      rank={index + 1} // Calculate rank based on index if not part of the data
    />
    ))}
        
      </div>
    </body> 
    );
    
  }
  
  export default Leaderboard;
