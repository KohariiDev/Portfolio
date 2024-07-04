const loadFeatures = () =>
  import("@/utils/framerFeatures/features").then((res) => res.default);

export default loadFeatures;
