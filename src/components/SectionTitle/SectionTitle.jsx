import propTypes from 'prop-types';

export const SectionTitle = ({ title, children }) => (
  <div>
    <h2 className={CSS.title}>{title}</h2>
    {children}
  </div>
);

SectionTitle.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
