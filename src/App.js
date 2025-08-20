import React, { useState } from 'react';
import { Calendar, Trophy, Target, Users, AlertTriangle, Square, Menu, X, Home } from 'lucide-react';

const SoccerTournamentApp = () => {
  const [currentPage, setCurrentPage] = useState('fixtures');
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Team data with logos and players
  const teams = {
    'HIMALAYAN TIGER': {
      logo: '🐅',
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
      logo: '🦏',
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
      logo: '🐯',
      color: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      bgColor: '#faf5ff',
      players: [
        'Nuruddin Emon (C)', 'Tausif Islam', 'Pallab Sarkar', 'Rajesh Chakraborty', 'Shadman Shahriar',
        'Ahmed Selim Anwar Shuvo', 'Ariful Haque', 'Sabid Mahmud', 'Muntasir Mishu',
        'Kazi Sifatul Islam', 'Tarek Sabh Uddin', 'Amlan Majumder', 'Zarif', 'Taiyyab Mohammad Zayeb'
      ]
    },
    'KHUKURI CROSS': {
      logo: '⚔️',
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
      team1: 'HIMALAYAN TIGER', 
      team2: 'NEPALI RHINOS', 
      date: '08/20/2025',
      time: '3:00 PM',
      score1: null,
      score2: null,
      status: 'upcoming'
    },
    { 
      id: 2,
      team1: 'BENGALI TIGERS', 
      team2: 'KHUKURI CROSS', 
      date: '08/22/2025',
      time: '4:00 PM',
      score1: null,
      score2: null,
      status: 'upcoming'
    },
    { 
      id: 3,
      team1: 'HIMALAYAN TIGER', 
      team2: 'BENGALI TIGERS', 
      date: '08/24/2025',
      time: '3:30 PM',
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
      team1: 'HIMALAYAN TIGER', 
      team2: 'KHUKURI CROSS', 
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
 
  // Tournament statistics - UPDATE THESE DAILY ---------------------------------------------------------------------------------------------------
  const stats = {
    topScorer: { name: 'Player Name', team: 'TEAM NAME', goals: 0 },
    topAssists: { name: 'Player Name', team: 'TEAM NAME', assists: 0 },
    redCards: { 
      count: 0, 
      details: []
    },
    yellowCards: { 
      count: 0, 
      details: []
    }
  };

  // League table - UPDATE THESE DAILY---------------------------------------------------------------------------------------------------
  const leagueTable = [
    { team: 'HIMALAYAN TIGER', wins: 0, losses: 0, draws: 0, points: 0, goalDiff: 0, goalsFor: 0, goalsAgainst: 0 },
    { team: 'NEPALI RHINOS', wins: 0, losses: 0, draws: 0, points: 0, goalDiff: 0, goalsFor: 0, goalsAgainst: 0 },
    { team: 'BENGALI TIGERS', wins: 0, losses: 0, draws: 0, points: 0, goalDiff: 0, goalsFor: 0, goalsAgainst: 0 },
    { team: 'KHUKURI CROSS', wins: 0, losses: 0, draws: 0, points: 0, goalDiff: 0, goalsFor: 0, goalsAgainst: 0 }
  ].sort((a, b) => b.points - a.points || b.goalDiff - a.goalDiff);

  const menuItems = [
    { id: 'fixtures', label: 'Fixtures', icon: Calendar },
    { id: 'table', label: 'League Table', icon: Home },
    { id: 'statistics', label: 'Statistics', icon: Trophy }
  ];

  const TeamModal = ({ team, onClose }) => (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'white',
          borderRadius: '16px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '80vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ 
          background: teams[team].color, 
          padding: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '3rem' }}>{teams[team].logo}</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{team}</h2>
          </div>
          <button 
            onClick={onClose}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'white', 
              fontSize: '2rem', 
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            ×
          </button>
        </div>
        
        <div style={{ padding: '2rem', flex: 1, overflow: 'auto' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Users size={24} />
            Squad ({teams[team].players.length} players)
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem' 
          }}>
            {teams[team].players.map((player, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem',
                background: '#f9fafb',
                borderRadius: '8px',
                gap: '1rem'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.875rem'
                }}>
                  {index + 1}
                </div>
                <span style={{ fontWeight: '500' }}>{player}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const FixturesPage = () => (
    <div>
      <h2 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        marginBottom: '2rem', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem' 
      }}>
        <Calendar size={32} color="#2563eb" />
        Fixtures & Results
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {fixtures.map((fixture, index) => (
          <div key={index} style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '2rem',
                flex: 1,
                justifyContent: 'space-between',
                minWidth: '300px'
              }}>
                <button 
                  onClick={() => setSelectedTeam(fixture.team1)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}
                  onMouseEnter={e => e.target.style.background = teams[fixture.team1].bgColor}
                  onMouseLeave={e => e.target.style.background = 'transparent'}
                >
                  <span style={{ fontSize: '2rem' }}>{teams[fixture.team1].logo}</span>
                  <span>{fixture.team1}</span>
                </button>
                
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  {fixture.status === 'completed' ? (
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                      {fixture.score1} - {fixture.score2}
                    </div>
                  ) : (
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6b7280' }}>VS</div>
                  )}
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
                    {fixture.date} • {fixture.time}
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedTeam(fixture.team2)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    flexDirection: 'row-reverse'
                  }}
                  onMouseEnter={e => e.target.style.background = teams[fixture.team2].bgColor}
                  onMouseLeave={e => e.target.style.background = 'transparent'}
                >
                  <span style={{ fontSize: '2rem' }}>{teams[fixture.team2].logo}</span>
                  <span>{fixture.team2}</span>
                </button>
              </div>
              
              <div style={{
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '500',
                background: fixture.status === 'completed' ? '#dcfce7' : '#fef3c7',
                color: fixture.status === 'completed' ? '#166534' : '#92400e'
              }}>
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
      <h2 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        marginBottom: '2rem', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem' 
      }}>
        <Home size={32} color="#7c3aed" />
        League Table
      </h2>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              color: 'white'
            }}>
              <tr>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Pos</th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>Team</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>P</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>W</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>D</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>L</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>GF</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>GA</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>GD</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>Pts</th>
              </tr>
            </thead>
            <tbody>
              {leagueTable.map((team, index) => (
                <tr key={team.team} style={{ 
                  background: index === 0 ? '#fef3c7' : index % 2 === 0 ? '#f9fafb' : 'white'
                }}>
                  <td style={{ padding: '1rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '0.875rem',
                      background: index === 0 ? '#f59e0b' : 
                                 index === 1 ? '#9ca3af' : 
                                 index === 2 ? '#f97316' : '#e5e7eb',
                      color: index < 3 ? 'white' : '#374151'
                    }}>
                      {index + 1}
                    </div>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <button 
                      onClick={() => setSelectedTeam(team.team)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '600'
                      }}
                    >
                      <span style={{ fontSize: '1.5rem' }}>{teams[team.team].logo}</span>
                      <span>{team.team}</span>
                    </button>
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>{team.wins + team.draws + team.losses}</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#059669' }}>{team.wins}</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#d97706' }}>{team.draws}</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#dc2626' }}>{team.losses}</td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>{team.goalsFor}</td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>{team.goalsAgainst}</td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>{team.goalDiff > 0 ? '+' : ''}{team.goalDiff}</td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>
                    <span style={{
                      background: '#dbeafe',
                      color: '#1e40af',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontWeight: 'bold'
                    }}>
                      {team.points}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const StatisticsPage = () => {
    const StatCard = ({ icon: Icon, title, value, subtitle, bgColor, details = [], cardType = null }) => (
      <div style={{
        background: bgColor,
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
        minHeight: '200px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>{title}</p>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>{value}</p>
            {subtitle && <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>{subtitle}</p>}
          </div>
          <div style={{
            padding: '1rem',
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
            borderRadius: '12px'
          }}>
            <Icon size={32} color="white" />
          </div>
        </div>
        
        {details && details.length > 0 && (cardType === 'red' || cardType === 'yellow') && (
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              {cardType === 'red' ? 'Red Cards:' : 'Yellow Cards:'}
            </p>
            <div style={{ maxHeight: '100px', overflowY: 'auto' }}>
              {details.map((card, index) => (
                <div key={index} style={{
                  fontSize: '0.75rem',
                  color: '#6b7280',
                  background: '#f9fafb',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  marginBottom: '0.25rem'
                }}>
                  <span style={{ fontWeight: '500' }}>{card.player}</span>
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
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem' 
        }}>
          <Trophy size={32} color="#059669" />
          Tournament Statistics
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          <StatCard
            icon={Trophy}
            title="Top Scorer"
            value={stats.topScorer.goals}
            subtitle={`${stats.topScorer.name} (${stats.topScorer.team})`}
            bgColor="linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)"
          />
          <StatCard
            icon={Target}
            title="Most Assists"
            value={stats.topAssists.assists}
            subtitle={`${stats.topAssists.name} (${stats.topAssists.team})`}
            bgColor="linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)"
          />
          <StatCard
            icon={Square}
            title="Red Cards"
            value={stats.redCards.count}
            subtitle="Total issued"
            bgColor="linear-gradient(135deg, #fecaca 0%, #fca5a5 100%)"
            details={stats.redCards.details}
            cardType="red"
          />
          <StatCard
            icon={AlertTriangle}
            title="Yellow Cards"
            value={stats.yellowCards.count}
            subtitle="Total issued"
            bgColor="linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)"
            details={stats.yellowCards.details}
            cardType="yellow"
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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #f3e8ff 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #1d4ed8 100%)',
        color: 'white',
        padding: '3rem 0',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <Trophy size={48} color="#fbbf24" />
          <span>TXST Nepali Football Tournament</span>
        </div>
        <p style={{ fontSize: '1.25rem', opacity: 0.9, margin: 0 }}>Champions League Style Competition</p>
      </div>

      {/* Navigation */}
      <nav style={{
        background: 'white',
        borderBottom: '2px solid #e5e7eb',
        padding: '0 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '60px'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Tournament</div>
          
          {/* Desktop Menu */}
          <ul style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            {menuItems.map(item => (
              <li key={item.id}>
                <div
                  style={{
                    padding: '0.75rem 1.5rem',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '500',
                    background: currentPage === item.id ? '#dbeafe' : 'transparent',
                    color: currentPage === item.id ? '#1e40af' : '#374151'
                  }}
                  onClick={() => setCurrentPage(item.id)}
                >
                  <item.icon size={20} />
                  {item.label}
                </div>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '4px'
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            background: 'white',
            borderBottom: '2px solid #e5e7eb',
            zIndex: 100,
            padding: '1rem 2rem'
          }}>
            <ul style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem', 
              listStyle: 'none', 
              margin: 0, 
              padding: 0 
            }}>
              {menuItems.map(item => (
                <li key={item.id}>
                  <div
                    style={{
                      padding: '0.75rem 1.5rem',
                      cursor: 'pointer',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: '500',
                      background: currentPage === item.id ? '#dbeafe' : 'transparent',
                      color: currentPage === item.id ? '#1e40af' : '#374151'
                    }}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <item.icon size={20} />
                    {item.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
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