import PropTypes from 'prop-types';

function randomColor() { 
  return Math.floor(Math.random() * 255); 
};

function Statistics({ statTitle, items }) {
  return (
    <section class="statistics">
      {statTitle && <h3 class="statistics-title">{statTitle}</h3>}

      <ul class="stat-list">
        {items.map(item => (
          <li key={item.id} class="item" style={{backgroundColor: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`}}>
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}%</span>
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