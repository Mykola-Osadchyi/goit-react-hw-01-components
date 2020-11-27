import PropTypes from 'prop-types';

function randomColor() {
  return Math.floor(Math.random() * 255);
}

function Statistics({ statTitle, items }) {
  return (
    <section className="statistics">
      {statTitle && <h3 className="statistics-title">{statTitle}</h3>}

      <ul className="stat-list">
        {items.map(item => (
          <li
            key={item.id}
            className="item"
            style={{
              backgroundColor: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
            }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  statTitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
