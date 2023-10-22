import React from 'react'

export default function Leaderboard(props) {

    const sortedLeaderboard = props.leaderboard.sort((a, b) => b.score - a.score)

    const leaderboard = sortedLeaderboard.map((element, index) => (
        <div key={index}>

                <tr>
                    <td>{element.name}</td>
                    <td>{element.last_resting_hr || "null"}</td>
                    <td>{element.score}</td>

                </tr>
        </div>
    ))
    let uid
    if (props.isAuthenticated) {
        // obtain firebase Oauth user_id
        uid = props.user.uid
    }


    return (
        <div className='leaderboard'>
          <table className='content-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Resting Heart Rate (BPM)</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {sortedLeaderboard.map((element, index) => (
                <tr key={index} >
                  <td>{element.name}</td>
                  <td>{element.last_resting_hr || "null"}</td>
                  <td>{element.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      
}
