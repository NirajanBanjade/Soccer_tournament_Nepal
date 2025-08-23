import React, { useState } from 'react';
import { Calendar, Trophy, Target, Users, AlertTriangle, Square, Menu, X, Home } from 'lucide-react';
import './App.css';
import HTLogo from "./images/HT.png";
import NRLogo from "./images/NR.png";
import BTLogo from "./images/BT.png";
import KCLogo from "./images/KC.png";

const SoccerTournamentApp = () => {
  const [currentPage, setCurrentPage] = useState('fixtures');
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Team data with PNG logos and players
  const teams = {
    'HIMALAYAN TIGERS': {
      logo: HTLogo, // Add your PNG file path here
      color: 'linear-gradient(135deg, #f97316 0%, #ca8a04 100%)',
      bgColor: '#fff7ed',
      players: [
        'Kiran Rawat (C) ', 'Kissor Kissor', 'Rajib Badwal', 'Semantha', 'Tiloschan Karki',
        'Shivendra Bhagat', 'Yadav Kaushal', 'Ronish Karki', 'Shubham Dahal',
        'Jamie', 'Suyog Khatri', 'Pranay Shrestha', 'Ananta Aryal', 'Omar',
        'Paras Raj Gautam', 'Pranaya Poudel', 'Soyuj Rupakheti', 'Santosh Gurung', 'Adarsh Gurung'
      ]
    },
    'NEPALI RHINOS': {
      logo: NRLogo, // Add your PNG file path here
      color: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
      bgColor: '#fef2f2',
      players: [
        'Pukar Sedai (C)', 'Safal Neupane', 'Sugam Pandey', 'Sushmit Sharma', 'Anubhav Bhetuwal',
        'Prajwal Bikram Kunwar', 'Ganesh Aryal', 'Milan Gurung', 'Suman Acharya',
        'Kshitiz Bhandari', 'Sushan Timsina', 'Swapnil Basnet', 'Pravidhi Neupane',
        'Rabin Gaire', 'Manjesh Mishra', 'Yugal Thapa', 'Arjun Gyawali', 'Ankit Bhandari', 'Oasis Pandey'
      ]
    },
    'BENGALI TIGERS': {
      logo: BTLogo, // Add your PNG file path here
      color: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      bgColor: '#faf5ff',
      players: [
        'Nuruddin Emon (C)', 'Tausif Islam', 'Pallab Sarkar', 'Rajesh Chakraborty', 'Shadman Shahriar',
        'Ahmed Selim Anwar Shuvo', 'Ariful Haque', 'Sabid Mahmud', 'Muntasir Mishu',
        'Kazi Sifatul Islam', 'Tarek Sabh Uddin', 'Amlan Majumder', 'Zarif', 'Taiyyab Mohammad Zayeb'
      ]
    },
    'KHUKURI CROSS': {
      logo: KCLogo, // Add your PNG file path here
      color: 'linear-gradient(135deg, #dc2626 0%, #000000 100%)',
      bgColor: '#fef2f2',
      players: [
        'Bishal Thapa (C)', 'Dipesh Sapkota', 'Prabesh Pandey', 'Nirajan Banjade', 'Rajan Choudary',
        'Aditya Baniya', 'Rishab Dev Joshi', 'Nabin Bhattarai', 'Mahesh Ghimere',
        'Swarnim Khanal', 'Shishir Khanal', 'Piyush KC', 'Saurav Rijal', 'Madhav Poudel',
        'Sujan Acharya', 'Ramesh Giri', 'Yage Bahadur Pandey', 'Sushant Sapkota', 'Shishir Chalise'
      ]
    }
  };

  // Tournament fixtures - UPDATE THESE DAILY
  const fixtures = [
    { 
      id: 1,
      team1: 'HIMALAYAN TIGERS', 
      team2: 'KHUKURI CROSS', 
      date: '08/20/2025',
      time: '6:00 PM',
      score1: 0,
      score2: 0,
      status:  'completed'
    },
    { 
      id: 2,
      team1: 'BENGALI TIGERS', 
      team2: 'HIMALAYAN TIGERS', 
      date: '08/22/2025',
      time: '6:00 PM',
      score1: 0,
      score2: 6,
      status: 'completed'
    },
    { 
      id: 3,
      team1: 'KHUKURI CROSS', 
      team2: 'BENGALI TIGERS', 
      date: '08/24/2025',
      time: '6:30 PM',
      score1: null,
      score2: null,
      status: 'upcoming'
    },
    { 
      id: 4,
      team1: 'NEPALI RHINOS', 
      team2: 'KHUKURI CROSS', 
      date: '08/26/2025',
      time: '4:30 PM',
      score1: null,
      score2: null,
      status: 'upcoming'
    },
    { 
      id: 5,
      team1: 'HIMALAYAN TIGERS', 
      team2: 'NEPALI RHINOS', 
      date: '08/28/2025',
      time: '3:00 PM',
      score1: null,
      score2: null,
      status: 'upcoming'
    },
    { 
      id: 6,
      team1: 'NEPALI RHINOS', 
      team2: 'BENGALI TIGERS', 
      date: '08/30/2025',
      time: '4:00 PM',
      score1: null,
      score2: null,
      status: 'upcoming'
    }
  ];
 
  // Tournament statistics - UPDATE THESE DAILY
  const stats = {
    topScorer: { name: 'Kiran Rawat ', team: 'HIMALAYAN TIGERS', goals: 3 },
    topAssists: { name: 'Kiran Rawat', team: 'HIMALAYAN TIGERS', assists: 3 },
    redCards: { 
      count: 0, 
      details: []
    },
    yellowCards: { 
      count: 3, 
      details: [      { player: 'Kiran Rawat (HIMALAYAN TIGERS)', match: 1 },
        { player: 'Mahesh Ghimire (KHUKURI CROSS)', match: 1 },
      {player: 'Pallav Sarkar (Bengali Tigers),',match: 2}]
    }
  };

  // League table - UPDATE THESE DAILY
  const leagueTable = [
    { team: 'HIMALAYAN TIGERS', wins: 1, losses: 0, draws: 1, points: 4, goalDiff: 6, goalsFor: 6, goalsAgainst: 0 },
    { team: 'KHUKURI CROSS', wins: 0, losses: 0, draws: 1, points: 1, goalDiff: 0, goalsFor: 0, goalsAgainst: 0 },
    { team: 'NEPALI RHINOS', wins: 0, losses: 0, draws: 0, points: 0, goalDiff: 0, goalsFor: 0, goalsAgainst: 0 },
    { team: 'BENGALI TIGERS', wins: 0, losses: 2, draws: 0, points: 0, goalDiff: -6, goalsFor: 0, goalsAgainst: 6 }
    

  ].sort((a, b) => b.points - a.points || b.goalDiff - a.goalDiff);

  const menuItems = [
    { id: 'fixtures', label: 'Fixtures', icon: Calendar },
    { id: 'table', label: 'League Table', icon: Home },
    { id: 'statistics', label: 'Statistics', icon: Trophy }
  ];

  const TeamModal = ({ team, onClose }) => (
    <div className="team-modal" onClick={onClose}>
      <div 
        className="team-modal-content"
        onClick={e => e.stopPropagation()}
      >
        <div 
          className="team-modal-header" 
          style={{ background: teams[team].color }}
        >
          <div className="team-modal-info">
            <img 
              src={teams[team].logo} 
              alt={`${team} logo`}
              className="team-modal-logo-img"
            />
            <h2 className="team-modal-title">{team}</h2>
          </div>
          <button 
            onClick={onClose}
            className="modal-close-button"
          >
            ×
          </button>
        </div>
        
        <div className="team-modal-body">
          <h3 className="players-section-title">
            <Users size={24} />
            Squad ({teams[team].players.length} players)
          </h3>
          <div className="players-grid">
            {teams[team].players.map((player, index) => (
              <div key={index} className="player-card">
                <div className="player-number">
                  {index + 1}
                </div>
                <span className="player-name">{player}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const FixturesPage = () => (
    <div>
      <h2 className="page-header">
        <Calendar size={32} color="#2563eb" />
        Fixtures & Results
      </h2>
      <div className="fixtures-container">
        {fixtures.map((fixture, index) => (
          <div key={index} className="fixture-card">
            <div className="fixture-content">
              <div className="fixture-teams-container">
                <button 
                  onClick={() => setSelectedTeam(fixture.team1)}
                  className={`team-button team-${fixture.team1.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <img 
                    src={teams[fixture.team1].logo} 
                    alt={`${fixture.team1} logo`}
                    className="team-logo-img"
                  />
                  <span>{fixture.team1}</span>
                </button>
                
                <div className="vs-container">
                  {fixture.status === 'completed' ? (
                    <div className="score-display">
                      {fixture.score1} - {fixture.score2}
                    </div>
                  ) : (
                    <div className="vs-text">VS</div>
                  )}
                  <div className="match-info">
                    {fixture.date} • {fixture.time}
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedTeam(fixture.team2)}
                  className={`team-button reverse team-${fixture.team2.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <img 
                    src={teams[fixture.team2].logo} 
                    alt={`${fixture.team2} logo`}
                    className="team-logo-img"
                  />
                  <span>{fixture.team2}</span>
                </button>
              </div>
              
              <div className={`status-badge ${fixture.status === 'completed' ? 'status-completed' : 'status-upcoming'}`}>
                {fixture.status === 'completed' ? 'Completed' : 'Upcoming'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TablePage = () => (
    <div>
      <h2 className="page-header">
        <Home size={32} color="#7c3aed" />
        League Table
      </h2>
      <div className="table-container">
        <table className="league-table">
          <thead className="table-header">
            <tr>
              <th>Pos</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {leagueTable.map((team, index) => (
              <tr key={team.team} className={`table-row ${index === 0 ? 'champion' : ''}`}>
                <td className="table-cell">
                  <div className={`position-badge position-${index === 0 ? '1' : index === 1 ? '2' : index === 2 ? '3' : 'other'}`}>
                    {index + 1}
                  </div>
                </td>
                <td className="table-cell">
                  <button 
                    onClick={() => setSelectedTeam(team.team)}
                    className="team-info-button"
                  >
                    <img 
                      src={teams[team.team].logo} 
                      alt={`${team.team} logo`}
                      className="team-info-logo-img"
                    />
                    <span>{team.team}</span>
                  </button>
                </td>
                <td className="table-cell center">{team.wins + team.draws + team.losses}</td>
                <td className="table-cell center wins-stat">{team.wins}</td>
                <td className="table-cell center draws-stat">{team.draws}</td>
                <td className="table-cell center losses-stat">{team.losses}</td>
                <td className="table-cell center">{team.goalsFor}</td>
                <td className="table-cell center">{team.goalsAgainst}</td>
                <td className="table-cell center">{team.goalDiff > 0 ? '+' : ''}{team.goalDiff}</td>
                <td className="table-cell center">
                  <span className="points-badge">
                    {team.points}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const StatisticsPage = () => {
    const StatCard = ({ icon: Icon, title, value, subtitle, cardType, details = [] }) => (
      <div className={`stat-card ${cardType}`}>
        <div className="stat-card-header">
          <div className="stat-card-info">
            <p className="stat-title">{title}</p>
            <p className="stat-value">{value}</p>
            {subtitle && <p className="stat-subtitle">{subtitle}</p>}
          </div>
          <div className="stat-icon-container">
            <Icon size={32} color="white" />
          </div>
        </div>
        
        {details && details.length > 0 && (cardType === 'red-cards' || cardType === 'yellow-cards') && (
          <div className="card-details">
            <p className="card-details-title">
              {cardType === 'red-cards' ? 'Red Cards:' : 'Yellow Cards:'}
            </p>
            <div className="card-details-list">
              {details.map((card, index) => (
                <div key={index} className="card-detail-item">
                  <span className="card-detail-player">{card.player}</span>
                  <span> (Match {card.match})</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );

    return (
      <div>
        <h2 className="page-header">
          <Trophy size={32} color="#059669" />
          Tournament Statistics
        </h2>
        <div className="stats-grid">
          <StatCard
            icon={Trophy}
            title="Top Scorer"
            value={stats.topScorer.goals}
            subtitle={`${stats.topScorer.name} (${stats.topScorer.team})`}
            cardType="goals"
          />
          <StatCard
            icon={Target}
            title="Most Assists"
            value={stats.topAssists.assists}
            subtitle={`${stats.topAssists.name} (${stats.topAssists.team})`}
            cardType="assists"
          />
          <StatCard
            icon={Square}
            title="Red Cards"
            value={stats.redCards.count}
            subtitle="Total issued"
            cardType="red-cards"
            details={stats.redCards.details}
          />
          <StatCard
            icon={AlertTriangle}
            title="Yellow Cards"
            value={stats.yellowCards.count}
            subtitle="Total issued"
            cardType="yellow-cards"
            details={stats.yellowCards.details}
          />
        </div>
      </div>
    );
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'fixtures':
        return <FixturesPage />;
      case 'table':
        return <TablePage />;
      case 'statistics':
        return <StatisticsPage />;
      default:
        return <FixturesPage />;
    }
  };

  return (
    <div className="tournament-app">
      {/* Header */}
      <div className="app-header">
        <div className="header-title">
          <Trophy size={48} color="#fbbf24" />
          <span>TXST Nepali Football Tournament</span>
        </div>
        <p className="header-subtitle">Champions League Style Competition</p>
      </div>

      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">Tournament</div>
          
          {/* Desktop Menu */}
          <ul className="nav-desktop-menu">
            {menuItems.map(item => (
              <li key={item.id}>
                <button
                  className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => setCurrentPage(item.id)}
                >
                  <item.icon size={20} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="nav-mobile-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="nav-mobile-menu">
            <ul className="nav-mobile-list">
              {menuItems.map(item => (
                <li key={item.id}>
                  <button
                    className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <item.icon size={20} />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {renderCurrentPage()}
      </div>

      {/* Team Modal */}
      {selectedTeam && (
        <TeamModal 
          team={selectedTeam} 
          onClose={() => setSelectedTeam(null)} 
        />
      )}
    </div>
  );
};

export default SoccerTournamentApp;