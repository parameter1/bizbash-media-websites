const { getAsArray } = require('@parameter1/base-cms-object-path');

const categories = (obj, key, value) => ([...new Set([
  ...getAsArray(obj, key),
  ...(value ? [value.name] : []),
])]);

module.exports = (content) => getAsArray(content, 'taxonomy.edges')
  .map(({ node }) => node.hierarchy)
  .reduce((obj, hierarchy) => {
    const [primary, secondary, tertiary] = hierarchy;
    return {
      primary_cats: categories(obj, 'primary_cats', primary),
      secondary_cats: categories(obj, 'secondary_cats', secondary),
      tertiary_cats: categories(obj, 'tertiary_cats', tertiary),
    };
  }, {});
