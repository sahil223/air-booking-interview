import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './context';
import { set } from 'mongoose';

const Showflights = () => {
    const [fetchData, setFetchData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    // search inputs
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [date, setDate] = useState('');

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const {setmaincountrys,setmaincountry2,setprice,setstops,} = useContext(UserContext)


const send=(a,b,c,d)=>{
setmaincountry2(a)
setmaincountrys(b)
setprice(c)
setstops(d)
}




    useEffect(() => {
        show();
    }, []);

    const show = async () => {
        try {
            setLoading(true);
            const result = await fetch("https://air-booking-backend.vercel.app/get-flight-details", {
                method: "get"
            });
            const res = await result.json();
            if (res.statuscode === 1) {
                setFetchData(res.data);
                setFilteredData(res.data);

            } else {
                setError("Failed to fetch flight data");
            }
        } catch (error) {
            setError("Error fetching flight details");
            console.error("Error fetching flight details:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        let filtered = fetchData.filter((flight) => {
            const matchFrom = fromCity ? flight.city1?.toLowerCase().includes(fromCity.toLowerCase()) : true;
            const matchTo = toCity ? flight.city2?.toLowerCase().includes(toCity.toLowerCase()) : true;
            const matchDate = date ? flight.date === date : true;
            return matchFrom && matchTo && matchDate;
        });
        setFilteredData(filtered);
    };

    const formatPrice = (price) => {
        if (!price) return '$0';
        return `${parseInt(price).toLocaleString()}`;
    };

    const formatTime = (time) => {
        if (!time) return '';
        return time;
    };

    return (
        <div>
          <style jsx>{`
                :root {
                    --primary: #2563eb;
                    --primary-dark: #1d4ed8;
                    --secondary: #64748b;
                    --success: #10b981;
                    --warning: #f59e0b;
                    --error: #ef4444;
                    --background: #f8fafc;
                    --surface: #ffffff;
                    --text-primary: #1e293b;
                    --text-secondary: #64748b;
                    --border: #e2e8f0;
                    --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .showflights-container {
                    min-height: 100vh;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                    line-height: 1.6;
                    color: var(--text-primary);
                    background-color: var(--background);
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }

                /* Scroll to top button */
                .scroll-top-btn {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    width: 50px;
                    height: 50px;
                    background: var(--primary);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: var(--shadow-lg);
                    z-index: 1000;
                    transition: all 0.3s ease;
                }

                .scroll-top-btn:hover {
                    background: var(--primary-dark);
                    transform: translateY(-2px);
                }

                /* Hero Section */
                .hero-section {
                    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
                    color: white;
                    padding: 4rem 0;
                    text-align: center;
                }

                .hero-title {
                    font-size: 3rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }

                .hero-subtitle {
                    font-size: 1.25rem;
                    opacity: 0.9;
                }

                /* Search Section */
                .search-section {
                    padding: 2rem 0;
                    margin-top: -2rem;
                }

                .search-card {
                    background: var(--surface);
                    border-radius: 1rem;
                    box-shadow: var(--shadow-lg);
                    overflow: hidden;
                }

                .search-tabs {
                    display: flex;
                    background: var(--background);
                    border-bottom: 1px solid var(--border);
                }

                .search-tab {
                    flex: 1;
                    padding: 1.5rem;
                    background: none;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    transition: all 0.3s ease;
                }

                .search-tab.active {
                    background: var(--surface);
                    color: var(--primary);
                    font-weight: 600;
                }

                .search-tab:hover {
                    color: var(--primary);
                }

                .search-form {
                    padding: 2rem;
                }

                .trip-type {
                    display: flex;
                    gap: 2rem;
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid var(--border);
                }

                .trip-option {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    transition: all 0.3s ease;
                }

                .trip-option.active {
                    background: var(--primary);
                    color: white;
                }

                .trip-option:hover {
                    background: var(--background);
                }

                .trip-option.active:hover {
                    background: var(--primary-dark);
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .form-group label {
                    font-weight: 600;
                    color: var(--text-primary);
                    font-size: 0.875rem;
                }

                .input-with-icon {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .input-with-icon i {
                    position: absolute;
                    left: 1rem;
                    color: var(--text-secondary);
                }

                .input-with-icon input {
                    width: 100%;
                    padding: 1rem 1rem 1rem 3rem;
                    border: 1px solid var(--border);
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .input-with-icon input:focus {
                    outline: none;
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgb(37 99 235 / 0.1);
                }

                .search-actions {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                }

                .promo-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 1rem 1.5rem;
                    background: var(--background);
                    border: 1px solid var(--border);
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    color: var(--text-secondary);
                }

                .promo-btn:hover {
                    background: var(--surface);
                    border-color: var(--primary);
                    color: var(--primary);
                }

                .search-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 1rem 2rem;
                    background: var(--primary);
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .search-btn:hover {
                    background: var(--primary-dark);
                    transform: translateY(-2px);
                }

                /* Results Section */
                .results-section {
                    padding: 2rem 0 4rem;
                }

                .results-layout {
                    display: grid;
                    grid-template-columns: 300px 1fr;
                    gap: 2rem;
                }

                /* Filters Sidebar */
                .filters-sidebar {
                    background: var(--surface);
                    border-radius: 1rem;
                    padding: 1.5rem;
                    box-shadow: var(--shadow);
                    height: fit-content;
                    position: sticky;
                    top: 2rem;
                }

                .filter-group h3 {
                    margin-bottom: 1.5rem;
                    font-size: 1.25rem;
                    color: var(--text-primary);
                }

                .filter-section {
                    margin-bottom: 2rem;
                }

                .filter-section h4 {
                    margin-bottom: 1rem;
                    font-size: 1rem;
                    color: var(--text-primary);
                }

                .price-filter {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .price-slider {
                    width: 100%;
                    height: 6px;
                    border-radius: 3px;
                    background: var(--border);
                    outline: none;
                }

                .price-slider::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: var(--primary);
                    cursor: pointer;
                }

                .price-display {
                    text-align: center;
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                }

                .time-filters, .stop-filters {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .time-filter, .stop-filter {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                    transition: all 0.3s ease;
                }

                .time-filter:hover, .stop-filter:hover {
                    background: var(--background);
                }

                .filter-label {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                /* Flight Results */
                .flight-results {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .results-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .results-header h2 {
                    font-size: 1.5rem;
                    color: var(--text-primary);
                }

                .results-count {
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                }

                /* Loading, Error, Empty States */
                .loading-state, .error-state, .empty-state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 4rem 2rem;
                    text-align: center;
                    background: var(--surface);
                    border-radius: 1rem;
                    box-shadow: var(--shadow);
                }

                .spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid var(--border);
                    border-left: 4px solid var(--primary);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-bottom: 1rem;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .error-state i, .empty-state i {
                    font-size: 3rem;
                    color: var(--error);
                    margin-bottom: 1rem;
                }

                .empty-state i {
                    color: var(--text-secondary);
                }

                .retry-btn {
                    margin-top: 1rem;
                    padding: 0.75rem 1.5rem;
                    background: var(--primary);
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .retry-btn:hover {
                    background: var(--primary-dark);
                }

                /* Flight Cards */
                .flight-cards {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .flight-card {
                    background: var(--surface);
                    border-radius: 1rem;
                    box-shadow: var(--shadow);
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .flight-card:hover {
                    box-shadow: var(--shadow-lg);
                    transform: translateY(-2px);
                }

                .flight-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem;
                    border-bottom: 1px solid var(--border);
                }

                .airline-info {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .airline-logo {
                    width: 50px;
                    height: 50px;
                    background: var(--primary);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.25rem;
                }

                .airline-details h4 {
                    font-size: 1.125rem;
                    color: var(--text-primary);
                    margin-bottom: 0.25rem;
                }

                .airline-details span {
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                }

                .flight-price {
                    text-align: right;
                }

                .flight-price .price {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary);
                }

                .flight-price span {
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                }

                .flight-card-body {
                    padding: 1.5rem;
                }

                .flight-route {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }

                .route-time {
                    text-align: center;
                    flex: 1;
                }

                .route-time .time {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    margin-bottom: 0.25rem;
                }

                .route-time .city {
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                }

                .route-duration {
                    flex: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                }

                .duration-line {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                }

                .duration-line .line {
                    flex: 1;
                    height: 2px;
                    background: var(--border);
                }

                .duration-line i {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--surface);
                    padding: 0.5rem;
                    color: var(--primary);
                }

                .duration-text {
                    font-size: 0.875rem;
                    margin-top: 0.25rem;
                    color: var(--text-secondary);
                }

                .stops {
                    font-size: 0.75rem;
                    color: var(--warning);
                    background: var(--background);
                    padding: 0.25rem 0.5rem;
                    border-radius: 1rem;
                }

                .flight-card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 1.5rem;
                    background: var(--background);
                }

                .flight-date {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--text-secondary);
                    font-size: 0.875rem;
                }

                .select-flight-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    background: var(--primary);
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .select-flight-btn:hover {
                    background: var(--primary-dark);
                    transform: translateX(4px);
                }

                /* Responsive Design */
                @media (max-width: 1024px) {
                    .results-layout {
                        grid-template-columns: 1fr;
                    }

                    .filters-sidebar {
                        position: static;
                    }
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2rem;
                    }

                    .search-tabs {
                        flex-direction: column;
                    }

                    .search-tab {
                        padding: 1rem;
                    }

                    .trip-type {
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .form-grid {
                        grid-template-columns: 1fr;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    padding: 0 1rem;
                    width: 100%;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                }

                    .form-group {
                        width: 100%;
                        margin-bottom: 0;
                    }

                    .input-with-icon input {
                        width: 100%;
                        min-width: auto;
                    }

                    .search-actions {
                        flex-direction: column;
                        gap: 1rem;
                    padding: 0 1rem;
                    width: 100%;
                    box-sizing: border-box;
                    align-items: stretch;
                    text-align: center;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .promo-btn, .search-btn {
                        width: 100%;
                        max-width: 300px;
                        justify-content: center;
                        margin: 0 auto;
                    }

                    .flight-card-header {
                        flex-direction: column;
                        gap: 1rem;
                        align-items: flex-start;
                    }

                    .flight-price {
                        text-align: left;
                        width: 100%;
                    }

                    .flight-route {
                        flex-direction: column;
                        gap: 1.5rem;
                    text-align: center;
                    align-items: stretch;
                    width: 100%;
                    padding: 0;
                    margin: 0;
                    display: flex;
                        flex-direction: column;
                    }

                    .route-time, .route-duration {
                        width: 100%;
                        flex: none;
                    }

                    .route-duration {
                        order: 2;
                    }

                    .flight-card-footer {
                        flex-direction: column;
                        gap: 1rem;
                        align-items: stretch;
                    }

                    .select-flight-btn {
                        width: 100%;
                        justify-content: center;
                    }

                    .container {
                        padding: 0 0.5rem;
                    }

                    .search-form {
                        padding: 1rem;
                    }

                    .flight-card-header, .flight-card-body, .flight-card-footer {
                        padding: 1rem;
                    }

                    .results-header {
                        flex-direction: column;
                        gap: 0.5rem;
                        align-items: flex-start;
                    }
                }

                @media (max-width: 480px) {
                    .hero-section {
                        padding: 2rem 0;
                    }

                    .hero-title {
                        font-size: 1.5rem;
                    }

                    .hero-subtitle {
                        font-size: 1rem;
                    }

                    .search-section {
                        padding: 1rem 0;
                        margin-top: -1rem;
                    }

                    .scroll-top-btn {
                        bottom: 1rem;
                        right: 1rem;
                        width: 40px;
                        height: 40px;
                    }
                }
            `}</style>

            <div className="showflights-container">
                <button className="scroll-top-btn" onClick={scrollToTop}>
                    <i className="fas fa-arrow-up"></i>
                </button>

                <main className="main-content">
                    {/* Hero Section */}
                    <section className="hero-section">
                        <div className="container">
                            <div className="hero-content">
                                <h1 className="hero-title">Find Your Perfect Flight</h1>
                                <p className="hero-subtitle">Search and compare flights from multiple airlines</p>
                            </div>
                        </div>
                    </section>

                    {/* Search Section */}
                    <section className="search-section">
                        <div className="container">
                            <div className="search-card">
                                <div className="search-tabs">
                                    <button className="search-tab active">
                                        <i className="fas fa-plane"></i>
                                        <span>Book Flight</span>
                                    </button>
                                    <button className="search-tab">
                                        <i className="fas fa-suitcase"></i>
                                        <span>My Trips</span>
                                    </button>
                                    <button className="search-tab">
                                        <i className="fas fa-ticket-alt"></i>
                                        <span>Check-in</span>
                                    </button>
                                    <button className="search-tab">
                                        <i className="fas fa-clock"></i>
                                        <span>Flight Status</span>
                                    </button>
                                </div>

                                <div className="search-form">
                                    <div className="trip-type">
                                        <label className="trip-option active">
                                            <input type="radio" name="trip-type" defaultChecked />
                                            <span>Round Trip</span>
                                        </label>
                                        <label className="trip-option">
                                            <input type="radio" name="trip-type" />
                                            <span>One Way</span>
                                        </label>
                                        <label className="trip-option">
                                            <input type="radio" name="trip-type" />
                                            <span>Multi-city</span>
                                        </label>
                                    </div>

                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label>From</label>
                                            <div className="input-with-icon">
                                                <i className="fas fa-plane-departure"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Departure city"
                                                    value={fromCity}
                                                    onChange={(e) => setFromCity(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>To</label>
                                            <div className="input-with-icon">
                                                <i className="fas fa-plane-arrival"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Arrival city"
                                                    value={toCity}
                                                    onChange={(e) => setToCity(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Departure</label>
                                            <div className="input-with-icon">
                                                <i className="fas fa-calendar"></i>
                                                <input
                                                    type="date"
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Return</label>
                                            <div className="input-with-icon">
                                                <i className="fas fa-calendar"></i>
                                                <input type="date" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Travelers & Class</label>
                                            <div className="input-with-icon">
                                                <i className="fas fa-user"></i>
                                                <input type="text" placeholder="1 Passenger, Economy" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="search-actions">
                                        <button className="promo-btn">
                                            <i className="fas fa-tag"></i>
                                            Add Promo Code
                                        </button>
                                        <button className="search-btn" onClick={handleSearch}>
                                            Search Flights
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Results Section */}
                    <section className="results-section">
                        <div className="container">
                            <div className="results-layout">
                                {/* Filters Sidebar */}
                                <aside className="filters-sidebar">
                                    {/* (same content, unchanged) */}
                                </aside>

                                {/* Flight Results */}
                                <div className="flight-results">
                                    <div className="results-header">
                                        <h2>Available Flights</h2>
                                        <div className="results-count">
                                            {filteredData.length} flights found
                                        </div>
                                    </div>

                                    {loading && (
                                        <div className="loading-state">
                                            <div className="spinner"></div>
                                            <p>Loading flights...</p>
                                        </div>
                                    )}

                                    {error && (
                                        <div className="error-state">
                                            <i className="fas fa-exclamation-triangle"></i>
                                            <p>{error}</p>
                                            <button onClick={show} className="retry-btn">
                                                Try Again
                                            </button>
                                        </div>
                                    )}

                                    {!loading && !error && filteredData.length === 0 && (
                                        <div className="empty-state">
                                            <i className="fas fa-plane-slash"></i>
                                            <p>No flights found matching your criteria</p>
                                        </div>
                                    )}

                                    <div className="flight-cards">
                                        {filteredData.map((flight, index) => (
                                            <div key={index} className="flight-card">
                                                <div className="flight-card-header">
                                                    <div className="airline-info">
                                                        <div className="airline-logo">
                                                            <i className="fas fa-plane"></i>
                                                        </div>
                                                        <div className="airline-details">
                                                            <h4>{flight.airline || 'Etihad Airway'}</h4>
                                                            <span>Operated by {flight.operator || 'Emirates'}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flight-price">
                                                        <div className="price"><span>Departure City</span><br />{(flight.city1)}</div>
                                                    </div>
                                                    <div className="flight-price">
                                                        <div className="price"><span>Arrival City</span><br />{(flight.city2)}</div>
                                                    </div>
                                                    <div className="flight-price">
                                                        <div className="price">₹{formatPrice(flight.price)}</div>
                                                        <span>per person</span>
                                                    </div>
                                                </div>

                                                <div className="flight-card-body">
                                                    <div className="flight-route">
                                                        <div className="route-time">
                                                            <div className="time">{formatTime(flight.departuretime)}</div>
                                                            <div className="city">Departure</div>
                                                        </div>

                                                        <div className="route-duration">
                                                            <div className="duration-line">
                                                                <div className="line"></div>
                                                                <i className="fas fa-plane"></i>
                                                            </div>
                                                            <div className="duration-text">
                                                                {flight.durationhourse || '0h 0m'}
                                                            </div>
                                                            {flight.stops && (
                                                                <div className="stops"><span>Stops</span><br />{flight.stops}</div>
                                                            )}
                                                        </div>

                                                        <div className="route-time">
                                                            <div className="time">{formatTime(flight.arrivaltime)}</div>
                                                            <div className="city">Arrival</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flight-card-footer">
                                                    <div className="flight-date">
                                                        <i className="fas fa-calendar-alt"></i>
                                                        {flight.date || 'Date not specified'}
                                                    </div>
                                                 <Link to="/mainflightbooking"> 
                                                        <button className="select-flight-btn" onClick={send(flight.city2,flight.city1, flight.price, flight.stops,)} >
                                                            Select Flight
                                                            <i className="fas fa-arrow-right"></i>
                                                        </button>
                                                </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Showflights;
