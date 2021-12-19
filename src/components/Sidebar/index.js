import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="nav-section">
      <nav>
        <div className="nav-item-wrapper">
          <img
            className="inline-img-dashboard"
            src="https://i.imgur.com/tlNzFCk.png"
          />
          <div className="nav-item-dashboard">Dashboard</div>
        </div>
        <div className="nav-item-wrapper">
          <img className="inline-img" src="https://i.imgur.com/kAFud9I.png" />
          <div className="nav-item">Widget</div>
        </div>
        <div className="nav-item-wrapper">
          <img className="inline-img" src="https://i.imgur.com/4NqbVDD.png" />
          <div className="nav-item">Reviews</div>
        </div>
        <div className="nav-item-wrapper">
          <img className="inline-img" src="https://i.imgur.com/m2h4a9G.png" />
          <div className="nav-item">Customers</div>
        </div>
        <div className="nav-item-wrapper">
          <img className="inline-img" src="https://i.imgur.com/ePFhQRk.png" />
          <div className="nav-item">Online Analysis</div>
        </div>
        <div className="nav-item-wrapper">
          <img className="inline-img" src="https://i.imgur.com/PRy9cyc.png" />
          <div className="nav-item">Settings</div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
