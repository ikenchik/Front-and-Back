import React from "react";

function Error() {
  return (
    <div className="error">
      <body style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '100px',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>404</div>
        <div style={{
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>Ошибка - страница не найдена</div>
      </body>
    </div>
  );
}

export default Error;