import PropTypes from 'prop-types';

export const SectionTitle = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
