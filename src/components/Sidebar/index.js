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
        <div>
          <div className="nav-item">Widget</div>
        </div>
        <div>
          <div className="nav-item">Reviews</div>
        </div>
        <div>
          <div className="nav-item">Customers</div>
        </div>
        <div>
          <div className="nav-item">Online Analysis</div>
        </div>
        <div>
          <div className="nav-item">Settings</div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
