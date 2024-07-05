const loadFeatures = () =>
  import("../framerFeatures/features").then((res) => res.default);

export default loadFeatures;
