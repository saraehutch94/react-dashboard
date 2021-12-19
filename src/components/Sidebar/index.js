import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="nav-section">
      <nav>
        <div className="nav-item-dashboard">Dashboard</div>
        <div className="nav-item">Widget</div>
        <div className="nav-item">Reviews</div>
        <div className="nav-item">Customers</div>
        <div className="nav-item">Online Analysis</div>
        <div className="nav-item">Settings</div>
      </nav>
    </div>
  );
}

export default Sidebar;
